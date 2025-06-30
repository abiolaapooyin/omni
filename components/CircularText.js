import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CircularText({ 
  text = 'AI • PROMPT • INTERFACE • LANGFLOW • ',
  spinDuration = 20,
  onHover = 'slowDown',
  className = ''
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  const getAnimationDuration = () => {
    if (!isHovered) return spinDuration
    
    switch (onHover) {
      case 'slowDown': return spinDuration * 2
      case 'speedUp': return spinDuration * 0.5
      case 'pause': return 0
      case 'goBonkers': return spinDuration * 0.1
      default: return spinDuration
    }
  }

  const chars = text.split('')
  const radius = 50
  const angleStep = 360 / chars.length

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{
          duration: getAnimationDuration(),
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {chars.map((char, index) => {
          const angle = index * angleStep
          const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
          const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius
          
          return (
            <span
              key={index}
              className="absolute text-sm font-medium text-white/80 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) rotate(${angle}deg)`
              }}
            >
              {char}
            </span>
          )
        })}
      </motion.div>
    </div>
  )
}