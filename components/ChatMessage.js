import { motion } from 'framer-motion'
import AIBot from './AIBot'

export default function ChatMessage({ message }) {
  const isUser = message.type === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-auto'
            : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white mr-auto'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div style={{ transform: 'scale(0.8)' }}>
              <AIBot />
            </div>
            <span className="text-sm font-medium text-gray-300">Omni</span>
          </div>
        )}

        <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>

        <div className="text-xs text-gray-300 mt-2 opacity-70">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </motion.div>
  )
}