import React from "react"
import {analyticsHandler} from "@site/src/utils"

export const FloatingCta = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href="https://app.forgecode.dev/app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 rounded-lg bg-black px-6 py-3 text-sm font-bold text-tailCall-white shadow-xl transition-all duration-250 hover:text-white z-50 border border-tailCall-border-dark-100"
      onClick={() => analyticsHandler("Floating CTA", "Click", "Free Forge Code")}
    >
      Claim Free Access
    </a>
  )
}
