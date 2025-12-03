import React from "react"
import CopyButton from "../shared/CopyButton"

interface TerminalWindowProps {
  command: string
  showFullTitle?: boolean
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  command,
  showFullTitle = false
}) => {
  return (
    <div className="relative w-full group">
      {/* Enhanced terminal glow effect with green accent */}
      <div className="absolute -inset-1 bg-gradient-to-r from-tailCall-terminal-green-glow via-tailCall-terminal-green-primary/20 to-tailCall-terminal-green-glow opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

      {/* Modern Terminal Window with enhanced styling */}
      <div className="relative overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-[0_8px_32px_rgba(74,222,128,0.15)] border border-tailCall-terminal-border">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-tailCall-terminal-bg-secondary to-tailCall-terminal-bg-tertiary border-b border-tailCall-terminal-border">
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors cursor-pointer shadow-[0_0_8px_rgba(255,95,87,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors cursor-pointer shadow-[0_0_8px_rgba(254,188,46,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors cursor-pointer shadow-[0_0_8px_rgba(40,200,64,0.4)]"></div>
          </div>

          {/* Terminal Title with glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xs text-tailCall-terminal-text-secondary font-mono font-medium terminal-glow">
              {showFullTitle ? "forge — terminal" : "forge"}
            </span>
          </div>

          {/* Right spacer for balance */}
          <div className="w-20"></div>
        </div>

        {/* Terminal Content with enhanced background */}
        <div className="relative px-4 sm:px-5 py-4 sm:py-5 pr-14 sm:pr-16 bg-tailCall-terminal-bg-primary">
          <div className="flex items-center">
            {/* Terminal prompt with glow */}
            <span className="font-mono text-sm sm:text-base md:text-lg text-tailCall-terminal-green-primary select-none mr-2 font-medium terminal-glow">
              $
            </span>

            <div className="typing-animation inline-flex items-center">
              <span className="font-mono text-sm sm:text-base md:text-lg text-tailCall-terminal-text-primary">
                {command}
              </span>
              {/* Blinking cursor with glow */}
              <span className="font-mono text-sm sm:text-base md:text-lg text-tailCall-terminal-green-primary animate-blink terminal-glow">
                _
              </span>
            </div>
          </div>

          <CopyButton
            textToCopy={command}
            ariaLabel="Copy install command"
            className="absolute top-2 sm:top-2.5 right-2 sm:right-2.5 z-20 px-2 sm:px-2.5 py-2 sm:py-2.5 bg-tailCall-terminal-bg-secondary/80 hover:bg-tailCall-terminal-bg-secondary border border-tailCall-terminal-border hover:border-tailCall-terminal-green-primary/50 transition-all duration-200"
            iconClassName="w-4 h-4"
          />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-start mt-3">
        <p className="text-xs sm:text-sm text-tailCall-terminal-text-muted font-mono font-medium text-center lg:text-left">
          Copy and run in your terminal
        </p>
      </div>
    </div>
  )
}

export default TerminalWindow

