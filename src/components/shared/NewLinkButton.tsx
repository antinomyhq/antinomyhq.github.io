import Link from "@docusaurus/Link"
import {Theme} from "@site/src/constants"
import clsx from "clsx"
import React from "react"
import {SVGProps} from "react"

type LinkButtonProps = {
  title?: string
  titleClassName?: string
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>
  theme: Theme
  onClick?: () => void | Promise<void>
  href?: string
  width?: "small" | "medium" | "large" | "auto" | "full"
  disabled?: boolean
}

const NewLinkButton = ({
  title,
  titleClassName,
  Icon,
  theme,
  onClick,
  href,
  width = "auto",
  disabled,
}: LinkButtonProps): JSX.Element => {
  const setButtonWidth = () => {
    switch (width) {
      case "small":
        return "w-[228px]"
      case "medium":
        return "w-[300px]"
      case "large":
        return "w-[500px]"
      case "full":
        return "w-full"
      case "auto":
        return "w-fit"
      default:
        return "w-fit"
    }
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className={clsx(
        `
        group relative
        disabled:opacity-25
        disabled:cursor-not-allowed
        flex items-center justify-center
        gap-x-2
        rounded-[10px]
        h-10 sm:h-8
        px-4 py-4 sm:px-6 lg:px-8 sm:py-5 lg:py-6
        cursor-pointer
        transition-all duration-300
        text-sm sm:text-base
        hover:no-underline
        text-content-tiny
        border border-solid border-tailCall-lightMode---primary-700 dark:border-tailCall-lightMode---primary-400
        text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400 group-hover:text-white group-hover:dark:text-black
        bg-transparent group-hover:bg-tailCall-lightMode---primary-700 group-hover:dark:bg-tailCall-lightMode---primary-400 
        `,
        setButtonWidth(),
        disabled ? "cursor-not-allowed opacity-20" : "",
      )}
    >
      {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 z-[1]" />}

      {title && <span className={clsx("z-[1]", titleClassName)}>{title}</span>}
    </Link>
  )
}

export default NewLinkButton
