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
   * Send a message to Langflow API via Next.js API route
   * @param {string} message - The user message
   * @param {string} sessionId - Session identifier
   * @returns {Promise<string>} - The AI response
   */
  async sendMessage(message, sessionId) {
    let retries = 3;
    let delay = 1000;

    for (let i = 0; i < retries; i++) {
      try {
        // Use Next.js API route to avoid CORS issues
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message,
            sessionId: sessionId || 'default-session'
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.response || 'No response received';
      } catch (error) {
        console.error(`API Error (Attempt ${i + 1}/${retries}):`, error);

        const isRetriable = error.message.includes('500') || error.message.includes('502') || error.message.includes('503');

        if (isRetriable && i < retries - 1) {
          await new Promise(res => setTimeout(res, delay));
          delay *= 2; // Exponential backoff
          continue;
        }
        
        // Provide user-friendly error messages
        if (error.message.includes('Failed to fetch')) {
          throw new Error('Unable to connect to the chat service. Please check your internet connection and try again.');
        }
        
        throw error;
      }
    }
  }
}

// Create a singleton instance
export const langflowAPI = new LangflowAPI();

// Default export for convenience
export default langflowAPI;