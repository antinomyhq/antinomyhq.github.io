import React from "react"

interface AnnouncementProps {
  text?: string
  children?: React.ReactNode
  refLink?: string
  refText?: React.ReactNode
  variant?: "default" | "gradient"
}

const Announcement: React.FC<AnnouncementProps> = ({text, children, refLink, refText, variant = "default"}) => {
  const isGradient = variant === "gradient"

  return (
    <div
      className={`w-full h-auto flex items-center justify-center p-2 sm:p-3 ${
        isGradient ? "bg-tailCall-terminal-bg-primary text-tailCall-terminal-text-primary" : "bg-tailCall-terminal-bg-primary text-tailCall-terminal-text-primary"
      }`}
    >
      <div className="text-center">
        <span className={`text-sm sm:text-base md:text-lg font-bold font-mono ${isGradient ? "tracking-wide" : ""}`}>
          {children || text}
          {refLink && refText && (
            <a
              className={`font-bold ml-2 font-mono ${
                isGradient ? "text-tailCall-terminal-green-primary hover:text-tailCall-terminal-green-secondary transition-colors underline" : "text-tailCall-terminal-green-primary"
              }`}
              href={refLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {refText}
            </a>
          )}
        </span>
      </div>
    </div>
  )
}

export default Announcement
