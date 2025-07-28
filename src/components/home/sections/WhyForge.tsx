import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import clsx from "clsx"
import {CARDS_DATA} from "@site/src/constants"
import SpotlightSpan from "../components/SpotlightCursor"
import Card from "../../shared/Card"
import Carousel from "../../shared/Carousel"

gsap.registerPlugin(ScrollTrigger)

const WhyForge = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const whyRef = useRef<HTMLDivElement | null>(null)
  const forgeRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Create array with cloned items for infinite loop
  const extendedCards = [...CARDS_DATA.slice(-1), ...CARDS_DATA, ...CARDS_DATA.slice(0, 1)]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    if (isMobile) return // Disable all animation logic on mobile

    const section = sectionRef.current
    const cards = cardsRef.current
    const why = whyRef.current
    const forge = forgeRef.current

    if (!section || !cards || !why || !forge) return

    let ctx: gsap.Context | null = null

    function getViewportHeight() {
      return window.visualViewport?.height || window.innerHeight
    }

    function setupScrollTrigger() {
      if (!section || !cards || !why || !forge) return

      // Kill any existing animations
      gsap.killTweensOf([cards, why, forge])
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })

      const card = cards.querySelector("div")
      const cardWidth = card ? card.offsetWidth : 0
      const gap = 24 // gap-6 = 24px
      const viewportWidth = window.innerWidth
      // Calculate total scroll distance including all extended cards
      const totalCardsWidth = cards.scrollWidth
      // Add extra padding for larger screens
      const extraPadding = viewportWidth >= 1440 ? cardWidth / 2 : cardWidth / 2
      // Calculate exact space needed for all cards to be visible
      const totalScroll = totalCardsWidth - viewportWidth + (cardWidth + gap) + extraPadding

      ctx = gsap.context(() => {
        // Phase 1: Text fly in from left
        gsap.set([why, forge], {x: -viewportWidth})
        gsap.to([why, forge], {
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        })

        // Phase 2: Cards slide in from right
        gsap.set(cards, {x: viewportWidth})
        gsap.to(cards, {
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        })

        // Phase 3: Pin section and horizontal scroll with adjusted end point
        ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            // Smooth out the scrolling motion
            const progress = self.progress
            const xOffset = -progress * totalScroll
            gsap.set(cards, {x: Math.min(0, xOffset)})
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
      if (ctx) ctx.revert()
    }
  }, [isMobile])

  const headingClasses = clsx(
    "font-bebas !font-normal",
    "text-display-medium md:text-display-large xl:text-[142px]",
    "xl:leading-[120px]",
    "max-[320px]:text-[50px]",
  )

  return (
    <div className="flex justify-center">
      <div
        ref={sectionRef}
        className="max-w-[1440px] z-0 relative p-0 md:px-20 xl:pl-28 min-h-fit md:min-h-[600px] w-full overflow-hidden flex flex-col justify-center md:pt-20 xl:pt-24"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-12 px-4 md:px-0">
            <div ref={whyRef} className="flex justify-start">
              <SpotlightSpan showHighlighted text="WHY THEY LOVE" className={clsx(headingClasses, "tracking-normal")} />
            </div>

            <div ref={forgeRef} className="flex justify-start pl-[15%] -mt-16 md:-mt-16 xl:-mt-12">
              <SpotlightSpan text="FORGE CODE" className={clsx(headingClasses, "-tracking-tight")} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              ref={cardsRef}
              className={`md:flex gap-6 p-3 -mt-12 md:-mt-16 xl:-mt-14 hidden`}
              style={{transform: "translateX(0)", willChange: "transform"}}
            >
              {CARDS_DATA.map((card, idx) => {
                return (
                  <Card key={card.title}>
                    <div
                      className={`px-8 py-8 rounded-[12px] h-[100%] w-full md:w-[380px] border-[11px] border-tailCall-lightMode---neutral-50 dark:border-[#181D27] border-solid bg-transparent shadow-[0px_0px_4px_0px_#088C8C] dark:shadow-[0px_0px_4px_0px_#30EDE6] hover:cursor-pointer hover:bg-custom-radial-light hover:dark:bg-custom-radial transition-all duration-100 ease-in overflow-hidden`}
                    >
                      <div className="flex flex-col justify-between h-full gap-3">
                        <div className="flex flex-col gap-3">
                          <img
                            src={card.imageUrl}
                            alt={`feedback-${card.title}`}
                            height={80}
                            width={80}
                            className="grayscale"
                          />
                          <p className="text-tailCall-darkMode---neutral-700 dark:text-white font-kanit text-title-small font-light break-words text-left">
                            {card.title}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal">
                            {card.author}
                          </span>
                          <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal text-left">
                            {card.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
            <Carousel>
              {CARDS_DATA.map((card, idx) => (
                <Card key={idx}>
                  <div className="px-8 py-8 h-[100%] rounded-[12px] w-full md:w-[380px] border-[11px] border-tailCall-lightMode---neutral-50 dark:border-[#181D27] border-solid bg-transparent shadow-[0px_0px_4px_0px_#088C8C] dark:shadow-[0px_0px_4px_0px_#30EDE6] hover:cursor-pointer hover:bg-custom-radial-light hover:dark:bg-custom-radial transition-all duration-500 overflow-hidden ease-in">
                    <div className="flex flex-col justify-between h-full gap-3">
                      <div className="flex flex-col gap-3">
                        <img
                          src={card.imageUrl}
                          alt={`Feedback-${card.title}`}
                          height={80}
                          width={80}
                          className="grayscale"
                        />
                        <p className="text-tailCall-darkMode---neutral-700 dark:text-white font-kanit text-title-small font-light whitespace-normal break-words text-left">
                          {card.title}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal">
                          {card.author}
                        </span>
                        <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal text-left">
                          {card.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyForge
