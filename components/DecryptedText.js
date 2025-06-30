import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function DecryptedText({
  text = '',
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view'
}) {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  
  const getRandomChar = (originalChar) => {
    if (useOriginalCharsOnly) {
      const textChars = [...new Set(text.split(''))]
      return textChars[Math.floor(Math.random() * textChars.length)]
    }
    return chars[Math.floor(Math.random() * chars.length)]
  }

  const decrypt = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    let iterations = 0
    const targetText = text
    
    const interval = setInterval(() => {
      if (sequential) {
        // Sequential reveal
        const revealCount = Math.floor((iterations / maxIterations) * targetText.length)
        let newText = ''
        
        for (let i = 0; i < targetText.length; i++) {
          if (revealDirection === 'start' && i < revealCount) {
            newText += targetText[i]
          } else if (revealDirection === 'end' && i >= targetText.length - revealCount) {
            newText += targetText[i]
          } else if (revealDirection === 'center') {
            const center = Math.floor(targetText.length / 2)
            const distance = Math.abs(i - center)
            if (distance < revealCount / 2) {
              newText += targetText[i]
            } else {
              newText += targetText[i] === ' ' ? ' ' : getRandomChar(targetText[i])
            }
          } else {
            newText += targetText[i] === ' ' ? ' ' : getRandomChar(targetText[i])
          }
        }
        setDisplayText(newText)
      } else {
        // Random reveal
        let newText = ''
        for (let i = 0; i < targetText.length; i++) {
          if (targetText[i] === ' ') {
            newText += ' '
          } else if (Math.random() < iterations / maxIterations) {
            newText += targetText[i]
          } else {
            newText += getRandomChar(targetText[i])
          }
        }
        setDisplayText(newText)
      }
      
      iterations++
      
      if (iterations >= maxIterations) {
        clearInterval(interval)
        setDisplayText(targetText)
        setIsAnimating(false)
      }
    }, speed)
  }

  useEffect(() => {
    if (animateOn === 'view' && isVisible) {
      decrypt()
    }
  }, [isVisible, text])

  useEffect(() => {
    if (animateOn === 'view') {
      setIsVisible(true)
    }
  }, [])

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      decrypt()
    }
  }

  return (
    <motion.div
      className={`${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <span className={`${className} ${isAnimating ? encryptedClassName : ''}`}>
        {displayText || text}
      </span>
    </motion.div>
  )
}