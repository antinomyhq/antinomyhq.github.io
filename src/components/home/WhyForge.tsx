import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import Card from "../shared/Card"
import SpotlightSpan from "./SpotlightCursor"
import Carousel from "../shared/Carousel"

gsap.registerPlugin(ScrollTrigger)

const cardsData = [
  {
    imageUrl: "/images/home/people1.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
  {
    imageUrl: "/images/home/people2.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
  {
    imageUrl: "/images/home/people3.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
  {
    imageUrl: "/images/home/people4.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
  {
    imageUrl: "/images/home/people1.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
  {
    imageUrl: "/images/home/people2.png",
    title: "Forge feels like pair programming with someone who actually understands my stack.",
    author: "Raj, Full-Stack Developer",
  },
]

const WhyForge = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const whyRef = useRef<HTMLDivElement | null>(null)
  const forgeRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Create array with cloned items for infinite loop
  const extendedCards = [...cardsData.slice(-1), ...cardsData, ...cardsData.slice(0, 1)]

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
      const extraPadding = viewportWidth >= 1440 ? cardWidth : cardWidth / 2
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

  return (
    <div className="flex justify-center">
      <div
        ref={sectionRef}
        className="max-w-[1440px] z-0 relative p-0 md:px-20 xl:pl-28 min-h-fit md:min-h-[600px] w-full overflow-hidden flex flex-col justify-center md:pt-20 xl:pt-24"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-12 px-4 md:px-0">
            <div ref={whyRef} className="flex justify-start">
              <SpotlightSpan
                showHighlighted
                text="WHY THEY LOVE"
                className="font-bebas md:font-normal text-display-medium md:text-display-large xl:text-[142px] font-normal tracking-normal xl:leading-[120px]"
              />
            </div>
            <div ref={forgeRef} className="flex justify-start pl-[15%] -mt-12 md:-mt-16 xl:-mt-12">
              <SpotlightSpan
                text="FORGE CODE"
                className="font-bebas md:font-normal text-display-medium md:text-display-large xl:text-[142px] font-normal -tracking-tight xl:leading-[120px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              ref={cardsRef}
              className={`md:flex gap-6 p-3 -mt-12 md:-mt-16 xl:-mt-8 hidden`}
              style={{transform: "translateX(0)", willChange: "transform"}}
            >
              {extendedCards.map((card, idx) => {
                return (
                  <Card key={card.title}>
                    <div
                      className={`px-8 py-8 rounded-xl w-full md:w-[380px] border-[11px] border-tailCall-lightMode---neutral-50 dark:border-[#181D27] border-solid bg-transparent shadow-[0px_0px_4px_0px_#088C8C] dark:shadow-[0px_0px_4px_0px_#30EDE6] hover:cursor-pointer hover:bg-custom-radial-light hover:dark:bg-custom-radial hover:transition-colors hover:duration-500 overflow-hidden`}
                    >
                      <div className="flex flex-col gap-3">
                        <img src={card.imageUrl} alt="Feedback" height={80} width={80} className="grayscale" />
                        <span className="text-tailCall-darkMode---neutral-700 dark:text-white font-kanit text-title-small font-light whitespace-normal break-words">
                          {card.title}
                        </span>
                        <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal">
                          - {card.author}
                        </span>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
            <Carousel>
              {cardsData.map((card, idx) => (
                <Card key={idx}>
                  <div className="px-8 py-8 rounded-xl w-full md:w-[380px] border-[11px] border-tailCall-lightMode---neutral-50 dark:border-[#181D27] border-solid bg-transparent shadow-[0px_0px_4px_0px_#088C8C] dark:shadow-[0px_0px_4px_0px_#30EDE6] hover:cursor-pointer hover:bg-custom-radial-light hover:dark:bg-custom-radial hover:transition-colors hover:duration-500 overflow-hidden">
                    <div className="flex flex-col gap-3">
                      <img src={card.imageUrl} alt="Feedback" height={80} width={80} className="grayscale" />
                      <span className="text-tailCall-darkMode---neutral-700 dark:text-white font-kanit text-title-small font-light whitespace-normal break-words">
                        {card.title}
                      </span>
                      <span className="text-tailCall-darkMode---neutral-500 dark:text-white dark:opacity-50 text-title-tiny font-normal">
                        - {card.author}
                      </span>
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
