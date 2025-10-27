import React from "react"
import {useCopyToClipboard} from "@site/src/hooks/useCopyToClipboard"
import {Copy, Check} from "lucide-react"

const ICON_STROKE_WIDTH = {
  COPY: 2,
  CHECK: 2.5,
} as const

const TRANSITION_DURATION = "duration-500"

interface CopyButtonProps {
  textToCopy: string
  ariaLabel?: string
  className?: string
  iconClassName?: string
  duration?: number
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  ariaLabel = "Copy",
  className = "",
  iconClassName = "w-4 h-4",
  duration = 2000,
}) => {
  const {copied, copyToClipboard} = useCopyToClipboard(duration)

  const baseIconClasses = `${iconClassName} transition-all ${TRANSITION_DURATION} ease-in-out absolute inset-0`

  return (
    <button
      onClick={() => copyToClipboard(textToCopy)}
      aria-label={copied ? "Copied" : ariaLabel}
      aria-live="polite"
      className={`bg-[rgba(24,24,24,0.85)] hover:bg-[rgba(24,24,24,0.95)] border-none rounded-none px-2 py-1 flex items-center cursor-pointer text-white font-sans transition-all group ${className}`}
    >
      <div className="relative flex items-center justify-center w-4 h-4">
        <Copy
          className={`${baseIconClasses} group-hover:scale-110 ${
            copied ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
          strokeWidth={ICON_STROKE_WIDTH.COPY}
          aria-hidden="true"
        />

        <div
          className={`${baseIconClasses} ${
            copied ? "opacity-100 scale-100 copy-check-glow" : "opacity-0 scale-0"
          }`}
        >
          <Check
            className={`w-full h-full text-[#4ade80] ${copied ? "animate-check-bounce" : ""}`}
            strokeWidth={ICON_STROKE_WIDTH.CHECK}
            aria-hidden="true"
          />
        </div>
      </div>
    </button>
  )
}

export default CopyButton
