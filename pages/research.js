import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import CircularText from '../components/CircularText'
import SilkBackground from '../components/SilkBackground'
import AnnouncementBar from '../components/AnnouncementBar'
import AnimatedSphere from '../components/AnimatedSphere'
import GradientText from '../components/GradientText'
import DecryptedText from '../components/DecryptedText'
import Preloader from '../components/Preloader'
import ThinkingIndicator from '../components/ThinkingIndicator'
import { filterResearchResults } from '../utils/contentFilter'

const researchAreas = [
  "Neural Architecture Search",
  "Multimodal AI Systems", 
  "Quantum Machine Learning",
  "Federated Learning Networks",
  "Autonomous Agent Coordination"
]

export default function Research() {
  const [currentArea, setCurrentArea] = useState(0)
  const [showPreloader, setShowPreloader] = useState(true)
  const [activeTab, setActiveTab] = useState('summary')
  const [researchQuery, setResearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [researchResults, setResearchResults] = useState(null)
  const [error, setError] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArea((prev) => (prev + 1) % researchAreas.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const conductResearch = async () => {
    if (!researchQuery.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      console.log('Starting research for query:', researchQuery)
      
      // Use our proxy API route to avoid CORS issues
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: researchQuery
        })
      })
      
      console.log('Proxy response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Proxy API Error:', errorData)
        throw new Error(errorData.error || `HTTP Error: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Research response:', data)
      
      if (data.success && data.data) {
        // Filter content to replace 'perplexity' with 'omni'
        const filteredData = filterResearchResults(data.data);
        
        setResearchResults({
          summary: filteredData.summary || 'Research completed successfully.',
          sources: filteredData.sources || [],
          citations: filteredData.citations || [],
          processLog: filteredData.processLog || []
        })
        setActiveTab('summary')
      } else {
        throw new Error('Invalid response format from research API')
      }
      
    } catch (err) {
      console.error('Research API Error:', err)
      setError(err.message || 'Failed to conduct research. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {showPreloader && <Preloader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden px-4">
        {/* Animated Background */}
        <SilkBackground color="#4F46E5" />
        
        {/* Header */}
        <header className="relative z-10 flex justify-between items-center px-6 pt-6 md:px-8 md:pt-8">
          <div className="flex items-center">
            <img 
              src="/alogo.png" 
              alt="Omni Logo" 
              className="h-16 w-auto md:h-20"
              style={{ maxWidth: '120px', height: 'auto' }}
            />
          </div>
          <div className="hidden md:block">
            <CircularText 
              text="RESEARCH . INNOVATION . DISCOVERY"
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
        </header>

        {/* Announcement Bar */}
        <div className="relative z-10 flex justify-center -mt-2 md:-mt-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white/90">
              Advancing the frontiers of AI research.
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full"
            />
          </motion.div>
        </div>

        {/* Sphere Component */}
        <div className="relative z-10 flex justify-center py-2 md:py-3">
          <AnimatedSphere />
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-center px-4 pt-4 md:px-8">
          <div className="w-full max-w-6xl mx-auto space-y-6 md:space-y-8">
            {/* Hero Text */}
            <div className="text-center space-y-4 md:space-y-6 mb-12">
              <style jsx>{`
                @keyframes omni-gradient {
                  0% {
                    background-position: 0% 50%;
                  }
                  25% {
                    background-position: 100% 50%;
                  }
                  50% {
                    background-position: 0% 50%;
                  }
                  75% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
                
                .animated-gradient-article { 
                   display: grid; 
                   gap: 0.3lh; 
                   text-align: center; 
                 } 
                 
                 .hero-title {
                   font-family: var(--font-inter), sans-serif;
                   font-weight: 700;
                   font-size: clamp(2.5rem, 8vw, 5rem); 
                   line-height: 1.1; 
                   margin: 0; 
                   text-wrap: balance;
                   color: white;
                 }
                 
                 .omni-gradient {
                   background: linear-gradient(
                     45deg,
                     #3b82f6,
                     #eab308,
                     #a855f7,
                     #f97316,
                     #3b82f6
                   );
                   background-size: 300% 300%;
                   animation: omni-gradient 3s ease-in-out infinite;
                   -webkit-background-clip: text;
                   -webkit-text-fill-color: transparent;
                   background-clip: text;
                   color: transparent;
                 }
                 
                 .animated-gradient-p { 
                   font-family: var(--font-inter), sans-serif;
                   font-weight: 300;
                   margin: 0; 
                   text-wrap: balance; 
                   color: #9CA3AF; 
                 }
              `}</style>
              <article className="animated-gradient-article"> 
                 <h1 className="hero-title font-bold">
                   <span className="omni-gradient">Omni</span> Research
                 </h1> 
                  <p className="animated-gradient-p">Pioneering the future of artificial intelligence</p> 
               </article>
             </div>

            {/* Research Query Interface */}
            <div className="w-full max-w-4xl mx-auto mb-12 space-y-8">
              {/* Research Query Input */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative rounded-lg p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x" style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite'
                }}>
                  <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg relative">
                    <div className="p-2 md:p-3 relative">
                      <textarea
                        className="w-full bg-transparent text-white placeholder-gray-400 border-0 resize-none focus:outline-none text-xs md:text-sm leading-relaxed min-h-[60px] pr-8"
                        rows={2}
                        placeholder="What do you need the brain squad to solve?"
                        value={researchQuery}
                        onChange={(e) => setResearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            conductResearch()
                          }
                        }}
                        disabled={isLoading}
                        style={{
                          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
                        }}
                      />
                    </div>
                    <div className="px-2 md:px-3 pb-2 md:pb-3 flex justify-end">
                      <button 
                        onClick={conductResearch}
                        disabled={isLoading || !researchQuery.trim()}
                        className="bg-purple-600/80 hover:bg-purple-600 disabled:bg-gray-600/50 disabled:cursor-not-allowed text-white p-1.5 rounded-md transition-colors duration-200 backdrop-blur-sm"
                      >
                        {isLoading ? (
                          <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start mt-2">
                  <a 
                    href="/" 
                    className="text-white/60 hover:text-white/80 transition-colors duration-200 text-xs font-light"
                  >
                    ← Back to Omni AI
                  </a>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-300 font-medium">Error</span>
                  </div>
                  <p className="text-red-200 mt-2">{error}</p>
                </div>
              )}

              {/* Loading Indicator */}
              {isLoading && <ThinkingIndicator />}

              {/* Example Research Queries */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/70">
                  <span className="text-sm">💡</span>
                  <span className="text-sm font-medium">Example Research Queries</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                   {[
                        "How can AI revolutionize personalized medicine?",
                        "What are the latest breakthroughs in quantum computing?",
                        "How to solve climate change with innovative technology?",
                        "What's the future of sustainable energy systems?",
                        "How can blockchain transform supply chain transparency?"
                      ].map((query, index) => (
                       <button
                         key={index}
                         onClick={() => setResearchQuery(query)}
                         className="bg-gray-800/50 hover:bg-gray-700/50 text-white/80 text-xs md:text-sm px-3 py-3 rounded-lg border border-gray-700/50 transition-all duration-200 hover:border-indigo-500/50 hover:scale-105 text-left leading-relaxed"
                       >
                         {query}
                       </button>
                     ))}
                 </div>
              </div>

              {/* Research Results Tabs */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                {/* Tab Navigation */}
                <div className="flex flex-wrap border-b border-gray-700/50">
                  {[
                    { id: 'summary', label: '📄 Summary' },
                    { id: 'sources', label: '🌐 Sources' },
                    { id: 'citations', label: '📚 Citations' },
                    { id: 'process', label: '⚙️ Process Log' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 min-w-0 px-3 md:px-4 py-3 text-xs md:text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'text-indigo-400 border-b-2 border-indigo-400 bg-indigo-500/10'
                          : 'text-white/60 hover:text-white/80 hover:bg-gray-700/30'
                      }`}
                    >
                      <span className="truncate">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                 <div className="p-4 md:p-6">
                   {activeTab === 'summary' && (
                     <div className="space-y-4">
                       <div className="flex items-center justify-between">
                         <h3 className="text-xl font-semibold text-white">
                           Research Summary
                         </h3>
                         {researchResults && researchResults.summary && (
                           <button
                             onClick={async () => {
                               try {
                                 await navigator.clipboard.writeText(researchResults.summary)
                                 setCopySuccess(true)
                                 setTimeout(() => setCopySuccess(false), 2000)
                               } catch (err) {
                                 console.error('Failed to copy text: ', err)
                               }
                             }}
                             className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 rounded-lg transition-all duration-200 text-sm"
                           >
                             {copySuccess ? (
                               <>
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                 </svg>
                                 <span>Copied!</span>
                               </>
                             ) : (
                               <>
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                 </svg>
                                 <span>Copy</span>
                               </>
                             )}
                           </button>
                         )}
                       </div>
                       {researchResults ? (
                         <div className="space-y-4">
                           <div className="prose prose-invert max-w-none">
                             <div className="text-white/80 leading-relaxed">
                               <ReactMarkdown 
                                 components={{
                                   h1: ({children}) => <h1 className="text-2xl font-bold text-white mb-4">{children}</h1>,
                                   h2: ({children}) => <h2 className="text-xl font-semibold text-white mb-3">{children}</h2>,
                                   h3: ({children}) => <h3 className="text-lg font-medium text-white mb-2">{children}</h3>,
                                   h4: ({children}) => <h4 className="text-base font-medium text-white mb-2">{children}</h4>,
                                   p: ({children}) => <p className="text-white/80 mb-3 leading-relaxed">{children}</p>,
                                   strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                                   em: ({children}) => <em className="text-white/90 italic">{children}</em>,
                                   ul: ({children}) => <ul className="list-disc list-inside mb-3 space-y-1 text-white/80">{children}</ul>,
                                   ol: ({children}) => <ol className="list-decimal list-inside mb-3 space-y-1 text-white/80">{children}</ol>,
                                   li: ({children}) => <li className="text-white/80">{children}</li>,
                                   blockquote: ({children}) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-white/70 mb-3">{children}</blockquote>,
                                   code: ({children}) => <code className="bg-gray-800 text-indigo-300 px-1 py-0.5 rounded text-sm">{children}</code>,
                                   pre: ({children}) => <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-3">{children}</pre>
                                 }}
                               >
                                 {researchResults.summary}
                               </ReactMarkdown>
                             </div>
                           </div>
                         </div>
                       ) : (
                         <div className="space-y-3">
                           <h4 className="text-lg font-medium text-white/90">
                             Ready to Research
                           </h4>
                           <p className="text-white/70 leading-relaxed">
                             Enter your research query above and click the submit button to get comprehensive insights, sources, and analysis powered by AI.
                           </p>
                         </div>
                       )}
                     </div>
                   )}
                   
                   {activeTab === 'sources' && (
                     <div className="space-y-4">
                       <h3 className="text-xl font-semibold text-white">
                         Research Sources
                       </h3>

                       {researchResults && researchResults.sources && Array.isArray(researchResults.sources) && researchResults.sources.length > 0 ? (
                         <div className="space-y-3">
                           {researchResults.sources.map((source, index) => (
                             <div key={index} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                               <div className="flex justify-between items-start mb-2">
                                 <div className="text-white font-medium">
                                   <ReactMarkdown 
                                     components={{
                                       p: ({children}) => <span className="text-white font-medium">{children}</span>,
                                       strong: ({children}) => <strong className="text-white font-bold">{children}</strong>,
                                       em: ({children}) => <em className="text-white/90 italic">{children}</em>
                                     }}
                                   >
                                     {source.title || `Source ${index + 1}`}
                                   </ReactMarkdown>
                                 </div>
                                 <span className="text-xs bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded">
                                     <ReactMarkdown 
                                       components={{
                                         p: ({children}) => <span className="text-indigo-300">{children}</span>,
                                         strong: ({children}) => <strong className="text-indigo-200 font-bold">{children}</strong>,
                                         em: ({children}) => <em className="text-indigo-300/90 italic">{children}</em>
                                       }}
                                     >
                                       {source.type || 'Reference'}
                                     </ReactMarkdown>
                                   </span>
                               </div>
                               {source.url && (
                                 <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors">
                                   {source.url}
                                 </a>
                               )}
                               {source.description && (
                                 <div className="text-white/70 text-sm mt-2">
                                   <ReactMarkdown 
                                     components={{
                                       p: ({children}) => <p className="text-white/70 mb-2">{children}</p>,
                                       strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                                       em: ({children}) => <em className="text-white/80 italic">{children}</em>
                                     }}
                                   >
                                     {source.description}
                                   </ReactMarkdown>
                                 </div>
                               )}
                             </div>
                           ))}
                         </div>
                       ) : (
                         <div className="text-center py-8">
                           <p className="text-white/60">No sources available. Conduct a research query to see sources.</p>
                         </div>
                       )}
                     </div>
                   )}
                   
                   {activeTab === 'citations' && (
                     <div className="space-y-4">
                       <h3 className="text-xl font-semibold text-white">
                         Citations
                       </h3>
                       {researchResults && researchResults.citations && Array.isArray(researchResults.citations) && researchResults.citations.length > 0 ? (
                         <div className="space-y-3">
                           {researchResults.citations.map((citation, index) => {
                             // Parse citation data properly
                             let citationText = '';
                             let citationUrl = '';
                             let citationTitle = '';
                             
                             if (typeof citation === 'string') {
                               citationText = citation;
                             } else if (citation && typeof citation === 'object') {
                               // Extract title if available
                               citationTitle = citation.title || citation.name || '';
                               
                               // Extract URL if available
                               citationUrl = citation.url || citation.link || citation.href || '';
                               
                               // Extract main text content
                               citationText = citation.text || citation.citation || citation.description || citation.content || '';
                               
                               // If no text found, try to construct from available fields
                               if (!citationText && citationTitle) {
                                 citationText = citationTitle;
                               }
                               
                               // If still no text, show a formatted version of key fields
                               if (!citationText) {
                                 const relevantFields = [];
                                 if (citation.author) relevantFields.push(`Author: ${citation.author}`);
                                 if (citation.year) relevantFields.push(`Year: ${citation.year}`);
                                 if (citation.source) relevantFields.push(`Source: ${citation.source}`);
                                 citationText = relevantFields.length > 0 ? relevantFields.join(', ') : 'Citation information available';
                               }
                             }
                             
                             return (
                               <div key={index} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                                 <div className="text-white/80 text-sm leading-relaxed space-y-2">
                                   <div className="flex items-start gap-2">
                                     <span className="text-indigo-300 font-medium flex-shrink-0">[{index + 1}]</span>
                                     <div className="flex-1">
                                       {citationTitle && (
                                         <div className="font-medium text-white mb-1">
                                           <ReactMarkdown 
                                             components={{
                                               p: ({children}) => <span className="text-white font-medium">{children}</span>,
                                               strong: ({children}) => <strong className="text-white font-bold">{children}</strong>,
                                               em: ({children}) => <em className="text-white/90 italic">{children}</em>
                                             }}
                                           >
                                             {citationTitle}
                                           </ReactMarkdown>
                                         </div>
                                       )}
                                       <div className="text-white/80">
                                         <ReactMarkdown 
                                           components={{
                                             p: ({children}) => <span className="text-white/80">{children}</span>,
                                             strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                                             em: ({children}) => <em className="text-white/80 italic">{children}</em>,
                                             a: ({children, href}) => <a href={href} className="text-indigo-400 hover:text-indigo-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                                           }}
                                         >
                                           {citationText}
                                         </ReactMarkdown>
                                       </div>
                                       {citationUrl && (
                                         <div className="mt-2">
                                           <a 
                                             href={citationUrl} 
                                             target="_blank" 
                                             rel="noopener noreferrer" 
                                             className="text-indigo-400 hover:text-indigo-300 text-xs underline break-all"
                                           >
                                             {citationUrl}
                                           </a>
                                         </div>
                                       )}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                       ) : (
                         <div className="text-center py-8">
                           <p className="text-white/60">No citations available. Conduct a research query to see citations.</p>
                         </div>
                       )}
                     </div>
                   )}
                   
                   {activeTab === 'process' && (
                     <div className="space-y-4">
                       <h3 className="text-xl font-semibold text-white">
                         Process Log
                       </h3>
                       {researchResults && researchResults.processLog && Array.isArray(researchResults.processLog) && researchResults.processLog.length > 0 ? (
                         <div className="space-y-2">
                           {researchResults.processLog.map((log, index) => {
                             // Parse process log entry properly
                             let logTitle = '';
                             let logDescription = '';
                             let logTime = '';
                             let logStatus = 'completed';
                             
                             if (typeof log === 'string') {
                               // Try to parse JSON string
                               try {
                                 const parsed = JSON.parse(log);
                                 logTitle = parsed.title || '';
                                 logDescription = parsed.description || '';
                                 logTime = parsed.time || '';
                                 logStatus = parsed.status || 'completed';
                               } catch {
                                 logDescription = log;
                               }
                             } else if (log && typeof log === 'object') {
                               logTitle = log.title || '';
                               logDescription = log.description || log.action || log.message || '';
                               logTime = log.time || '';
                               logStatus = log.status || 'completed';
                               
                               // If no description found, try to construct meaningful text
                               if (!logDescription && !logTitle) {
                                 const relevantFields = [];
                                 if (log.type) relevantFields.push(`Type: ${log.type}`);
                                 if (log.url) relevantFields.push(`URL: ${log.url}`);
                                 logDescription = relevantFields.length > 0 ? relevantFields.join(', ') : 'Process step completed';
                               }
                             }
                             
                             // Determine status color
                             const statusColor = logStatus === 'completed' ? 'bg-green-600/20 text-green-300' : 
                                               logStatus === 'processing' ? 'bg-yellow-600/20 text-yellow-300' : 
                                               logStatus === 'error' ? 'bg-red-600/20 text-red-300' : 
                                               'bg-blue-600/20 text-blue-300';
                             
                             const dotColor = logStatus === 'completed' ? 'bg-green-400' : 
                                            logStatus === 'processing' ? 'bg-yellow-400 animate-pulse' : 
                                            logStatus === 'error' ? 'bg-red-400' : 
                                            'bg-blue-400';
                             
                             return (
                               <div key={index} className="flex items-start gap-3 p-3 bg-gray-700/20 rounded-lg">
                                 <div className={`w-2 h-2 rounded-full mt-2 ${dotColor}`} />
                                 <div className="flex-1 min-w-0">
                                   <div className="flex items-center gap-2 mb-1">
                                     <span className="text-gray-400 text-sm font-mono">
                                       {logTime || `Step ${index + 1}`}
                                     </span>
                                     <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>
                                       {logStatus}
                                     </span>
                                   </div>
                                   {logTitle && (
                                     <div className="text-white font-medium text-sm mb-1">
                                       <ReactMarkdown 
                                         components={{
                                           p: ({children}) => <span className="text-white font-medium">{children}</span>,
                                           strong: ({children}) => <strong className="text-white font-bold">{children}</strong>,
                                           em: ({children}) => <em className="text-white/90 italic">{children}</em>,
                                           code: ({children}) => <code className="bg-gray-800 text-indigo-300 px-1 py-0.5 rounded text-xs">{children}</code>
                                         }}
                                       >
                                         {logTitle}
                                       </ReactMarkdown>
                                     </div>
                                   )}
                                   {logDescription && (
                                     <div className="text-white/80 text-sm">
                                       <ReactMarkdown 
                                         components={{
                                           p: ({children}) => <span className="text-white/80">{children}</span>,
                                           strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                                           em: ({children}) => <em className="text-white/80 italic">{children}</em>,
                                           code: ({children}) => <code className="bg-gray-800 text-indigo-300 px-1 py-0.5 rounded text-xs">{children}</code>,
                                           a: ({children, href}) => <a href={href} className="text-indigo-400 hover:text-indigo-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                                         }}
                                       >
                                         {logDescription}
                                       </ReactMarkdown>
                                     </div>
                                   )}
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                       ) : isLoading ? (
                         <div className="space-y-2">
                           <div className="flex items-center gap-3 p-3 bg-gray-700/20 rounded-lg">
                             <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                             <span className="text-gray-400 text-sm font-mono">00:01</span>
                             <span className="text-white/80 text-sm">Initializing research query...</span>
                             <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-300">
                               processing
                             </span>
                           </div>
                         </div>
                       ) : (
                         <div className="text-center py-8">
                           <p className="text-white/60">No process log available. Conduct a research query to see the process.</p>
                         </div>
                       )}
                     </div>
                   )}
                 </div>
              </div>
            </div>


          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 text-center py-8 md:py-12 mt-12">
          <div className="text-sm text-white/50 max-w-4xl mx-auto px-4">
            © 2024 Omni Research Lab. Advancing AI for humanity.
          </div>
        </footer>
      </div>
    </>
  )
}