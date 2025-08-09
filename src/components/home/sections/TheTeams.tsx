import React, {useEffect, useRef, useState} from "react"
import TechCard from "../shared/TechCard"
import {TechDetails, TECHS} from "@site/src/constants"
import SpotlightSpan from "./SpotlightCursor"
import {ChevronDown, ChevronUp} from "lucide-react"

import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const AUTO_SCROLL_INTERVAL = 2000 // 2 seconds

const TheTeams = (): JSX.Element => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardsContainerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Scroll the active card into view within the cards container (without scrolling the page)
  useEffect(() => {
    if (window.innerWidth < 1024) return

    const cards = cardsContainerRef.current
    const section = sectionRef.current
    if (!cards || !section) return

    // 1. Calculate how much scroll is needed so the last card can reach the center
    const cardElements = cardRefs.current.filter(Boolean)
    const lastCard = cardElements[cardElements.length - 1]
    let totalScroll = 0
    const visibleHeight = window.innerHeight * 0.7 // match Benefits section logic
    if (lastCard) {
      // Distance from top of cards to center of last card
      const lastCardCenter = lastCard.offsetTop + lastCard.offsetHeight / 2
      // Focus point is center of visible area (sticky container)
      const focusPoint = visibleHeight / 1.45
      // The scroll needed to bring last card's center to focus point
      totalScroll = lastCardCenter - focusPoint
    } else {
      totalScroll = cards.scrollHeight - visibleHeight
    }

    // 2. Set the section height = scroll distance + visible area
    section.style.height = `${window.innerHeight + totalScroll}px`

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        y: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: () => {
            // Highlight the card closest to the center of the visible area
            const focusPoint = window.innerHeight / 2
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
            setActiveIdx(focusIdx)
          },
          onLeave: () => {
            if (section) section.style.height = "100vh"
          },
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const handleTechClick = (idx: number) => {
    if (window.innerWidth < 768) {
      setActiveIdx(activeIdx === idx ? null : idx)
    } else {
      setActiveIdx(idx)
    }
  }

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full flex justify-center z-[99] lg:overflow-hidden">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-between px-5 py-24 md:px-20 xl:px-24">
        <div className="flex lg:flex-col gap-32 lg:gap-0 lg:sticky lg:top-24">
          <div className="flex flex-col">
            <SpotlightSpan
              showHighlighted
              text="THE TEAMS"
              className="md:relative font-bebas text-display-medium md:text-display-large xl:text-[140px] md:font-normal font-normal -tracking-normal xl:leading-[130px]"
            />
            <br className="hidden md:block" />
            <SpotlightSpan
              text="AT WORK"
              className="md:relative md:-mt-12 xl:-mt-8 font-bebas text-display-medium md:text-display-large xl:text-[140px] md:font-normal font-normal -tracking-normal xl:leading-[130px]"
            />
          </div>
          <ul className="hidden lg:flex pl-0 flex-row lg:flex-col list-none gap-6 font-kanit md:text-title-medium md:font-normal xl:font-normal xl:text-title-large font-normal text-white mt-28 xl:mt-10">
            {TECHS.map((tech, idx) => (
              <li
                key={tech}
                onClick={() => handleTechClick(idx)}
                className={`hover:opacity-100 cursor-pointer hover:text-tailCall-light-800 hover:dark:text-white transition-opacity duration-500 font-normal ${
                  idx === activeIdx
                    ? "text-tailCall-darkMode---neutral-900 dark:text-tailCall-lightMode---primary-400 dark:!opacity-100"
                    : "text-tailCall-darkMode---neutral-800 opacity-70 dark:opacity-100 dark:text-tailCall-darkMode---neutral-500"
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={cardsContainerRef}
          className="hidden lg:flex flex-col gap-10 lg:w-[500px] xl:w-[650px] lg:overflow-visible"
        >
          {TechDetails.map(({title, descriptions, avatars}, idx) => (
            <div
              key={title}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`w-full odd:rotate-2 even:-rotate-2 hover:rotate-0 transition-all duration-300 ${
                activeIdx === idx ? "opacity-100" : "opacity-60"
              } hover:opacity-100 ${idx === 0 ? "mt-32" : ""}`}
              style={{
                borderRadius: 16,
              }}
            >
              <TechCard title={title} description={descriptions} avatars={avatars} selected={idx === activeIdx} />
            </div>
          ))}
        </div>
        {/* Accordion for mobile only */}
        <div className="block lg:hidden mt-12 md:mt-32 overflow-y-auto max-h-[calc(100vh-16rem)]">
          {TechDetails.map(({title, descriptions, avatars}, idx) => {
            const isOpen = activeIdx === idx
            return (
              <div key={title} className="mb-4 border border-gray-700 rounded overflow-hidden">
                <button
                  onClick={() => handleTechClick(idx)}
                  className="border-none rounded-md w-full text-left px-4 py-3 bg-tailCall-darkMode---neutral-500 dark:bg-tailCall-dark-1200 text-white font-semibold flex justify-between items-center"
                >
                  <span className={`font-kanit text-title-tiny font-normal text-white`}>{TECHS[idx]}</span>
                  <span>{isOpen ? <ChevronUp /> : <ChevronDown className="text-white" />}</span>
                </button>
                {isOpen && (
                  <div className="bg-tailCall-darkMode---neutral-500 dark:bg-tailCall-dark-600 mt-1 rounded-xl">
                    <TechCard title={title} description={descriptions} avatars={avatars} selected={true} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TheTeams
