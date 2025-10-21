import React from "react"

interface CopyButtonProps {
  copied: boolean
  onClick: () => void
  ariaLabel?: string
  className?: string
  iconClassName?: string
  copiedTextClassName?: string
}

const CopyButton: React.FC<CopyButtonProps> = ({
  copied,
  onClick,
  ariaLabel = "Copy",
  className = "",
  iconClassName = "w-4 h-4",
  copiedTextClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-[rgba(24,24,24,0.85)] hover:bg-[rgba(24,24,24,0.95)] border-none rounded-none px-2 py-1 flex items-center cursor-pointer text-white font-sans transition-colors ${className}`}
    >
      {copied && (
        <span className={`text-xs mr-1.5 text-[#b6ffbe] opacity-85 font-sans ${copiedTextClassName}`}>Copied!</span>
      )}
      <img
        src="/icons/basic/copy-icon.svg"
        alt="Copy"
        className={`[filter:brightness(2)] ${copied ? "" : "ml-0.5"} ${iconClassName}`}
      />
    </button>
  )
}

export default CopyButton

