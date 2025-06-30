import { useEffect, useRef } from 'react'

export default function SilkBackground({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawSilk = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) / 2
      )
      
      gradient.addColorStop(0, `${color}20`)
      gradient.addColorStop(0.5, `${color}10`)
      gradient.addColorStop(1, `${color}05`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw silk pattern
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      ctx.scale(scale, scale)
      
      for (let i = 0; i < 50; i++) {
        const x = Math.sin(time * speed * 0.01 + i * 0.5) * 200
        const y = Math.cos(time * speed * 0.01 + i * 0.3) * 150
        const size = Math.sin(time * speed * 0.02 + i) * 20 + 30
        
        const alpha = (Math.sin(time * speed * 0.01 + i) + 1) * 0.1
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
      
      ctx.restore()
      
      time += 1
      animationRef.current = requestAnimationFrame(drawSilk)
    }

    resizeCanvas()
    drawSilk()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, scale, color, noiseIntensity, rotation])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}