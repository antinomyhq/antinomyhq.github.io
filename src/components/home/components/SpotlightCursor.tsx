import React, {CSSProperties, useRef, useCallback, useMemo} from "react"
import {useThemeContext} from "@site/src/theme/ThemeProvider/ThemeProvider"

interface SpotlightSpanProps {
  text: string
  className?: string
  style?: CSSProperties
  showHighlighted?: boolean
}

const SPOTLIGHT_SIZE = 400

const SpotlightSpan: React.FC<SpotlightSpanProps> = ({text, className = "", style, showHighlighted = false}) => {
  const {theme} = useThemeContext()
  const spanRef = useRef<HTMLSpanElement | null>(null)

  const baseColor = useMemo(() => (theme === "dark" ? "hsla(0, 0%, 100%, 0.2)" : "rgba(0,0,0,0.2)"), [theme])

  const spotlightColor = useMemo(() => (theme === "dark" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)"), [theme])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
    const el = spanRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left - SPOTLIGHT_SIZE / 2
    const y = event.clientY - rect.top - SPOTLIGHT_SIZE / 2

    el.style.backgroundPosition = `${x}px ${y}px`
  }, [])

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
    const el = spanRef.current
    if (!el) return
    el.style.backgroundPosition = "left"
  }, [])

  return (
    <span
      ref={spanRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`text-transparent bg-clip-text cursor-default transition-all duration-0 ${className}`}
      style={{
        color: baseColor,
        backgroundImage: `radial-gradient(closest-side, ${spotlightColor} 0%, rgba(0,0,0,0) 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${SPOTLIGHT_SIZE}px ${SPOTLIGHT_SIZE}px`,
        backgroundPosition: showHighlighted ? "left" : "",
        transition: "all 1s cubic-bezier(.19,1,.22,1)",
        ...style,
      }}
    >
      {text}
    </span>
  )
}

export default SpotlightSpan
