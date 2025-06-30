// Using native fetch API instead of axios

/**
 * Client-side Langflow API utility
 * Handles direct API calls to Langflow from the browser
 */
export class LangflowAPI {
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_LANGFLOW_API_URL || 'https://api.langflow.astra.datastax.com';
    this.apiKey = process.env.NEXT_PUBLIC_LANGFLOW_API_KEY;
    
    if (!this.apiKey) {
      console.warn('NEXT_PUBLIC_LANGFLOW_API_KEY not found in environment variables');
    }
  }

  /**
   * Send a message to Langflow API
   * @param {string} message - The user message
   * @param {string} sessionId - Session identifier
   * @returns {Promise<string>} - The AI response
   */
  async sendMessage(message, sessionId) {
    if (!this.apiKey) {
      throw new Error('API key not configured. Please set NEXT_PUBLIC_LANGFLOW_API_KEY in your environment.');
    }

    let retries = 3;
    let delay = 1000;

    for (let i = 0; i < retries; i++) {
      try {
        // Make direct API call
        const targetUrl = `${this.baseURL}?stream=false`;
        
        const response = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            input_value: message,
            output_type: 'chat',
            input_type: 'chat',
            session_id: sessionId || 'default-session'
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract the AI response from the Langflow API response structure
        let aiContent = 'No response received';
        
        if (data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text) {
          aiContent = data.outputs[0].outputs[0].results.message.data.text;
        } else if (data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text) {
          aiContent = data.outputs[0].outputs[0].results.message.text;
        } else if (data?.message) {
          aiContent = data.message;
        }

        return aiContent;
      } catch (error) {
        console.error(`Langflow API Error (Attempt ${i + 1}/${retries}):`, error);

        // Check if it's a CORS error
        if (error.message.includes('CORS') || error.message.includes('fetch')) {
          throw new Error('Unable to connect to AI service. This may be due to browser security restrictions. Please try refreshing the page or contact support.');
        }

        const isRetriable = error.message.includes('500') || error.message.includes('502') || error.message.includes('503');

        if (isRetriable && i < retries - 1) {
          await new Promise(res => setTimeout(res, delay));
          delay *= 2; // Exponential backoff
          continue;
        }
        
        // Provide more specific error messages
        if (error.message.includes('401')) {
          throw new Error('Authentication failed. There might be an issue with the application\'s API credentials. The administrator has been notified.');
        } else if (error.message.includes('404')) {
          throw new Error('API endpoint not found. Please check the Langflow URL.');
        } else if (error.message.includes('500') || error.message.includes('502') || error.message.includes('503')) {
          throw new Error('Server error. The Langflow service may be temporarily unavailable. Please try again in a few moments.');
        }
        
        throw new Error('Network error. Please check your internet connection and try again.');
      }
    }
  }
}

// Create a singleton instance
export const langflowAPI = new LangflowAPI();

// Default export for convenience
export default langflowAPI;