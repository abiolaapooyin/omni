import { motion } from 'framer-motion'

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientColors = colors.join(', ')
  
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.span
        className="bg-clip-text text-transparent font-light"
        style={{
          backgroundImage: `linear-gradient(45deg, ${gradientColors})`,
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {children}
      </motion.span>
      
      {showBorder && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(45deg, ${gradientColors})`,
            backgroundSize: '400% 400%',
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: animationSpeed,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}
    </motion.div>
  )
}