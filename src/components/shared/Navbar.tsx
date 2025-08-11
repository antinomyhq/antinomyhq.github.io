import React, {useEffect, useMemo, useState} from "react"
import Button from "./Button"
import {NavbarItems} from "@site/src/constants"
import {Menu, X} from "lucide-react"
import Link from "@docusaurus/Link"
import {useLocation} from "@docusaurus/router"
import {useWindowSize} from "@docusaurus/theme-common"
import ThemeToggle from "../home/components/ThemeToggle"
import {analyticsHandler} from "@site/src/utils"
import SearchBar from "@site/src/theme/SearchBar"
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle"
import {common_styles} from "@site/src/constants/styles"

const Logo = () => (
  <Link href="/" className="flex items-center justify-center">
    <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="dark:block hidden" />
    <img src="/images/home/logo-dark.svg" alt="Logo" width={141} className="flex dark:hidden" />
  </Link>
)

const NavLink = ({href, label}: {href: string; label: string}) => {
  const {pathname} = useLocation()

  const isActive = useMemo(() => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }, [pathname, href])

  const baseClass =
    "no-underline hover:no-underline transition-opacity duration-500 cursor-pointer hover:dark:text-tailCall-darkMode---primary-400 hover:text-tailCall-darkMode---primary-600"
  const activeClass = `font-medium ${common_styles.theme_text} opacity-100`
  const inactiveClass =
    "text-tailCall-darkMode---neutral-600 dark:text-tailCall-darkMode---neutral-300 hover:opacity-100"

  return (
    <Link
      href={href}
      onClick={() => analyticsHandler("Home Page", "Click", label)}
      className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
    >
      {label}
    </Link>
  )
}

const NewNavbar = (): JSX.Element => {
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useLocation()
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize === "desktop") {
      setShowNavbar(false)
    }
  }, [windowSize])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showNavbar])

  const isHome = location.pathname === "/"

  const handleSignUp = () => {
    analyticsHandler("Home Page", "Click", "Sign Up")
    window.open("https://app.forgecode.dev/app/", "_blank")
  }

  const handeNavbarClose = () => {
    analyticsHandler("Home Page", "Click", "Close Navbar")
    setShowNavbar(false)
  }

  const handeNavbarToggle = () => {
    analyticsHandler("Home Page", "Click", "Menu")
    setShowNavbar(!showNavbar)
  }

  return (
    <nav
      className={`fixed top-0 left-0 backdrop-blur-3xl w-full p-5 ${
        !isHome
          ? "bg-[radial-gradient(40.27%_100.55%_at_50%_100%,_rgba(48,237,230,0.5)_0%,_rgba(0,0,0,0)_100%)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[.6px] after:bg-[linear-gradient(90deg,rgba(212,212,212,1)_0%,rgba(0,206,201,1)_62%,rgba(212,212,212,1)_100%)] after:dark:bg-[linear-gradient(90deg,rgba(75,75,75,1)_0%,rgba(0,206,201,1)_62%,rgba(75,75,75,1)_100%)]"
          : ""
      }`}
    >
      {showNavbar ? (
        <div className="fixed inset-0 w-screen h-screen bg-[#F1F1F1] dark:bg-black z-[998] flex flex-col overflow-hidden">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8 p-5 flex-shrink-0">
            <Logo />
            <Button
              variant="transparent"
              onClick={handeNavbarClose}
              className={`rounded p-2 text-white ${common_styles.theme_bg_important}`}
            >
              <X className="text-white dark:text-black" />
            </Button>
          </div>

          {/* Mobile Nav Links - Scrollable container */}
          <div className="flex-1 overflow-y-auto px-5 pb-5">
            <ul className="flex flex-col gap-5 text-white text-[20px] list-none">
              {NavbarItems.map((item) => (
                <li key={item.name}>
                  <NavLink href={item.link} label={item.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* Spotlight Glow - Fixed at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(505.31%_54.98%_at_50%_151.87%,rgba(48,237,230,0.5)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          {/* Logo + Desktop Nav */}
          <div className="flex gap-5 items-center">
            <Logo />
            <ul className="m-0 hidden lg:flex list-none items-center gap-SPACE_07 text-white font-normal text-title-small">
              {NavbarItems.map((item) => (
                <NavLink key={item.name} href={item.link} label={item.name} />
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-0 lg:gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="navlink" onClick={handleSignUp}>
                <span className="text-tailCall-lightMode---primary-700 dark:text-tailCall-darkMode---primary-400">
                  Signup
                </span>
              </Button>
              <SearchBar />
              <ThemeToggle />
            </div>
            <div className="flex lg:hidden">
              <SearchBar />
            </div>
            <div className="flex lg:hidden">
              <ThemeToggle />
            </div>
            <NavbarMobileSidebarToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NewNavbar
