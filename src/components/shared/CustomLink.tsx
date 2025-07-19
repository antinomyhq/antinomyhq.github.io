import React, {MouseEventHandler} from "react"
import Link from "@docusaurus/Link"

interface CustomLinkProps {
  href?: string
  children?: React.ReactNode
  className?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const CustomLink: React.FC<CustomLinkProps> = ({href, children, className = "", external = false, onClick}) => {
  const baseClasses =
    "text-tailCall-lightMode---primary-600 dark:text-tailCall-darkMode---primary-400 hover:text-tailCall-lightMode---primary-700 dark:hover:text-tailCall-darkMode---primary-300 transition-colors duration-300"

  const combinedClasses = `${baseClasses} ${className}`.trim()

  if (external || href?.startsWith("http")) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={combinedClasses} onClick={onClick}>
      {children}
    </Link>
  )
}

export default CustomLink
