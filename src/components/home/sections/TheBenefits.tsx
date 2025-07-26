import React, {useState, useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import {BENEFITS} from "@site/src/constants"
import clsx from "clsx"
import SpotlightSpan from "../components/SpotlightCursor"
import Carousel from "../../shared/Carousel"
import BenefitsCard from "../../shared/BenefitsCard"

gsap.registerPlugin(ScrollTrigger)
const VISIBLE_HEIGHT = 0.8 // 60% of viewport height
const HEADING_HEIGHT = 120

const TheBenefits = (): JSX.Element => {
  const [focusedIdx, setFocusedIdx] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    // Only run animation if not mobile and isMobile is known
    if (isMobile === undefined) return
    if (isMobile) {
      // Clean up all ScrollTriggers and transforms on mobile
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      if (cardsRef.current) {
        gsap.set(cardsRef.current, {clearProps: "all"})
      }
      if (sectionRef.current) {
        sectionRef.current.style.height = ""
      }
      return
    }
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return
    function getViewportHeight() {
      return window.visualViewport?.height || window.innerHeight
    }
    function setupScrollTrigger() {
      if (!section || !cards) return
      const isMobile = window.innerWidth < 768
      const viewportHeight = getViewportHeight()
      const visibleHeight = isMobile ? viewportHeight * 0.8 : viewportHeight * 0.6
      const cardHeight = cards.children[0]?.clientHeight || 1
      const gap = 32
      const focusPoint = (viewportHeight - visibleHeight) / 2 + visibleHeight * 0.48
      const lastCardOffset = focusPoint - visibleHeight / 2 + cardHeight / 2
      const extraScroll = isMobile ? visibleHeight * 0.8 : 0
      const totalScroll = cards.scrollHeight - visibleHeight + lastCardOffset + extraScroll
      section.style.height = `${visibleHeight + totalScroll}px`
      const ctx = gsap.context(() => {
        gsap.to(cards, {
          y: `-${totalScroll}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const y = gsap.getProperty(cards, "y") as number
              let minDist = Infinity
              let focusIdx = 0
              cardRefs.current.forEach((el, idx) => {
                if (!el) return
                const rect = el.getBoundingClientRect()
                const cardCenter = rect.top + rect.height / 2
                const dist = Math.abs(cardCenter - focusPoint)
                if (dist < minDist) {
                  minDist = dist
                  focusIdx = idx
                }
              })
              setFocusedIdx(focusIdx)
            },
            onLeave: () => {
              if (section) section.style.height = "115vh"
            },
            onLeaveBack: () => {
              if (section) section.style.height = "115vh"
            },
          },
        })
        gsap.to(".circle-logo", {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: true,
          },
        })
      }, section)
    }
    setupScrollTrigger()
    window.addEventListener("resize", setupScrollTrigger)
    window.addEventListener("orientationchange", setupScrollTrigger)
    window.addEventListener("resize", () => ScrollTrigger.refresh())
    window.addEventListener("orientationchange", () => ScrollTrigger.refresh())
    return () => {
      window.removeEventListener("resize", setupScrollTrigger)
      window.removeEventListener("orientationchange", setupScrollTrigger)
      window.removeEventListener("resize", () => ScrollTrigger.refresh())
      window.removeEventListener("orientationchange", () => ScrollTrigger.refresh())
    }
  }, [isMobile])

  const spotlightHeadingClasses = clsx(
    "font-bebas font-normal md:font-normal",
    "text-display-medium md:text-display-large xl:text-[142px]",
    "xl:leading-[133px]",
    "-tracking-normal",
  )

  return (
    <div className="flex justify-center z-0">
      <div
        ref={sectionRef}
        className="xl:max-w-[1440px] relative w-full h-[110vh] md:h-[120vh] flex flex-col pt-10 z-10 xl:pt-24 overflow-hidden mb-0 md:mb-64"
      >
        <div
          className="sticky top-0 flex flex-col items-center bg-[#F1F1F1] dark:bg-black"
          style={{
            height: `calc(${VISIBLE_HEIGHT * 100}vh + ${HEADING_HEIGHT}px)`,
            overflow: "visible",
            zIndex: 2,
          }}
        >
          <div className="relative flex items-center justify-center xl:-top-[75px]">
            <img
              src="/images/home/Black-Circle.svg"
              alt="ellipse"
              className={clsx("circle-logo", "w-[75%] h-screen dark:block hidden")}
            />
            <img
              src="/images/home/Light-Circle.svg"
              alt="ellipse"
              className={clsx("circle-logo", "w-[75%] h-screen block dark:hidden")}
            />
            <img
              src="/images/home/code-logo.svg"
              alt="code"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block dark:hidden w-[20%] md:w-auto"
            />
            <img
              src="/images/home/code-logo-dark.svg"
              alt="code"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:block hidden w-[20%] md:w-auto"
            />
          </div>
          <SpotlightSpan
            showHighlighted
            text="THE"
            className={clsx(spotlightHeadingClasses, "absolute top-20 left-8 xl:left-28")}
          />
          <SpotlightSpan
            text="BENEFITS"
            className={clsx(
              spotlightHeadingClasses,
              "absolute top-36 md:top-[10.5rem] md:left-28 xl:top-52 left-24 xl:left-60",
            )}
          />
          <div
            className={clsx(
              "absolute md:left-auto md:right-10 xl:left-[850px] w-full md:w-auto lg:right-20 top-[500px] flex flex-col md:items-center",
              "max-md:top-[52%]",
            )}
            style={{height: "100%", overflow: "visible"}} // set visible area
          >
            {isMobile ? (
              <Carousel>
                {BENEFITS.map(({title, description, imageUrl = "", smallText}) => (
                  <BenefitsCard title={title} description={description} imageUrl={imageUrl} small={smallText} />
                ))}
              </Carousel>
            ) : (
              <div ref={cardsRef} className="hidden md:flex flex-col gap-8">
                {BENEFITS.map(({title, description, imageUrl = "", smallText}, idx) => (
                  <div
                    key={title}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    className="transition-all duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
                    style={{
                      filter: idx === focusedIdx ? "none" : "blur(6px)",
                      opacity: 1,
                      zIndex: idx === focusedIdx ? 10 : 1,
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <BenefitsCard title={title} description={description} imageUrl={imageUrl} small={smallText} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheBenefits
