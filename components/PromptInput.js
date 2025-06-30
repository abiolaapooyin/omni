import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PromptInput({ onSend, placeholder, disabled = false }) {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() && !disabled) {
      onSend(value.trim())
      setValue('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value])

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative">
        {/* Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-purple-500 p-[2px]"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl" />
        </motion.div>

        {/* Input Container */}
        <div className="relative flex items-end gap-3 p-3">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="flex-1 bg-transparent text-white placeholder-gray-400 border-none outline-none resize-none min-h-[96px] max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent font-ibm-plex-mono"
            style={{
              lineHeight: '1.5',
              fontSize: '14px'
            }}
          />
          
          <motion.button
            type="submit"
            disabled={!value.trim() || disabled}
            className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.form>
  )
}