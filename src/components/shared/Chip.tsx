import React from "react"

interface ChipProps {
  label: string
  onClick?: () => void
  className?: string
  variant?: "default" | "primary" | "secondary"
}

const Chip: React.FC<ChipProps> = ({label, onClick, className = "", variant = "default"}) => {
  const baseClasses =
    "inline-flex items-center px-3 py-1 text-sm font-medium cursor-pointer transition-colors font-mono border"

  const variantClasses = {
    default:
      "bg-tailCall-terminal-bg-secondary text-tailCall-terminal-text-primary hover:bg-tailCall-terminal-bg-primary border-tailCall-terminal-border hover:border-tailCall-terminal-green-primary/50",
    primary:
      "bg-tailCall-terminal-bg-secondary text-tailCall-terminal-green-primary hover:bg-tailCall-terminal-bg-primary border-tailCall-terminal-green-primary hover:border-tailCall-terminal-green-primary",
    secondary:
      "bg-tailCall-terminal-bg-primary text-tailCall-terminal-text-secondary hover:bg-tailCall-terminal-bg-secondary border-tailCall-terminal-border hover:border-tailCall-terminal-text-secondary",
  }

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {label}
    </span>
  )
}

export default Chip
