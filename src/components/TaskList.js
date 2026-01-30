/**
 * TaskList component - displays and manages the user's task list
 */

import { html } from 'htm/preact';
import { useState, useCallback } from 'preact/hooks';

// State icons for tasks
const STATE_ICONS = {
  not_started: '○',
  in_progress: '◐',
  complete: '●',
  cancelled: '⊘',
};

const STATE_LABELS = {
  not_started: 'Not Started',
  in_progress: 'In Progress',
  complete: 'Complete',
  cancelled: 'Cancelled',
};

function TaskItem({ task, onUpdate, onRemove, depth = 0 }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);

  const handleStateToggle = useCallback(() => {
    // Cycle through states: not_started -> in_progress -> complete
    const nextState = {
      not_started: 'in_progress',
      in_progress: 'complete',
      complete: 'not_started',
      cancelled: 'not_started',
    };
    onUpdate(task.id, { state: nextState[task.state] || 'not_started' });
  }, [task, onUpdate]);

  const handleSaveEdit = useCallback(() => {
    if (editName.trim() && editName !== task.name) {
      onUpdate(task.id, { name: editName.trim() });
    }
    setIsEditing(false);
  }, [task, editName, onUpdate]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') handleSaveEdit();
    if (e.key === 'Escape') {
      setEditName(task.name);
      setIsEditing(false);
    }
  }, [handleSaveEdit, task.name]);

  const stateClass = `cw-task-state-${task.state.replace('_', '-')}`;

  return html`
    <div class="cw-task-item ${stateClass}" style=${{ paddingLeft: `${depth * 16 + 8}px` }}>
      <button 
        class="cw-task-state-btn" 
        onClick=${handleStateToggle}
        title=${STATE_LABELS[task.state]}
      >
        ${STATE_ICONS[task.state]}
      </button>
      
      ${isEditing ? html`
        <input
          type="text"
          class="cw-task-edit-input"
          value=${editName}
          onInput=${(e) => setEditName(e.target.value)}
          onBlur=${handleSaveEdit}
          onKeyDown=${handleKeyDown}
          autoFocus
        />
      ` : html`
        <span 
          class="cw-task-name" 
          onClick=${() => setIsEditing(true)}
          title="Click to edit"
        >
          ${task.name}
        </span>
      `}
      
      <button 
        class="cw-task-remove-btn" 
        onClick=${() => onRemove(task.id)}
        title="Remove task"
      >
        ×
      </button>
    </div>
  `;
}

export function TaskList({ 
  tasks, 
  progress, 
  isLoading, 
  error, 
  onUpdate, 
  onRemove, 
  onClear,
  onRefresh 
}) {
  // Build tree structure from flat tasks
  const buildTree = useCallback((tasks) => {
    const taskMap = new Map();
    const roots = [];
    
    // First pass: create map
    tasks.forEach(task => {
      taskMap.set(task.id, { ...task, children: [] });
    });
    
    // Second pass: build tree
    tasks.forEach(task => {
      const node = taskMap.get(task.id);
      if (task.parent_id && taskMap.has(task.parent_id)) {
        taskMap.get(task.parent_id).children.push(node);
      } else {
        roots.push(node);
      }
    });
    
    return roots;
  }, []);

  const renderTask = useCallback((task, depth = 0) => {
    return html`
      <${TaskItem}
        key=${task.id}
        task=${task}
        depth=${depth}
        onUpdate=${onUpdate}
        onRemove=${onRemove}
      />
      ${task.children?.map(child => renderTask(child, depth + 1))}
    `;
  }, [onUpdate, onRemove]);

  const taskTree = buildTree(tasks);

  if (isLoading && tasks.length === 0) {
    return html`<div class="cw-tasks-loading">Loading tasks...</div>`;
  }

  return html`
    <div class="cw-tasks-container">
      <div class="cw-tasks-header">
        <div class="cw-tasks-progress">
          <span class="cw-tasks-progress-text">
            ${progress.completed}/${progress.total} complete
          </span>
          <div class="cw-tasks-progress-bar">
            <div 
              class="cw-tasks-progress-fill" 
              style=${{ width: `${progress.percent_complete}%` }}
            />
          </div>
        </div>
        <div class="cw-tasks-actions">
          <button class="cw-tasks-action-btn" onClick=${onRefresh} title="Refresh">↻</button>
          ${tasks.length > 0 && html`
            <button class="cw-tasks-action-btn" onClick=${onClear} title="Clear all">🗑</button>
          `}
        </div>
      </div>
      
      ${error && html`<div class="cw-tasks-error">${error}</div>`}
      
      <div class="cw-tasks-list">
        ${taskTree.length === 0 ? html`
          <div class="cw-tasks-empty">
            <p>No tasks yet</p>
            <p class="cw-tasks-empty-hint">Tasks will appear here when the agent creates them</p>
          </div>
        ` : taskTree.map(task => renderTask(task))}
      </div>
    </div>
  `;
}

