/**
 * Content filtering utility to replace brand mentions
 * Replaces any mention of 'perplexity' with 'omni' (case-insensitive)
 */

/**
 * Replace 'perplexity' with 'omni' in text content
 * @param {string} text - The text to filter
 * @returns {string} - The filtered text
 */
export function replacePerplexityWithOmni(text) {
  if (typeof text !== 'string') {
    return text;
  }
  
  // Replace all variations of 'perplexity' with 'omni'
  return text
    .replace(/perplexity/gi, 'omni')
    .replace(/Perplexity/g, 'Omni');
}

/**
 * Filter content in objects recursively
 * @param {any} obj - The object to filter
 * @returns {any} - The filtered object
 */
export function filterContentRecursively(obj) {
  if (typeof obj === 'string') {
    return replacePerplexityWithOmni(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => filterContentRecursively(item));
  }
  
  if (obj && typeof obj === 'object') {
    const filtered = {};
    for (const [key, value] of Object.entries(obj)) {
      filtered[key] = filterContentRecursively(value);
    }
    return filtered;
  }
  
  return obj;
}

/**
 * Filter research results data
 * @param {object} researchData - The research results object
 * @returns {object} - The filtered research results
 */
export function filterResearchResults(researchData) {
  if (!researchData) return researchData;
  
  return filterContentRecursively(researchData);
}