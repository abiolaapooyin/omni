const https = require('https');

function testAPI() {
  const data = JSON.stringify({
    data: ["What is machine learning?"]
  });

  const options = {
    hostname: 'agents-mcp-hackathon-researchcopilot.hf.space',
    port: 443,
    path: '/gradio_api/call/conduct_research_sync',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'User-Agent': 'Debug-Client/1.0'
    }
  };

  console.log('=== TESTING INITIAL API CALL ===');
  console.log('Sending data:', data);

  const req = https.request(options, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);

    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      console.log('Response Body:', responseData);
      
      if (res.statusCode === 200) {
        try {
          const jsonResponse = JSON.parse(responseData);
          console.log('Parsed JSON:', jsonResponse);
          
          if (jsonResponse.event_id) {
            console.log('Event ID received:', jsonResponse.event_id);
            // Test the second endpoint
            setTimeout(() => {
              testResultsEndpoint(jsonResponse.event_id);
            }, 3000); // Wait 3 seconds
          } else {
            console.log('ERROR: No event_id in response');
          }
        } catch (e) {
          console.log('ERROR: Failed to parse JSON:', e.message);
          console.log('Raw response:', responseData);
        }
      } else {
        console.log('ERROR: Non-200 status code');
      }
    });
  });

  req.on('error', (e) => {
    console.error('Request error:', e.message);
  });

  req.write(data);
  req.end();
}

function testResultsEndpoint(eventId) {
  console.log('\n=== TESTING RESULTS ENDPOINT ===');
  
  const options = {
    hostname: 'agents-mcp-hackathon-researchcopilot.hf.space',
    port: 443,
    path: `/gradio_api/call/conduct_research_sync/${eventId}`,
    method: 'GET',
    headers: {
      'User-Agent': 'Debug-Client/1.0'
    }
  };

  console.log('Testing results endpoint:', options.path);

  const req = https.request(options, (res) => {
    console.log('Results Status Code:', res.statusCode);
    console.log('Results Headers:', res.headers);

    let responseData = '';
    let chunkCount = 0;
    
    res.on('data', (chunk) => {
      chunkCount++;
      const chunkStr = chunk.toString();
      console.log(`Chunk ${chunkCount}:`, chunkStr.substring(0, 200) + (chunkStr.length > 200 ? '...' : ''));
      responseData += chunkStr;
      
      // Try to parse streaming data
      const lines = chunkStr.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const jsonData = JSON.parse(line.slice(6));
            console.log('FOUND VALID DATA:', jsonData);
            if (jsonData && jsonData.data) {
              console.log('SUCCESS: Research data received!');
              console.log('Summary:', jsonData.data[0] ? jsonData.data[0].substring(0, 100) + '...' : 'None');
              console.log('Sources count:', Array.isArray(jsonData.data[1]) ? jsonData.data[1].length : 'Not array');
              console.log('Citations count:', Array.isArray(jsonData.data[2]) ? jsonData.data[2].length : 'Not array');
              console.log('Process log count:', Array.isArray(jsonData.data[3]) ? jsonData.data[3].length : 'Not array');
              return;
            }
          } catch (e) {
            console.log('Failed to parse data line:', line.substring(0, 100));
          }
        }
      }
    });

    res.on('end', () => {
      console.log('\nStream ended. Total chunks received:', chunkCount);
      console.log('Total response length:', responseData.length);
      
      if (responseData.length === 0) {
        console.log('ERROR: No data received from results endpoint');
      } else if (!responseData.includes('data: ')) {
        console.log('ERROR: No streaming data found in response');
        console.log('First 500 chars:', responseData.substring(0, 500));
      } else {
        console.log('Stream contained data lines but no valid research results');
      }
    });
  });

  req.on('error', (e) => {
    console.error('Results request error:', e.message);
  });

  req.end();
}

// Run the test
testAPI();