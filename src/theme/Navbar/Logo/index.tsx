import React from "react"
import Link from "@docusaurus/Link"
import {useThemeConfig} from "@docusaurus/theme-common"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function NavbarLogo(): JSX.Element {
  const {
    navbar: {logo = {src: ""}},
  } = useThemeConfig()
  const {siteConfig} = useDocusaurusContext()

  // Force text logo instead of image
  return (
    <Link to="/" className={`navbar__brand`} aria-label={siteConfig.title || "Forge"}>
      <div className="navbar__logo" style={{height: "30px"}}>
        {/* This div maintains spacing and layout similar to having a logo */}
        <img src="/images/home/logo-light.svg" alt="Logo-light" width={141} className="dark:block hidden" />
        <img src="/images/home/logo-dark.svg" alt="Logo-dark" width={141} className="flex dark:hidden" />
      </div>
    </Link>
  )
}
