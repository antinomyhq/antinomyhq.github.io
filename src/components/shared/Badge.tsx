import React from "react"

interface BadgeProps {
  label: string
}

const Badge = ({label}: BadgeProps): JSX.Element => {
  return (
    <span className="block w-fit px-4 py-2 mb-4 font-kanit text-content-small font-light text-tailCall-border-dark-800 bg-tailCall-border-dark-900 rounded-xl">
      {label}
    </span>
  )
}

export default Badge
