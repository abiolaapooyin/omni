import { motion } from 'framer-motion'
import AIBot from './AIBot'

export default function Preloader({ isVisible = true }) {
  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ transform: 'scale(4.2)' }}>
        <AIBot />
      </div>
    </motion.div>
  )
}