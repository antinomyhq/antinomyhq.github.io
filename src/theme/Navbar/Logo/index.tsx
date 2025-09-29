import React from "react"
import Link from "@docusaurus/Link"
import {useBaseUrlUtils} from "@docusaurus/useBaseUrl"
import {useThemeConfig} from "@docusaurus/theme-common"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import type {Props} from "@theme/Navbar/Logo"

export default function NavbarLogo({className, imageClassName}: Props): JSX.Element {
  const {
    navbar: {logo = {src: ""}},
  } = useThemeConfig()
  const {siteConfig} = useDocusaurusContext()
  const {withBaseUrl} = useBaseUrlUtils()

  // Force text logo instead of image
  return (
    <Link to="/" className={`navbar__brand ${className ?? ""}`} aria-label={siteConfig.title || "Forge"}>
      <div className="navbar__logo" style={{height: "30px"}}>
        {/* This div maintains spacing and layout similar to having a logo */}
        <img src="/images/home/logo-dark.svg" alt="logo" />
      </div>
    </Link>
  )
}
