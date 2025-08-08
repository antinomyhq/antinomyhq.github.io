import React from "react"
import clsx from "clsx"
import {common_styles} from "@site/src/constants/styles"

type PrimaryButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "solid" | "outline" | "ghost"
  className?: string
}

const PrimaryButton = ({children, onClick, variant = "solid", className = ""}: PrimaryButtonProps): JSX.Element => {
  const {theme_border, theme_text} = common_styles
  const baseStyles = `
    rounded-md
    px-1 py-2 md:px-8 md:py-3 min-w-32
    cursor-pointer
    transition-all duration-300
    text-[16px]
    font-kanit
    border border-solid
    ${theme_border}
  `

  const solidStyles = `
    text-white dark:text-black
    bg-tailCall-lightMode---primary-700 dark:bg-tailCall-lightMode---primary-400
  `

  const outlineStyles = `
    ${theme_text}
    bg-transparent
  `

  const ghostStyles = `
  ${theme_text}
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
