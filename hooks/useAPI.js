import { useState, useCallback } from 'react';
import axios from 'axios';

/**
 * Custom hook for API calls with error handling and retry logic
 * @param {Object} config - Configuration object
 * @param {number} config.maxRetries - Maximum number of retry attempts
 * @param {number} config.retryDelay - Base delay between retries in ms
 */
export const useAPI = ({ maxRetries = 3, retryDelay = 1000 } = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const callAPI = useCallback(async (config, retryCount = 0) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(config);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error(`API call failed (attempt ${retryCount + 1}):`, err);
      
      // Check if we should retry
      if (retryCount < maxRetries && err.response?.status >= 500) {
        const delay = retryDelay * Math.pow(2, retryCount); // Exponential backoff
        await sleep(delay);
        return callAPI(config, retryCount + 1);
      }
      
      // Set user-friendly error message
      const errorMessage = getErrorMessage(err);
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  }, [maxRetries, retryDelay]);

  return { callAPI, loading, error };
};

/**
 * Get user-friendly error message from error object
 * @param {Error} error - The error object
 * @returns {string} User-friendly error message
 */
const getErrorMessage = (error) => {
  if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
    return 'Network connection error. Please check your internet connection.';
  }
  
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Authentication failed. Please check your API key.';
      case 403:
        return 'Access denied. You may not have permission for this action.';
      case 404:
        return 'Service not found. The API endpoint may be unavailable.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
      case 502:
      case 503:
      case 504:
        return 'Server error. Please try again in a few moments.';
      default:
        return `Request failed with status ${status}. Please try again.`;
    }
  }
  
  if (error.request) {
    return 'No response from server. Please check your connection and try again.';
  }
  
  return 'An unexpected error occurred. Please try again.';
};

/**
 * Hook specifically for Langflow API calls
 */
export const useLangflowAPI = () => {
  const { callAPI, loading, error } = useAPI();
  
  const sendMessage = useCallback(async (message) => {
    const apiUrl = process.env.NEXT_PUBLIC_LANGFLOW_API_URL;
    const apiKey = process.env.LANGFLOW_API_KEY;
    
    if (!apiUrl || !apiKey) {
      throw new Error('API configuration is missing. Please check your environment variables.');
    }
    
    const config = {
      method: 'POST',
      url: `${apiUrl}?stream=false`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        input_value: message,
        output_type: 'chat',
        input_type: 'chat'
      },
      timeout: 30000 // 30 second timeout
    };
    
    const response = await callAPI(config);
    
    // Extract message from response with fallback
    const messageText = response?.outputs?.[0]?.outputs?.[0]?.results?.message?.text;
    
    if (!messageText) {
      throw new Error('Invalid response format from API');
    }
    
    return messageText;
  }, [callAPI]);
  
  return { sendMessage, loading, error };
};

export default useAPI;