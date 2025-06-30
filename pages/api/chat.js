/**
 * Next.js API route to proxy Langflow requests
 * This avoids CORS issues by making the API call server-side
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, sessionId } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiUrl = process.env.NEXT_PUBLIC_LANGFLOW_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_LANGFLOW_API_KEY;

  if (!apiUrl || !apiKey) {
    console.error('Missing environment variables:', { apiUrl: !!apiUrl, apiKey: !!apiKey });
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const targetUrl = `${apiUrl}?stream=false`;
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        input_value: message,
        output_type: 'chat',
        input_type: 'chat',
        session_id: sessionId || 'default-session'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Langflow API Error: ${response.status} ${response.statusText}`, errorText);
      return res.status(response.status).json({ 
        error: `API request failed: ${response.status} ${response.statusText}` 
      });
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
    } else {
      console.log('Unexpected API response structure:', JSON.stringify(data, null, 2));
    }

    return res.status(200).json({ response: aiContent });
  } catch (error) {
    console.error('API route error:', error);
    return res.status(500).json({ 
      error: 'Failed to connect to AI service. Please try again.' 
    });
  }
}