import React, {ReactNode} from "react"

interface TerminalLayoutProps {
  children: ReactNode
  enableScanline?: boolean
  enableNoise?: boolean
  enableGrid?: boolean
  className?: string
}

/**
 * TerminalLayout - Wraps content with terminal-themed visual effects
 * 
 * Features:
 * - Scanline animation (optional)
 * - Noise texture overlay (optional)
 * - Grid background pattern (optional)
 * - CRT vignette effect
 */
const TerminalLayout: React.FC<TerminalLayoutProps> = ({
  children,
  enableScanline = true,
  enableNoise = true,
  enableGrid = false,
  className = "",
}) => {
  return (
    <div
      className={`relative min-h-screen bg-tailCall-terminal-bg-primary ${
        enableGrid ? "terminal-grid-bg" : ""
      } ${className}`}
    >
      {/* Scanline effect */}
      {enableScanline && <div className="terminal-scanline" />}

      {/* Noise texture */}
      {enableNoise && <div className="terminal-noise" />}

      {/* CRT vignette effect */}
      <div className="terminal-crt">
        {children}
      </div>
    </div>
  )
}

export default TerminalLayout

