import React from "react"
import Link from "@docusaurus/Link"

// Define props types for the LoginButton component
type LoginButtonProps = {
  className?: string
  mobile?: boolean
}

// Export the LoginButton component
const LoginButton = ({className = "", mobile = false}: LoginButtonProps): JSX.Element => {
  const linkClass = mobile ? "menu__link" : "navbar__item navbar__link"

  return (
    <Link to="https://app.forgecode.dev/app" target="_blank" className={`${linkClass} ${className} hide-chevron`}>
      Login
    </Link>
  )
}

export default LoginButton
