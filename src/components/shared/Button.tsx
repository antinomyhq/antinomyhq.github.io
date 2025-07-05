import React from "react"

type variant = "transparent" | "keyboard" | "navlink"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  variant: variant
}

const Button = ({children, onClick, variant}: ButtonProps): JSX.Element => {
  const buttonVariants = {
    transparent: "bg-transparent",
    keyboard: "px-9 py-9 bg-tailCall-gray border-r border-r-tailCall-lightGray w-full",
    navlink: "font-kanit bg-transparent text-[#30EDE6] font-normal text-title-tiny cursor-pointer",
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer border-0 ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
