import React, {useEffect, useState, useCallback} from "react"
import {useBlogPost} from "@docusaurus/plugin-content-blog/client"

const socials: Social[] = [
  {
    id: 1,
    name: "linkedin",
    image: require("@site/static/icons/companies/linkedin-filled.svg").default,
    href: "https://www.linkedin.com/company/forgecodehq",
  },
  {
    id: 2,
    name: "twitter",
    image: require("@site/static/icons/companies/x-filled.svg").default,
    href: "https://x.com/forgecodehq",
  },
]
interface StickySocialShareProps {
  className?: string
}

interface ShareData {
  title: string
  url: string
  excerpt?: string
}

const StickySocialShare: React.FC<StickySocialShareProps> = ({className}) => {
  const {metadata, isBlogPostPage} = useBlogPost()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Only show on blog post pages
  if (!isBlogPostPage) {
    return null
  }

  const shareData: ShareData = {
    title: metadata.title,
    url: typeof window !== "undefined" ? window.location.href : "",
    excerpt: metadata.description || "",
  }

  // Find social media icons from constants
  const twitterIcon = socials.find((social) => social.name === "twitter")
  const linkedinIcon = socials.find((social) => social.name === "linkedin")

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)

    // Show buttons after scrolling past 200px (approximately past header)
    setIsVisible(currentScrollY > 200)
  }, [])

  useEffect(() => {
    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, {passive: true})

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [handleScroll])

  const shareOnTwitter = () => {
    const text = `${shareData.title}${shareData.excerpt ? ` - ${shareData.excerpt}` : ""}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}&via=forgecodehq`
    window.open(twitterUrl, "_blank", "noopener,noreferrer")
  }

  const shareOnLinkedIn = () => {
    const message = `Check out this insightful article: "${shareData.title}"${shareData.excerpt ? ` - ${shareData.excerpt}` : ""}`
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}&summary=${encodeURIComponent(message)}&source=${encodeURIComponent("Forge Code HQ")}`
    window.open(linkedinUrl, "_blank", "noopener,noreferrer")
  }

  // Calculate dynamic positioning based on scroll
  const dynamicTop = Math.max(120, 300 - scrollY * 0.1)

  return (
    <div
      className={`fixed left-2 sm:left-4 lg:left-8 xl:left-16 z-40 transition-all duration-300 ease-in-out flex ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className || ""}`}
      style={{
        top: `${dynamicTop}px`,
        transform: `translateY(${isVisible ? 0 : 16}px)`,
      }}
      role="complementary"
      aria-label="Social sharing buttons"
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        {/* Share label */}
        <div className="text-xs font-medium text-gray-600 mb-1 transform -rotate-90 origin-center whitespace-nowrap hidden sm:block">
          Share
        </div>

        {/* Twitter/X Share Button */}
        {twitterIcon && (
          <button
            onClick={shareOnTwitter}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out border border-gray-200 hover:border-yellow-400 flex items-center justify-center hover:scale-105 hover:bg-yellow-50"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fdea2e20"
              e.currentTarget.style.borderColor = "#fdea2e"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ""
              e.currentTarget.style.borderColor = ""
            }}
            aria-label={`Share "${shareData.title}" on X (Twitter)`}
            title="Share on X"
          >
            <twitterIcon.image className="w-4 h-4 sm:w-5 sm:h-5 group-hover:opacity-80 transition-opacity duration-200" />
            {/* Hover tooltip */}
            <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
              Share on X
            </div>
          </button>
        )}

        {/* LinkedIn Share Button */}
        {linkedinIcon && (
          <button
            onClick={shareOnLinkedIn}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out border border-gray-200 hover:border-yellow-400 flex items-center justify-center hover:scale-105 hover:bg-yellow-50"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fdea2e20"
              e.currentTarget.style.borderColor = "#fdea2e"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ""
              e.currentTarget.style.borderColor = ""
            }}
            aria-label={`Share "${shareData.title}" on LinkedIn`}
            title="Share on LinkedIn"
          >
            <linkedinIcon.image className="w-4 h-4 sm:w-5 sm:h-5 group-hover:opacity-80 transition-opacity duration-200" />
            {/* Hover tooltip */}
            <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
              Share on LinkedIn
            </div>
          </button>
        )}

        {/* Call-to-action message */}
        <div className="mt-2 text-xs text-gray-500 max-w-[120px] leading-tight hidden xl:block">
          Found this helpful? Share it with your network!
        </div>
      </div>
    </div>
  )
}

export default StickySocialShare
