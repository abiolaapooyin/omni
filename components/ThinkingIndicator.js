import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AIBot from './AIBot'

const thinkingMessages = [
  'thinking...',
  'hashing this out...',
  'working on a response...'
]

export default function ThinkingIndicator() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % thinkingMessages.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center justify-center gap-3 py-4"
    >
      <AIBot />
      <motion.span
        key={currentMessage}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
        className="text-gray-400 text-sm md:text-base font-medium"
      >
        {thinkingMessages[currentMessage]}
      </motion.span>

      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}