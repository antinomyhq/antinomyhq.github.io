import Link from "@docusaurus/Link"
import {Theme} from "@site/src/constants"
import clsx from "clsx"
import React from "react"
import {SVGProps} from "react"

type LinkButtonProps = {
  title?: string
  titleClassName?: string
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>> // Define the type of Icon prop
  theme: Theme
  onClick?: () => void | Promise<void>
  href?: string
  width?: "small" | "medium" | "large" | "auto" | "full"
  disabled?: boolean
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  titleClassName,
  Icon,
  theme,
  onClick,
  href,
  width = "auto",
  disabled,
}) => {
  // Generate button widths as tailwind is not able to handle dynamic widths
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

  // Generate classes based on the provided theme - Terminal themed
  const generateThemeClasses = () => {
    const themes = {
      [Theme.Light]: {
        classes:
          "border border-tailCall-terminal-border text-tailCall-terminal-text-primary bg-transparent hover:text-tailCall-terminal-green-primary hover:border-tailCall-terminal-green-primary/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-200",
        gridClasses: "",
      },
      [Theme.Dark]: {
        classes:
          "border border-tailCall-terminal-green-primary text-tailCall-terminal-text-primary bg-tailCall-terminal-bg-secondary hover:bg-tailCall-terminal-bg-tertiary hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] terminal-glow transition-all duration-200",
        gridClasses: "",
      },
      [Theme.Gray]: {
        classes:
          "border border-tailCall-terminal-border text-tailCall-terminal-text-secondary bg-transparent hover:text-tailCall-terminal-green-primary hover:border-tailCall-terminal-green-primary/50 transition-all duration-200",
        gridClasses: "hidden",
      },
      [Theme.Tailcall]: {
        classes:
          "bg-tailCall-terminal-bg-primary border border-tailCall-terminal-green-primary text-tailCall-terminal-green-primary hover:bg-tailCall-terminal-bg-secondary hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] terminal-glow transition-all duration-200",
        gridClasses: "",
      },
      [Theme.Outlined]: {
        classes:
          "dash-outline text-tailCall-terminal-text-primary hover:text-tailCall-terminal-green-primary hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] terminal-button-glow transition-all duration-200",
        gridClasses: "",
      },
    }

    return themes[theme] || {classes: "", styles: "", gridClasses: ""}
  }

  const renderBackgroundElements = (buttonTheme: Theme) => {
    if (buttonTheme === Theme.Dark || buttonTheme === Theme.Gray || buttonTheme === Theme.Outlined) {
      return (
        <>
          {/* Dark theme background */}
          <div
            className={`lg:block absolute inset-0 w-full ${buttonTheme === Theme.Outlined ? "bg-gray-900" : "bg-tailCall-dark-500"} group-hover:lg:scale-x-[0.98] group-hover:lg:scale-y-[0.95] transform transition-all ease-out duration-250`}
          />
          {!disabled && (
            // Dark theme grid background (only if not disabled)
            <div className="hidden lg:block button-grid-bg-section h-full w-full scale-90 opacity-0 group-hover:scale-[0.98] group-hover:opacity-100 transform transition-all ease-out duration-250" />
          )}
        </>
      )
    } else if (buttonTheme === Theme.Light && !disabled) {
      // Light theme grid background (only if not disabled)
      return (
        <div className="hidden lg:block button-grid-bg-section-dark h-full w-full scale-90 opacity-0 group-hover:scale-[1] group-hover:opacity-100 transform transition-all ease-out duration-250" />
      )
    } else {
      // If no matching theme, return null
      return null
    }
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`
      group relative disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center gap-x-SPACE_03 hover:no-underline h-12 sm:h-16 text-content-small font-bold sm:text-title-small cursor-pointer px-SPACE_06 py-SPACE_03 sm:px-SPACE_08 lg:px-SPACE_10 sm:py-SPACE_04 lg:py-SPACE_05
      ${setButtonWidth()} 
      ${generateThemeClasses().classes ?? ""} 
      ${disabled ? "cursor-not-allowed opacity-20" : ""} `}
    >
      {/* Conditionally render background elements based on theme and disabled state */}
      {renderBackgroundElements(theme)}

      {/* Render Icon if provided */}
      {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 text-tailCall-white z-[1]" />}

      {/* Render title if provided */}
      {title && <span className={clsx("z-20", titleClassName)}> {title}</span>}
    </Link>
  )
}

export default LinkButton
