import React, {useEffect} from "react"
import {useLocation} from "@docusaurus/router"
import NewNavbar from "@site/src/components/shared/Navbar"

export default function Navbar(props: any): JSX.Element {
  const location = useLocation()

  // Check if current page is a blog page
  const pathSegments = location.pathname.split("/").filter(Boolean)
  const isBlogPage = pathSegments[0] === "blog"

  // Check if announcement banner is active
  const targetDate = new Date("2025-05-30T20:00:00-08:00")
  const currentDate = new Date()
  const hasAnnouncement = currentDate < targetDate

  // Calculate navbar classes for sticky behavior on blog pages

  // Override Docusaurus hideOnScroll behavior ONLY for blog pages
  useEffect(() => {
    const navbarElement = document.querySelector(".navbar")
    if (navbarElement) {
      if (isBlogPage) {
        // Force the navbar to stay visible on blog pages
        navbarElement.style.setProperty("transform", "translateY(0px)", "important")
        navbarElement.style.setProperty("transition", "none", "important")

        // Also prevent the navbar from getting the "navbarHidden" class
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
              const target = mutation.target as HTMLElement
              if (target.classList.contains("navbarHidden")) {
                target.classList.remove("navbarHidden")
                target.style.setProperty("transform", "translateY(0px)", "important")
              }
            }
          })
        })

        observer.observe(navbarElement, {
          attributes: true,
          attributeFilter: ["class"],
        })

        return () => {
          observer.disconnect()
        }
      } else {
        // Reset styles for non-blog pages to allow normal hideOnScroll behavior
        navbarElement.style.removeProperty("transform")
        navbarElement.style.removeProperty("transition")
      }
    }
  }, [isBlogPage, location.pathname])

  return <div>{location.pathname !== "/" ? <NewNavbar /> : null}</div>
}
