import { motion } from 'framer-motion'

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
    >
      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
      <span className="text-xs font-medium text-white/90">
        This AI model is still being trained.
      </span>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full"
      />
    </motion.div>
  )
}