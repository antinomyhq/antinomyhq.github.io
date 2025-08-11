import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import clsx from "clsx"
import {CARDS_DATA} from "@site/src/constants"
import {SpotlightSpan, UserFeedbackCard} from "../components"
import Carousel from "../../shared/Carousel"

gsap.registerPlugin(ScrollTrigger)

const USER_FEEDBACK = CARDS_DATA.map((card) => (
  <UserFeedbackCard
    key={card.title}
    title={card.title}
    imageUrl={card.imageUrl}
    author={card.author}
    designation={card.designation}
  />
))

const WhyForge = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const whyRef = useRef<HTMLDivElement | null>(null)
  const forgeRef = useRef<HTMLDivElement | null>(null)
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
    if (isMobile) {
      // Clean up transform values that might exist from previous renders
      const section = sectionRef.current
      const why = whyRef.current
      const forge = forgeRef.current

      if (!section || !why || !forge) return
      gsap.set([why, forge], {clearProps: "transform"})
      return
    } // Disable all animation logic on mobile

    const section = sectionRef.current
    const cards = cardsRef.current
    const why = whyRef.current
    const forge = forgeRef.current

    if (!section || !cards || !why || !forge) return

    let ctx: gsap.Context | null = null

    function setupScrollTrigger() {
      if (!section || !cards || !why || !forge) return

      // Kill any existing animations
      gsap.killTweensOf([cards, why, forge])
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
      let totalScroll = 0
      const card = cards.querySelector("div")
      const cardWidth = card ? card.offsetWidth : 0
      const gap = 24 // gap-6 = 24px
      const viewportWidth = window.innerWidth
      // Calculate total scroll distance including all extended cards
      const totalCardsWidth = cards.scrollWidth
      // Add extra padding for larger screens
      const extraPadding = viewportWidth >= 1440 ? cardWidth + 150 : cardWidth / 2 + 50
      // Calculate exact space needed for all cards to be visible
      const cardContainer = document.querySelector(".card-container")
      if (cardContainer) {
        totalScroll = Math.max(0, cardContainer.scrollWidth - window.innerWidth + extraPadding)
      }
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
          end: `+=${Math.max(totalScroll, 100)}`,
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

    const handleResize = () => {
      setupScrollTrigger()
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      if (ctx) ctx.revert()
    }
  }, [isMobile])

  const headingClasses = clsx(
    "font-bebas !font-normal",
    "text-display-medium md:text-display-large xl:text-[142px]",
    "xl:leading-[120px]",
    "max-[320px]:text-[50px]",
  )

  const SpotlightText = () => {
    return (
      <div className="flex__column gap-12 px-4 md:px-0">
        <div ref={whyRef} className="flex justify-start">
          <SpotlightSpan showHighlighted text="WHY THEY LOVE" className={clsx(headingClasses, "tracking-normal")} />
        </div>

        <div ref={forgeRef} className="flex justify-start pl-[15%] -mt-16 md:-mt-16 xl:-mt-12">
          <SpotlightSpan text="FORGE CODE" className={clsx(headingClasses, "-tracking-tight")} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex__row__center">
      <div
        ref={sectionRef}
        className="max-w-[1440px] z-0 relative p-0 md:px-20 xl:pl-28 min-h-fit md:min-h-[600px] w-full overflow-hidden flex flex-col justify-center md:pt-20 xl:pt-24"
      >
        <SpotlightText />
        <div className="flex__column gap-2">
          <div className="flex__column gap-4">
            <div
              ref={cardsRef}
              className={`card-container md:flex gap-6 p-3 -mt-12 md:-mt-16 xl:-mt-14 hidden`}
              style={{transform: "translateX(0)", willChange: "transform"}}
            >
              {USER_FEEDBACK}
            </div>
            <Carousel>{USER_FEEDBACK}</Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyForge
