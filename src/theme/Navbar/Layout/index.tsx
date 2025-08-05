import React, {type ComponentProps, type ReactNode} from "react"
import clsx from "clsx"
import {ThemeClassNames, useThemeConfig} from "@docusaurus/theme-common"
import {useHideableNavbar, useNavbarMobileSidebar} from "@docusaurus/theme-common/internal"
import {translate} from "@docusaurus/Translate"
import {useLocation} from "@docusaurus/router"
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar"
import type {Props} from "@theme/Navbar/Layout"

import styles from "./styles.module.css"

function NavbarBackdrop(props: ComponentProps<"div">) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop !bg-[rgb(64,64,64,0.5)]", props.className)}
    />
  )
}

export default function NavbarLayout({children}: Props): ReactNode {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll)
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation",
      })}
      className={clsx(
        ThemeClassNames.layout.navbar.container,
        "navbar",
        "navbar--fixed-top fixed w-full",
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown,
        },
        "bg-tailCall-light-1200 dark:bg-black lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-3xl",
        {
          "bg-[radial-gradient(40.27%_100.55%_at_50%_100%,_rgba(48,237,230,0.5)_0%,_rgba(0,0,0,0)_100%)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[.6px] after:bg-[linear-gradient(90deg,rgba(212,212,212,1)_0%,rgba(0,206,201,1)_62%,rgba(212,212,212,1)_100%)] after:dark:bg-[linear-gradient(90deg,rgba(75,75,75,1)_0%,rgba(0,206,201,1)_62%,rgba(75,75,75,1)_100%)]":
            !isHome,
        },
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  )
}
