"""
Django REST Framework view for proxying ElevenLabs TTS API calls.
This keeps your API key secure on the server side.

Installation:
    pip install requests

Settings (settings.py):
    ELEVENLABS_API_KEY = 'your_api_key_here'
    ELEVENLABS_TTS_MODEL = 'eleven_turbo_v2_5'
    ELEVENLABS_TTS_SETTINGS = {
        'stability': 0.5,
        'similarity_boost': 0.75,
        'style': 0.0,
        'use_speaker_boost': True,
    }
    ELEVENLABS_VOICES = {
        'assistant': 'EXAVITQu4vr4xnSDxMaL',  # Bella
        'user': 'pNInz6obpgDQGcFmaJgB',       # Adam
    }

URLs (urls.py):
    from django.urls import path
    from . import views

    urlpatterns = [
        path('api/tts/speak/', views.text_to_speech, name='text_to_speech'),
        path('api/tts/voices/', views.get_voices, name='get_voices'),
        path('api/tts/set-voice/', views.set_voice, name='set_voice'),
    ]
"""

import requests
from django.conf import settings
from django.http import StreamingHttpResponse, JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


@api_view(['POST'])
@permission_classes([AllowAny])  # Or use IsAuthenticated if you want auth
def text_to_speech(request):
    """
    Convert text to speech using ElevenLabs API.
    
    Request body:
        {
            "text": "Hello, how can I help you?",
            "role": "assistant"  // or "user"
        }
    
    Returns:
        Audio stream (audio/mpeg)
    """
    # Validate request
    text = request.data.get('text')
    role = request.data.get('role', 'assistant')
    
    if not text:
        return JsonResponse({'error': 'Text is required'}, status=400)
    
    if role not in ['assistant', 'user']:
        return JsonResponse({'error': 'Role must be "assistant" or "user"'}, status=400)
    
    # Get configuration from settings
    api_key = getattr(settings, 'ELEVENLABS_API_KEY', None)
    if not api_key:
        return JsonResponse({'error': 'ElevenLabs API key not configured'}, status=500)

    # Get voice from session or fall back to settings
    session_voices = request.session.get('tts_voices', {})
    default_voices = getattr(settings, 'ELEVENLABS_VOICES', {})
    voice_id = session_voices.get(role) or default_voices.get(role)

    if not voice_id:
        return JsonResponse({'error': f'Voice not configured for role: {role}'}, status=500)
    
    model = getattr(settings, 'ELEVENLABS_TTS_MODEL', 'eleven_turbo_v2_5')
    voice_settings = getattr(settings, 'ELEVENLABS_TTS_SETTINGS', {
        'stability': 0.5,
        'similarity_boost': 0.75,
        'style': 0.0,
        'use_speaker_boost': True,
    })
    
    # Optional: Limit text length to prevent abuse
    max_length = getattr(settings, 'ELEVENLABS_MAX_TEXT_LENGTH', 5000)
    if len(text) > max_length:
        return JsonResponse({'error': f'Text too long (max {max_length} characters)'}, status=400)
    
    # Call ElevenLabs API
    try:
        response = requests.post(
            f'https://api.elevenlabs.io/v1/text-to-speech/{voice_id}',
            headers={
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': api_key,
            },
            json={
                'text': text,
                'model_id': model,
                'voice_settings': voice_settings,
            },
            stream=True,
            timeout=30,
        )
        
        if not response.ok:
            error_text = response.text
            return JsonResponse({
                'error': f'ElevenLabs API error: {response.status_code}',
                'detail': error_text
            }, status=response.status_code)
        
        # Stream the audio response back to the client
        def audio_stream():
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    yield chunk
        
        return StreamingHttpResponse(
            audio_stream(),
            content_type='audio/mpeg',
            headers={
                'Content-Disposition': 'inline',
                'Cache-Control': 'no-cache',
            }
        )
        
    except requests.exceptions.Timeout:
        return JsonResponse({'error': 'ElevenLabs API timeout'}, status=504)
    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': f'Request failed: {str(e)}'}, status=500)
    except Exception as e:
        return JsonResponse({'error': f'Unexpected error: {str(e)}'}, status=500)


# Voice Settings UI Support
@api_view(['GET'])
@permission_classes([AllowAny])
def get_voices(request):
    """
    Fetch available voices from ElevenLabs API for voice settings UI.

    Returns:
        {
            "voices": [
                {
                    "voice_id": "EXAVITQu4vr4xnSDxMaL",
                    "name": "Bella",
                    "category": "premade",
                    ...
                },
                ...
            ]
        }
    """
    api_key = getattr(settings, 'ELEVENLABS_API_KEY', None)
    if not api_key:
        return JsonResponse({'error': 'ElevenLabs API key not configured'}, status=500)

    try:
        response = requests.get(
            'https://api.elevenlabs.io/v1/voices',
            headers={'xi-api-key': api_key},
            timeout=10,
        )

        if response.ok:
            return JsonResponse(response.json())
        else:
            return JsonResponse({
                'error': f'ElevenLabs API error: {response.status_code}',
                'detail': response.text
            }, status=response.status_code)

    except requests.exceptions.Timeout:
        return JsonResponse({'error': 'ElevenLabs API timeout'}, status=504)
    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': f'Request failed: {str(e)}'}, status=500)
    except Exception as e:
        return JsonResponse({'error': f'Unexpected error: {str(e)}'}, status=500)


@api_view(['POST'])
@permission_classes([AllowAny])
def set_voice(request):
    """
    Update voice preference for user's session.

    Request body:
        {
            "role": "assistant",  // or "user"
            "voice_id": "EXAVITQu4vr4xnSDxMaL"
        }

    Returns:
        {
            "success": true,
            "role": "assistant",
            "voice_id": "EXAVITQu4vr4xnSDxMaL"
        }
    """
    role = request.data.get('role')
    voice_id = request.data.get('voice_id')

    if not role or not voice_id:
        return JsonResponse({'error': 'role and voice_id are required'}, status=400)

    if role not in ['assistant', 'user']:
        return JsonResponse({'error': 'role must be "assistant" or "user"'}, status=400)

    # Store voice preference in session
    if 'tts_voices' not in request.session:
        request.session['tts_voices'] = {}

    request.session['tts_voices'][role] = voice_id
    request.session.modified = True

    return JsonResponse({
        'success': True,
        'role': role,
        'voice_id': voice_id
    })

