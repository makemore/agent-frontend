/**
 * Models hook - manages available models and selection
 */

import { useState, useEffect, useCallback } from 'preact/hooks';

export function useModels(config, api, storage) {
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [defaultModel, setDefaultModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load available models on mount
  useEffect(() => {
    const loadModels = async () => {
      if (!config.showModelSelector) return;
      
      setIsLoading(true);
      try {
        const response = await fetch(
          `${config.backendUrl}${config.apiPaths.models}`,
          api.getFetchOptions({ method: 'GET' })
        );
        
        if (response.ok) {
          const data = await response.json();
          const models = data.models || [];
          setAvailableModels(models);
          setDefaultModel(data.default);
          
          // Restore saved model or use default
          const savedModel = storage?.get(config.modelKey);
          if (savedModel && models.some(m => m.id === savedModel)) {
            setSelectedModel(savedModel);
          } else {
            setSelectedModel(data.default);
          }
        }
      } catch (err) {
        console.warn('[ChatWidget] Failed to load models:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadModels();
  }, [config.backendUrl, config.apiPaths.models, config.showModelSelector, config.modelKey, api, storage]);

  // Select a model
  const selectModel = useCallback((modelId) => {
    setSelectedModel(modelId);
    storage?.set(config.modelKey, modelId);
  }, [config.modelKey, storage]);

  // Get the currently selected model object
  const getSelectedModelInfo = useCallback(() => {
    return availableModels.find(m => m.id === selectedModel) || null;
  }, [availableModels, selectedModel]);

  return {
    availableModels,
    selectedModel,
    defaultModel,
    isLoading,
    selectModel,
    getSelectedModelInfo,
  };
}

