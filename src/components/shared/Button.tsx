import React from "react"
import clsx from "clsx" // optional, but helpful for cleaner class management

const BUTTON_VARIANTS = {
  transparent: "border-none bg-transparent",
  keyboard: "px-9 py-9 bg-tailCall-gray border-r border-r-tailCall-lightGray w-full",
  navlink:
    "font-kanit bg-transparent text-[#30EDE6] dark:text-[#088C8C] font-normal text-title-tiny cursor-pointer hover:text-shadow-glow hover:text-shadow transition-all duration-300",
} as const

type Variant = keyof typeof BUTTON_VARIANTS

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant: Variant
  className?: string
}

const Button = ({children, onClick, variant, className}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={clsx("flex items-center justify-center cursor-pointer border-0", BUTTON_VARIANTS[variant], className)}
    >
      {children}
    </button>
  )
}

export default Button
