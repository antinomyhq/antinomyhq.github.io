import React, {useEffect, useRef} from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  alpha: number
  targetAlpha: number
  phase: number
  speed: number
  layer: number
}

interface FloatingShape {
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  sides: number
  alpha: number
  layer: number
}

interface DataPoint {
  x: number
  y: number
  targetX: number
  targetY: number
  progress: number
  speed: number
  alpha: number
}

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({x: 0, y: 0, targetX: 0, targetY: 0})
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Colors from theme
    const colors = {
      orange: "#fb923c",
      dark: "#181818",
      darkLight: "#323335",
      light: "#545556",
      cream: "#f5f5f0",
    }

    // Create particles with layers for depth
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000))

    for (let i = 0; i < particleCount; i++) {
      const layer = Math.random() < 0.3 ? 0 : Math.random() < 0.5 ? 1 : 2
      const baseSpeed = layer === 0 ? 0.3 : layer === 1 ? 0.5 : 0.8
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        targetAlpha: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        layer,
      })
    }

    // Create floating geometric shapes
    const shapes: FloatingShape[] = []
    const shapeCount = 8

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        size: Math.random() * 60 + 30,
        sides: Math.floor(Math.random() * 3) + 3, // 3-5 sides
        alpha: Math.random() * 0.08 + 0.02,
        layer: Math.random() < 0.5 ? 0 : 1,
      })
    }

    // Create data points (small traveling dots)
    const dataPoints: DataPoint[] = []
    const dataPointCount = 5

    for (let i = 0; i < dataPointCount; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        progress: Math.random(),
        speed: Math.random() * 0.002 + 0.001,
        alpha: Math.random() * 0.3 + 0.2,
      })
    }

    // Mouse move handler with smooth interpolation
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.targetX = e.clientX - rect.left
      mouseRef.current.targetY = e.clientY - rect.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      timeRef.current += 1

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      )
      bgGradient.addColorStop(0, "rgba(251, 146, 60, 0.02)")
      bgGradient.addColorStop(0.5, "rgba(84, 85, 86, 0.01)")
      bgGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw floating shapes (background layer)
      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Bounce off walls
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        // Draw polygon
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.beginPath()
        for (let i = 0; i < shape.sides; i++) {
          const angle = (i * 2 * Math.PI) / shape.sides - Math.PI / 2
          const x = Math.cos(angle) * shape.size
          const y = Math.sin(angle) * shape.size
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(84, 85, 86, ${shape.alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      })

      // Draw data points (traveling dots with trails)
      dataPoints.forEach((point) => {
        point.progress += point.speed
        if (point.progress >= 1) {
          point.progress = 0
          point.x = point.targetX
          point.y = point.targetY
          point.targetX = Math.random() * canvas.width
          point.targetY = Math.random() * canvas.height
        }

        const currentX = point.x + (point.targetX - point.x) * point.progress
        const currentY = point.y + (point.targetY - point.y) * point.progress

        // Draw trail
        const trailLength = 20
        for (let i = 0; i < trailLength; i++) {
          const trailProgress = point.progress - (i / trailLength) * 0.1
          if (trailProgress < 0) continue
          const tx = point.x + (point.targetX - point.x) * trailProgress
          const ty = point.y + (point.targetY - point.y) * trailProgress
          const trailAlpha = point.alpha * (1 - i / trailLength) * 0.5
          ctx.beginPath()
          ctx.arc(tx, ty, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(251, 146, 60, ${trailAlpha})`
          ctx.fill()
        }

        // Draw main point
        ctx.beginPath()
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 146, 60, ${point.alpha})`
        ctx.fill()
      })

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Pulsing effect based on phase
        particle.phase += particle.speed
        particle.radius = particle.baseRadius + Math.sin(particle.phase) * 0.5

        // Smooth alpha transition
        if (Math.random() < 0.01) {
          particle.targetAlpha = Math.random() * 0.4 + 0.1
        }
        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 146, 60, ${particle.alpha})`
        ctx.fill()

        // Draw connections between nearby particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.25
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(84, 85, 86, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)

        if (mouseDistance < 250) {
          const force = (250 - mouseDistance) / 250
          const alpha = force * 0.5

          // Draw connection to mouse
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(251, 146, 60, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()

          // Gentle attraction to mouse
          const attractionStrength = 0.0002
          particle.vx += dx * attractionStrength
          particle.vy += dy * attractionStrength
        }

        // Limit velocity
        const maxVelocity = 1.2
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (velocity > maxVelocity) {
          particle.vx = (particle.vx / velocity) * maxVelocity
          particle.vy = (particle.vy / velocity) * maxVelocity
        }
      })

      // Draw subtle mouse glow
      const glowGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        120
      )
      glowGradient.addColorStop(0, "rgba(251, 146, 60, 0.08)")
      glowGradient.addColorStop(0.5, "rgba(251, 146, 60, 0.02)")
      glowGradient.addColorStop(1, "rgba(251, 146, 60, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{opacity: 0.5, zIndex: -1}}
    />
  )
}

export default HeroAnimation
