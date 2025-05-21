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
      <div className="navbar__logo">
        {/* This div maintains spacing and layout similar to having a logo */}
        <div style={{height: "24px", width: "1px"}} />
      </div>
      <b
        className="navbar__title text--truncate"
        style={{fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-0.02em"}}
      >
        {siteConfig.title}
      </b>
    </Link>
  )
}
