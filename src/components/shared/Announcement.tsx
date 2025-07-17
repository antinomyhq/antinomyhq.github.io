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
        isGradient ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
      <div className="text-center">
        <span className={`text-sm sm:text-base md:text-lg font-bold ${isGradient ? "tracking-wide" : ""}`}>
          {children || text}
          {refLink && refText && (
            <a
              className={`font-bold ml-2 ${
                isGradient
                  ? "text-tailCall-yellow hover:text-white transition-colors underline"
                  : "text-tailCall-yellow"
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
