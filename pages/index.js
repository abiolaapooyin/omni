import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { langflowAPI } from '../utils/langflowAPI'
import CircularText from '../components/CircularText'
import SilkBackground from '../components/SilkBackground'
import AnnouncementBar from '../components/AnnouncementBar'
import AnimatedSphere from '../components/AnimatedSphere'
import GradientText from '../components/GradientText'
import DecryptedText from '../components/DecryptedText'
import PromptInput from '../components/PromptInput'
import ChatMessage from '../components/ChatMessage'
import ThinkingIndicator from '../components/ThinkingIndicator'
import Preloader from '../components/Preloader'

const placeholders = [
  "What do you need the brain squad to solve?",
  "Drop your chaos. We'll reason it out.",
  "Ask away — the gods are listening.",
  "Type your mission. They'll handle the logic.",
  "What's the big idea? Let's crack it."
]

export default function Home() {
  const [sessionId, setSessionId] = useState(() => {
    // Generate unique session ID on component mount
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage for this session
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem(`chat_${sessionId}`)
      return savedMessages ? JSON.parse(savedMessages) : []
    }
    return []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      localStorage.setItem(`chat_${sessionId}`, JSON.stringify(messages))
    }
  }, [messages, sessionId])

  // Clear current session
  const clearSession = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`chat_${sessionId}`)
    }
    setMessages([])
  }

  // Start new session
  const startNewSession = () => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    setSessionId(newSessionId)
    setMessages([])
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`chat_${sessionId}`)
    }
  }

  const handleSendMessage = async (message) => {
    if (!message.trim()) return

    const userMessage = { type: 'user', content: message, timestamp: Date.now() }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const aiContent = await langflowAPI.sendMessage(message, sessionId)
      
      const aiMessage = {
        type: 'ai',
        content: aiContent,
        timestamp: Date.now(),
        icon: '🤖'
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error calling Langflow:', error)
      
      const errorMessage = {
        type: 'ai',
        content: error.message || 'Sorry, I encountered an error. Please try again.',
        timestamp: Date.now(),
        icon: '⚠️'
      }
      setMessages(prev => [...prev, errorMessage])
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
      <SilkBackground />
      
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
            text="ARTIFICIAL INTELLIGENCE . EXPERIMENT"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="relative z-10 flex justify-center -mt-2 md:-mt-4">
        <AnnouncementBar />
      </div>

      {/* Sphere Component */}
      <div className="relative z-10 flex justify-center py-2 md:py-3">
        <AnimatedSphere />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-4 pt-2 md:px-8">
        <div className="w-full max-w-4xl mx-auto space-y-2 md:space-y-4">
          {/* Hero Text */}
          <div className="text-center space-y-6 md:space-y-8 mb-4">
            <style jsx>{`
              /* 
                these type the CSS variable as color 
                unlocking the ability for the browser 
                to animate just that portion 
              */ 
              @property --color-1 { 
                syntax: "<color>"; 
                inherits: false; 
                initial-value: hsl(98 100% 62%); 
              } 
              
              @property --color-2 { 
                syntax: "<color>"; 
                inherits: false; 
                initial-value: hsl(204 100% 59%); 
              } 
              
              /* keyframes that change the color variable */ 
              @keyframes gradient-change { 
                to { 
                  --color-1: hsl(210 100% 59%); 
                  --color-2: hsl(310 100% 59%); 
                } 
              } 
              
              .animated-gradient-article { 
                 display: grid; 
                 gap: 0.3lh; 
                 text-align: center; 
               } 
               
               .animated-gradient-h1 { 
                 /* apply variable changes over time */ 
                 animation: gradient-change 2s linear infinite alternate; 
                 
                 background: linear-gradient( 
                   /* 
                     in oklch produces more vibrant gradient results 
                     learn more https://developer.chrome.com/docs/css-ui/access-colors-spaces#color_interpolation 
                   */ 
                   to right in oklch, 
                   /* use the variables in a gradient (or wherever!) */ 
                   var(--color-1), 
                   var(--color-2) 
                 ); 
                 
                 /* old browser support */ 
                 -webkit-background-clip: text; 
                 -webkit-text-fill-color: transparent; 
                 
                 /* modern browser version */ 
                 background-clip: text; 
                 color: transparent; 
               } 
              
              .animated-gradient-h1 { 
                 font-family: var(--font-inter), sans-serif;
                 font-weight: 700;
                 font-size: 10vmin; 
                 line-height: 1.25cap; 
                 margin: 0; 
                 text-wrap: balance; 
               } 
               
               .animated-gradient-p { 
                 font-family: var(--font-inter), sans-serif;
                 font-weight: 300;
                 margin: 0; 
                 text-wrap: balance; 
                 color: #9CA3AF; 
               }
               
               /* Sphere Styles */
               .sphere {
                 --s: 2s;
                 --d: 40;
                 --c: #ff6600;
                 width: 15vmin;
                 height: 15vmin;
                 background: transparent;
                 position: relative;
                 animation: spin 5s linear 0s infinite;
                 animation-play-state: running;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 cursor: pointer;
                 transform-style: preserve-3d;
               }
               
               .sphere:hover {
                 animation-play-state: paused;
               }
               
               @keyframes spin {
                 0% { transform: rotateX(-210deg) rotateY(0deg) rotateZ(185deg); }
                 100% { transform: rotateX(-210deg) rotateY(360deg) rotateZ(185deg); }
               }
               
               .sphere div {
                 --sz: 23%;
                 --dv: calc(var(--s) / var(--d));
                 --dl: calc(var(--dv) * -1);
                 width: var(--sz);
                 height: var(--sz);
                 position: absolute;
                 border: 0.15vmin solid var(--c);
                 border-radius: 100%;
                 transform: rotateX(90deg) translateZ(7.35vmin);
                 box-shadow: 0 0 0.3vmin 0.3vmin var(--c), 0 0 0.3vmin 0.3vmin var(--c) inset;
                 animation: shine var(--s) linear var(--dl) infinite;
                 background: transparent;
                 display: flex;
                 align-items: center;
                 justify-content: center;
               }
               
               @keyframes shine {
                 50%, 100% {
                   border-color: #10101000;
                   box-shadow: 0 0 1px 1px #10101000, 0 0 1px 1px #10101000 inset;
                   filter: hue-rotate(540deg);
                 }
               }
               
               .sphere div:before {
                 content: "";
                 width: 100%;
                 height: 100%;
                 position: absolute;
                 border: 0.15vmin solid var(--c);
                 border-radius: 100%;
                 box-shadow: 0 0 0.3vmin 0.3vmin var(--c), 0 0 0.3vmin 0.3vmin var(--c) inset;
                 animation: shine var(--s) linear calc(var(--dl) * -1) infinite;
               }
               
               .sphere div:nth-child(2) { transform: rotateX(90deg) translateZ(6.75vmin); --sz: 43%; --dl: calc(var(--dv) * -2); filter: hue-rotate(-2deg); }
               .sphere div:nth-child(3) { transform: rotateX(90deg) translateZ(6vmin); --sz: 60%; --dl: calc(var(--dv) * -3); filter: hue-rotate(-4deg); }
               .sphere div:nth-child(4) { transform: rotateX(90deg) translateZ(5.25vmin); --sz: 71%; --dl: calc(var(--dv) * -4); filter: hue-rotate(-6deg); }
               .sphere div:nth-child(5) { transform: rotateX(90deg) translateZ(4.5vmin); --sz: 80%; --dl: calc(var(--dv) * -5); filter: hue-rotate(-8deg); }
               .sphere div:nth-child(6) { transform: rotateX(90deg) translateZ(3.75vmin); --sz: 86%; --dl: calc(var(--dv) * -6); filter: hue-rotate(-10deg); }
               .sphere div:nth-child(7) { transform: rotateX(90deg) translateZ(3vmin); --sz: 91%; --dl: calc(var(--dv) * -7); filter: hue-rotate(-12deg); }
               .sphere div:nth-child(8) { transform: rotateX(90deg) translateZ(2.25vmin); --sz: 95%; --dl: calc(var(--dv) * -8); filter: hue-rotate(-14deg); }
               .sphere div:nth-child(9) { transform: rotateX(90deg) translateZ(1.5vmin); --sz: 97%; --dl: calc(var(--dv) * -9); filter: hue-rotate(-16deg); }
               .sphere div:nth-child(10) { transform: rotateX(90deg) translateZ(0.75vmin); --sz: 99%; --dl: calc(var(--dv) * -10); filter: hue-rotate(-18deg); }
               .sphere div:nth-child(11) { transform: rotateX(90deg); --sz: 100%; --dl: calc(var(--dv) * -11); filter: hue-rotate(-20deg); }
               .sphere div:nth-child(12) { transform: rotateX(90deg) translateZ(-0.75vmin); --sz: 99%; --dl: calc(var(--dv) * -12); filter: hue-rotate(-22deg); }
               .sphere div:nth-child(13) { transform: rotateX(90deg) translateZ(-1.5vmin); --sz: 97%; --dl: calc(var(--dv) * -13); filter: hue-rotate(-24deg); }
               .sphere div:nth-child(14) { transform: rotateX(90deg) translateZ(-2.25vmin); --sz: 95%; --dl: calc(var(--dv) * -14); filter: hue-rotate(-26deg); }
               .sphere div:nth-child(15) { transform: rotateX(90deg) translateZ(-3vmin); --sz: 91%; --dl: calc(var(--dv) * -15); filter: hue-rotate(-28deg); }
               .sphere div:nth-child(16) { transform: rotateX(90deg) translateZ(-3.75vmin); --sz: 86%; --dl: calc(var(--dv) * -16); filter: hue-rotate(-30deg); }
               .sphere div:nth-child(17) { transform: rotateX(90deg) translateZ(-4.5vmin); --sz: 80%; --dl: calc(var(--dv) * -17); filter: hue-rotate(-32deg); }
               .sphere div:nth-child(18) { transform: rotateX(90deg) translateZ(-5.25vmin); --sz: 71%; --dl: calc(var(--dv) * -18); filter: hue-rotate(-34deg); }
               .sphere div:nth-child(19) { transform: rotateX(90deg) translateZ(-6vmin); --sz: 60%; --dl: calc(var(--dv) * -19); filter: hue-rotate(-36deg); }
               .sphere div:nth-child(20) { transform: rotateX(90deg) translateZ(-6.75vmin); --sz: 43%; --dl: calc(var(--dv) * -20); filter: hue-rotate(-38deg); }
               .sphere div:nth-child(21) { transform: rotateX(90deg) translateZ(-7.35vmin); --sz: 23%; --dl: calc(var(--dv) * -21); filter: hue-rotate(-40deg); }

            `}</style>
            <article className="animated-gradient-article"> 
               <h1 className="animated-gradient-h1 font-bold">Omni AI</h1> 
                <p className="animated-gradient-p">Multi-agent AI experiment</p> 
             </article>
           </div>

          {/* Prompt Input */}
          <div className="w-full max-w-md mx-auto">
            <PromptInput 
              onSend={handleSendMessage}
              placeholder={placeholders[currentPlaceholder]}
              disabled={isLoading}
            />
          </div>

          {/* Thinking Indicator */}
          {isLoading && <ThinkingIndicator />}

          {/* Chat Messages */}
          {messages.length > 0 && (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              <AnimatePresence>
                {messages.map((message) => (
                  <ChatMessage key={message.timestamp} message={message} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 md:py-8">
      </footer>
    </div>
    </>
  )
}