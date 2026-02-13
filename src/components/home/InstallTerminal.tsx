import React from "react"
import CopyButton from "../shared/CopyButton"

interface InstallTerminalProps {
  command?: string
  className?: string
}

const InstallTerminal: React.FC<InstallTerminalProps> = ({
  command = "curl -fsSL https://forgecode.dev/cli | sh",
  className = "",
}) => {
  // Split command into characters for animation
  const characters = command.split("")

  return (
    <div className={`inline-block ${className}`}>
      <div className="relative group">
        {/* Soft pastel glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/20 via-pink-300/15 to-blue-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-700 blur-lg" />

        <div
          className="relative border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{borderColor: "#4a4a5a"}}
        >
          {/* Terminal Header with dark pastel gradient */}
          <div
            className="border-b-2 px-6 py-2.5 flex items-center justify-between"
            style={{
              background: "linear-gradient(135deg, #2d2d3a 0%, #353545 100%)",
              borderColor: "#4a4a5a",
            }}
          >
            <div className="flex items-center gap-2">
              {/* Pastel control dots */}
              <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#ff9999"}} />
              <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#ffdb99"}} />
              <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#b4f8c8"}} />
            </div>
            <CopyButton
              textToCopy={command}
              ariaLabel="Copy installation command"
              className="!bg-transparent hover:!bg-white/10 !px-3 !py-1.5 transition-colors duration-200 !border-none"
              iconClassName="w-4 h-4"
            />
          </div>

          {/* Terminal Body with dark pastel background */}
          <div
            className="pl-8 pr-24 py-10"
            style={{
              background: "linear-gradient(135deg, #1e1e2e 0%, #2a2d3a 100%)",
            }}
          >
            <pre
              className="text-base sm:text-lg md:text-xl lg:text-2xl overflow-x-auto whitespace-pre-wrap break-all tracking-tight leading-relaxed"
              style={{
                fontFamily: "var(--ifm-font-family-monospace)",
                color: "#c9f5c3",
                margin: 0,
                padding: 0,
                background: "transparent",
              }}
            >
              {characters.map((char, index) => (
                <span
                  key={index}
                  className="terminal-char"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallTerminal
