import React, {useEffect, useState} from "react"
import Button from "./Button"
import {NavbarItems} from "@site/src/constants"
import {Menu, X} from "lucide-react"
import Link from "@docusaurus/Link"
import {useLocation} from "@docusaurus/router"
import {useWindowSize} from "@docusaurus/theme-common"
import ThemeToggle from "../home/ThemeToggle"

const Logo = () => (
  <Link href="/" className="flex items-center justify-center">
    <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="dark:block hidden" />
    <img src="/images/home/logo-dark.svg" alt="Logo" width={141} className="flex dark:hidden" />
  </Link>
)

const NavLink = ({href, label}: {href: string; label: string}) => {
  const {pathname} = useLocation()
  const isActive = `${href}/` === pathname || href === pathname

  const baseClass = "no-underline hover:no-underline transition-opacity duration-500 cursor-pointer"
  const activeClass =
    "font-medium text-tailCall-lightMode---primary-600 dark:text-tailCall-darkMode---primary-400 opacity-100"
  const inactiveClass =
    "text-tailCall-darkMode---neutral-400 dark:text-tailCall-darkMode---neutral-500 hover:opacity-100"

  return (
    <Link href={href} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
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

  const isHome = location.pathname === "/"

  return (
    <nav
      className={`fixed top-0 left-0 z-[999] backdrop-blur-md w-full p-5 ${
        !isHome
          ? "bg-[radial-gradient(40.27%_100.55%_at_50%_100%,_rgba(48,237,230,0.5)_0%,_rgba(0,0,0,0)_100%)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[.6px] after:bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(0,206,201,1)_62%,rgba(212,212,212,1)_100%)]"
          : ""
      }`}
    >
      {showNavbar ? (
        <div className="h-screen bg-[#F1F1F1] dark:bg-black z-[998] flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <Button
              variant="transparent"
              onClick={() => setShowNavbar(false)}
              className="!bg-tailCall-cyan rounded p-2 text-white"
            >
              <X className="text-black" />
            </Button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-5 font-kanit text-white text-[20px] list-none">
            <li>
              <NavLink href="/" label="Home" />
            </li>
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <NavLink href={item.link} label={item.name} />
              </li>
            ))}
          </ul>

          {/* Spotlight Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(505.31%_54.98%_at_50%_151.87%,rgba(48,237,230,0.5)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          {/* Logo + Desktop Nav */}
          <div className="flex gap-5 items-center">
            <Logo />
            <ul className="m-0 hidden md:flex font-kanit list-none items-center gap-SPACE_07 text-white font-normal text-title-small">
              {NavbarItems.map((item) => (
                <NavLink key={item.name} href={item.link} label={item.name} />
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="navlink" onClick={() => window.open("https://app.forgecode.dev/app/", "_blank")}>
                <span className="text-tailCall-lightMode---primary-600 dark:text-tailCall-darkMode---primary-400">
                  Signup
                </span>
              </Button>
              <ThemeToggle />
            </div>
            <Button
              variant="transparent"
              onClick={() => setShowNavbar(!showNavbar)}
              className="md:hidden !bg-tailCall-cyan rounded p-2"
            >
              <Menu className="text-black" />
            </Button>
            <div className="flex md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NewNavbar
