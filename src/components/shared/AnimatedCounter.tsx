import React, {useState, useEffect} from "react"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({end, suffix = "", duration = 2500, className = ""}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Start animation after a short delay to ensure component is mounted
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US")
  }

  return (
    <span className="tabular-nums text-title-small sm:text-title-large text-gray-900 font-bold block letter-spacing-[0.1em] transition-all duration-500 ease-in-out">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
