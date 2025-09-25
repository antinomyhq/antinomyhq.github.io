import React from "react"
import clsx from "clsx"

type PrimaryButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "solid" | "outline" | "ghost"
  className?: string
}

const PrimaryButton = ({children, onClick, variant = "solid", className = ""}: PrimaryButtonProps): JSX.Element => {
  const baseStyles = `
    rounded-md
    px-1 py-2 md:px-8 md:py-3 min-w-32
    cursor-pointer
    transition-all duration-300
    text-[16px]
    font-kanit
    border border-solid
    border-tailCall-lightMode---primary-700 dark:border-tailCall-lightMode---primary-400
  `

  const solidStyles = `
    text-white dark:text-black
    bg-tailCall-lightMode---primary-700 dark:bg-tailCall-lightMode---primary-400
  `

  const outlineStyles = `
    text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400
    bg-transparent
  `

  const ghostStyles = `
  text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400
  bg-transparent
  border-none
`

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        {
          solid: solidStyles,
          outline: outlineStyles,
          ghost: ghostStyles,
        }[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
