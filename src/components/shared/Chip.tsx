import React from "react"

interface ChipProps {
  label: string
  onClick?: () => void
  className?: string
  variant?: "default" | "primary" | "secondary"
}

const Chip: React.FC<ChipProps> = ({
  label,
  onClick,
  className = "",
  variant = "default",
}) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors"
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      } : undefined}
    >
      {label}
    </span>
  )
}

export default Chip
