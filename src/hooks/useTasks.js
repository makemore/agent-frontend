/**
 * useTasks hook - manages task list state and API interactions
 */

import { useState, useCallback, useEffect } from 'preact/hooks';

export function useTasks(config, api) {
  const [taskList, setTaskList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Build tasks API path
  const tasksPath = config.apiPaths?.tasks || '/api/agent/tasks/';

  // Load the user's task list
  const loadTaskList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const url = `${config.backendUrl}${tasksPath}`;
      const response = await fetch(url, api.getFetchOptions({ method: 'GET' }));
      
      if (response.ok) {
        const data = await response.json();
        setTaskList(data);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || 'Failed to load tasks');
      }
    } catch (err) {
      console.error('[useTasks] Failed to load task list:', err);
      setError('Failed to load tasks');
    } finally {
      setIsLoading(false);
    }
  }, [config.backendUrl, tasksPath, api]);

  // Add a task
  const addTask = useCallback(async (taskData) => {
    if (!taskList) return null;
    
    try {
      const url = `${config.backendUrl}${tasksPath}${taskList.id}/add_task/`;
      const response = await fetch(url, api.getFetchOptions({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      }));
      
      if (response.ok) {
        const newTask = await response.json();
        // Refresh the task list to get updated state
        await loadTaskList();
        return newTask;
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || 'Failed to add task');
        return null;
      }
    } catch (err) {
      console.error('[useTasks] Failed to add task:', err);
      setError('Failed to add task');
      return null;
    }
  }, [config.backendUrl, tasksPath, taskList, api, loadTaskList]);

  // Update a task
  const updateTask = useCallback(async (taskId, updates) => {
    if (!taskList) return null;
    
    try {
      const url = `${config.backendUrl}${tasksPath}${taskList.id}/update_task/${taskId}/`;
      const response = await fetch(url, api.getFetchOptions({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      }));
      
      if (response.ok) {
        const updatedTask = await response.json();
        // Refresh the task list
        await loadTaskList();
        return updatedTask;
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || 'Failed to update task');
        return null;
      }
    } catch (err) {
      console.error('[useTasks] Failed to update task:', err);
      setError('Failed to update task');
      return null;
    }
  }, [config.backendUrl, tasksPath, taskList, api, loadTaskList]);

  // Remove a task
  const removeTask = useCallback(async (taskId) => {
    if (!taskList) return false;
    
    try {
      const url = `${config.backendUrl}${tasksPath}${taskList.id}/remove_task/${taskId}/`;
      const response = await fetch(url, api.getFetchOptions({
        method: 'DELETE',
      }));
      
      if (response.ok) {
        await loadTaskList();
        return true;
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || 'Failed to remove task');
        return false;
      }
    } catch (err) {
      console.error('[useTasks] Failed to remove task:', err);
      setError('Failed to remove task');
      return false;
    }
  }, [config.backendUrl, tasksPath, taskList, api, loadTaskList]);

  // Clear all tasks
  const clearTasks = useCallback(async () => {
    if (!taskList) return false;
    
    try {
      const url = `${config.backendUrl}${tasksPath}${taskList.id}/clear/`;
      const response = await fetch(url, api.getFetchOptions({
        method: 'POST',
      }));
      
      if (response.ok) {
        await loadTaskList();
        return true;
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || 'Failed to clear tasks');
        return false;
      }
    } catch (err) {
      console.error('[useTasks] Failed to clear tasks:', err);
      setError('Failed to clear tasks');
      return false;
    }
  }, [config.backendUrl, tasksPath, taskList, api, loadTaskList]);

  // Clear error
  const clearError = useCallback(() => setError(null), []);

  return {
    taskList,
    tasks: taskList?.tasks || [],
    progress: taskList?.progress || { total: 0, completed: 0, percent_complete: 0 },
    isLoading,
    error,
    loadTaskList,
    addTask,
    updateTask,
    removeTask,
    clearTasks,
    clearError,
  };
}

