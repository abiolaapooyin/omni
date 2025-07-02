#!/bin/bash

# Test the research API endpoint
response=$(curl -X POST 'https://agents-mcp-hackathon-researchcopilot.hf.space/gradio_api/call/conduct_research_sync' \
  -H 'Content-Type: application/json' \
  -d '{"data": ["Hello!!"]}' \
  -s)

echo "Response: $response"

# Extract event ID if present
event_id=$(echo "$response" | grep -o '"event_id":"[^"]*"' | cut -d'"' -f4)

if [ ! -z "$event_id" ]; then
  echo "Event ID: $event_id"
  
  # Make the second call
  echo "Making second call..."
  curl -N "https://agents-mcp-hackathon-researchcopilot.hf.space/gradio_api/call/conduct_research_sync/$event_id"
else
  echo "No event ID found in response"
fi