// Next.js API route to proxy research requests and bypass CORS
import { filterResearchResults } from '../../utils/contentFilter'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { query } = req.body

  if (!query) {
    return res.status(400).json({ error: 'Query is required' })
  }

  try {
    console.log('Proxying research request for:', query)

    // First API call to initiate research
    const response = await fetch('https://agents-mcp-hackathon-researchcopilot.hf.space/gradio_api/call/conduct_research_sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Research-Proxy/1.0'
      },
      body: JSON.stringify({
        data: [query]
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error:', response.status, errorText)
      return res.status(response.status).json({ 
        error: `API Error: ${errorText}` 
      })
    }

    const data = await response.json()
    console.log('Initial response:', data)

    const eventId = data.event_id

    if (!eventId) {
      console.error('No event ID received:', data)
      return res.status(500).json({ 
        error: 'No event ID received from research API' 
      })
    }

    // Wait a moment before polling
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Second API call to get results
    const resultsUrl = `https://agents-mcp-hackathon-researchcopilot.hf.space/gradio_api/call/conduct_research_sync/${eventId}`
    console.log('Fetching results from:', resultsUrl)

    const resultsResponse = await fetch(resultsUrl, {
      headers: {
        'User-Agent': 'Research-Proxy/1.0'
      }
    })

    if (!resultsResponse.ok) {
      const errorText = await resultsResponse.text()
      console.error('Results API Error:', resultsResponse.status, errorText)
      return res.status(resultsResponse.status).json({ 
        error: `Results API Error: ${errorText}` 
      })
    }

    // Process the streaming response
    const reader = resultsResponse.body.getReader()
    const decoder = new TextDecoder()
    let result = ''
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      result += chunk
      buffer += chunk

      // Process complete lines from buffer
      const lines = buffer.split('\n')
      // Keep the last incomplete line in buffer
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const dataContent = line.slice(6)
          
          // Skip null data
          if (dataContent.trim() === 'null') {
            continue
          }
          
          try {
            const jsonData = JSON.parse(dataContent)
            
            if (jsonData && Array.isArray(jsonData) && jsonData.length >= 4) {
              console.log('Research completed successfully')
              console.log('Raw sources data:', jsonData[1])
              console.log('Raw citations data:', jsonData[2])
              
              // Helper function to ensure array format
              const ensureArray = (data) => {
                // Helper to check if a string is a valid source (not a header or metadata)
                const isValidSource = (str) => {
                  if (!str || typeof str !== 'string') return false
                  const trimmed = str.trim()
                  // Filter out headers, empty lines, and metadata
                  if (trimmed.startsWith('#') || 
                      trimmed.startsWith('Sources Found') ||
                      trimmed.length < 10 ||
                      trimmed === '# Sources Found' ||
                      /^\d+\.$/.test(trimmed)) {
                    return false
                  }
                  return true
                }
                
                if (Array.isArray(data)) {
                  // If it's already an array, check if items need parsing
                  return data.filter(item => {
                    if (typeof item === 'string') {
                      return isValidSource(item)
                    }
                    return item && typeof item === 'object'
                  }).map((item, index) => {
                    if (typeof item === 'string') {
                      // Parse string items into source objects
                      const urlMatch = item.match(/(https?:\/\/[^\s]+)/)
                      const url = urlMatch ? urlMatch[1] : null
                      const title = item.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                      return {
                        title: title || `Source ${index + 1}`,
                        url: url,
                        type: 'web',
                        description: item
                      }
                    }
                    return item
                  })
                }
                if (typeof data === 'string') {
                  try {
                    const parsed = JSON.parse(data)
                    return Array.isArray(parsed) ? ensureArray(parsed) : [data]
                  } catch {
                    // Try to parse as structured source data
                    const lines = data.split('\n').filter(line => line.trim() && isValidSource(line))
                    return lines.map((line, index) => {
                      const urlMatch = line.match(/(https?:\/\/[^\s]+)/)
                      const url = urlMatch ? urlMatch[1] : null
                      const title = line.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                      return {
                        title: title || `Source ${index + 1}`,
                        url: url,
                        type: 'web',
                        description: line
                      }
                    })
                  }
                }
                return data ? [data] : []
              }
              
              const researchData = {
                summary: jsonData[0] || 'Research completed successfully.',
                sources: ensureArray(jsonData[1]),
                citations: ensureArray(jsonData[2]),
                processLog: ensureArray(jsonData[3])
              }
              
              // Filter content to replace 'perplexity' with 'omni'
              const filteredData = filterResearchResults(researchData)
              
              return res.status(200).json({
                success: true,
                data: filteredData
              })
            }
          } catch (e) {
            // For multi-line JSON, try to accumulate until we have complete JSON
            console.log('Failed to parse data line (might be incomplete):', dataContent.substring(0, 100))
          }
        }
      }
    }

    // Process any remaining data in buffer
    if (buffer.startsWith('data: ')) {
      const dataContent = buffer.slice(6)
      try {
        const jsonData = JSON.parse(dataContent)
        if (jsonData && Array.isArray(jsonData) && jsonData.length >= 4) {
          console.log('Research completed successfully (from buffer)')
          
          // Helper function to ensure array format
          const ensureArray = (data) => {
            // Helper to check if a string is a valid source (not a header or metadata)
            const isValidSource = (str) => {
              if (!str || typeof str !== 'string') return false
              const trimmed = str.trim()
              // Filter out headers, empty lines, and metadata
              if (trimmed.startsWith('#') || 
                  trimmed.startsWith('Sources Found') ||
                  trimmed.length < 10 ||
                  trimmed === '# Sources Found' ||
                  /^\d+\.$/.test(trimmed)) {
                return false
              }
              return true
            }
            
            if (Array.isArray(data)) {
              // If it's already an array, check if items need parsing
              return data.filter(item => {
                if (typeof item === 'string') {
                  return isValidSource(item)
                }
                return item && typeof item === 'object'
              }).map((item, index) => {
                if (typeof item === 'string') {
                  // Parse string items into source objects
                  const urlMatch = item.match(/(https?:\/\/[^\s]+)/)
                  const url = urlMatch ? urlMatch[1] : null
                  const title = item.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                  return {
                    title: title || `Source ${index + 1}`,
                    url: url,
                    type: 'web',
                    description: item
                  }
                }
                return item
              })
            }
            if (typeof data === 'string') {
              try {
                const parsed = JSON.parse(data)
                return Array.isArray(parsed) ? ensureArray(parsed) : [data]
              } catch {
                // Try to parse as structured source data
                const lines = data.split('\n').filter(line => line.trim() && isValidSource(line))
                return lines.map((line, index) => {
                  const urlMatch = line.match(/(https?:\/\/[^\s]+)/)
                  const url = urlMatch ? urlMatch[1] : null
                  const title = line.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                  return {
                    title: title || `Source ${index + 1}`,
                    url: url,
                    type: 'web',
                    description: line
                  }
                })
              }
            }
            return data ? [data] : []
          }
          
          const researchData = {
            summary: jsonData[0] || 'Research completed successfully.',
            sources: ensureArray(jsonData[1]),
            citations: ensureArray(jsonData[2]),
            processLog: ensureArray(jsonData[3])
          }
          
          // Filter content to replace 'perplexity' with 'omni'
          const filteredData = filterResearchResults(researchData)
          
          return res.status(200).json({
            success: true,
            data: filteredData
          })
        }
      } catch (e) {
        console.log('Failed to parse final buffer data')
      }
    }

    // Try to extract data from the complete result as fallback
    const dataMatch = result.match(/data: (\[.*\])/s)
    if (dataMatch) {
      try {
        const jsonData = JSON.parse(dataMatch[1])
        if (jsonData && Array.isArray(jsonData) && jsonData.length >= 4) {
          console.log('Research completed successfully (from regex match)')
          
          // Helper function to ensure array format
          const ensureArray = (data) => {
            // Helper to check if a string is a valid source (not a header or metadata)
            const isValidSource = (str) => {
              if (!str || typeof str !== 'string') return false
              const trimmed = str.trim()
              // Filter out headers, empty lines, and metadata
              if (trimmed.startsWith('#') || 
                  trimmed.startsWith('Sources Found') ||
                  trimmed.length < 10 ||
                  trimmed === '# Sources Found' ||
                  /^\d+\.$/.test(trimmed)) {
                return false
              }
              return true
            }
            
            if (Array.isArray(data)) {
              return data.filter(item => {
                if (typeof item === 'string') {
                  return isValidSource(item)
                }
                return item && typeof item === 'object'
              }).map((item, index) => {
                if (typeof item === 'string') {
                  // Parse string items into source objects
                  const urlMatch = item.match(/(https?:\/\/[^\s]+)/)
                  const url = urlMatch ? urlMatch[1] : null
                  const title = item.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                  return {
                    title: title || `Source ${index + 1}`,
                    url: url,
                    type: 'web',
                    description: item
                  }
                }
                return item
              })
            }
            if (typeof data === 'string') {
              try {
                const parsed = JSON.parse(data)
                return Array.isArray(parsed) ? ensureArray(parsed) : [data]
              } catch {
                // Try to parse as structured source data
                const lines = data.split('\n').filter(line => line.trim() && isValidSource(line))
                return lines.map((line, index) => {
                  const urlMatch = line.match(/(https?:\/\/[^\s]+)/)
                  const url = urlMatch ? urlMatch[1] : null
                  const title = line.replace(/(https?:\/\/[^\s]+)/, '').trim() || `Source ${index + 1}`
                  return {
                    title: title || `Source ${index + 1}`,
                    url: url,
                    type: 'web',
                    description: line
                  }
                })
              }
            }
            return data ? [data] : []
          }
          
          const researchData = {
            summary: jsonData[0] || 'Research completed successfully.',
            sources: ensureArray(jsonData[1]),
            citations: ensureArray(jsonData[2]),
            processLog: ensureArray(jsonData[3])
          }
          
          // Filter content to replace 'perplexity' with 'omni'
          const filteredData = filterResearchResults(researchData)
          
          return res.status(200).json({
            success: true,
            data: filteredData
          })
        }
      } catch (e) {
        console.log('Failed to parse regex matched data')
      }
    }

    // If we get here, no valid data was found
    console.error('No valid research data found in response')
    return res.status(500).json({ 
      error: 'No research data received from API',
      debug: result.substring(0, 500) // First 500 chars for debugging
    })

  } catch (error) {
    console.error('Proxy error:', error)
    return res.status(500).json({ 
      error: 'Internal server error: ' + error.message 
    })
  }
}