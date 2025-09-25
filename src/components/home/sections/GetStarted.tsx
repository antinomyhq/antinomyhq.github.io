import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import clsx from "clsx"
import {FORGE_CODE_INSTALL_COMMAND} from "@site/src/constants"
import {analyticsHandler} from "@site/src/utils"
import {CopyCodeBox, SpotlightSpan} from "../components"

gsap.registerPlugin(ScrollTrigger)

const GetStarted = (): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const getStartedRef = useRef(null)
  const withRef = useRef(null)
  const onTerminalRef = useRef(null)

  // Check if screen is mobile (below tablet breakpoint)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical tablet breakpoint
    }

    // Check on mount
    checkScreenSize()

    // Add resize listener
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined
    if (isCopied) {
      interval = setInterval(() => setIsCopied(false), 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isCopied])

  useEffect(() => {
    // Only run animations on tablet and desktop (not mobile)
    if (isMobile) return

    const section = sectionRef.current
    const getStarted = getStartedRef.current
    const withEl = withRef.current
    const onTerminal = onTerminalRef.current
    if (!section || !getStarted || !withEl || !onTerminal) return

    const leftStart = -window.innerWidth * 0.5
    const centerPosition = 0
    const rightStart = window.innerWidth * 0.5

    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set([getStarted, withEl], {x: leftStart})
      gsap.set([onTerminal], {x: rightStart})

      // Animate left group to center
      gsap.to([getStarted, withEl], {
        x: centerPosition,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      })

      // Animate right group to center
      gsap.to([onTerminal], {
        x: centerPosition,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [isMobile]) // Re-run when isMobile changes

  const handleCopy = async () => {
    analyticsHandler("Home Page", "Click", "Copy Forge Code")
    await navigator.clipboard.writeText(FORGE_CODE_INSTALL_COMMAND)
    setIsCopied(true)
  }

  const sharedTextSizes = clsx(
    "text-[64px] md:text-[76px] xl:text-[132px]",
    "max-[425px]:text-[64px]",
    "max-[410px]:text-[55px]",
    "max-[390px]:text-[58px]",
    "max-[360px]:text-[48px]",
    "max-[320px]:text-[45px]",
  )

  const renderSpotlight = ({
    text,
    ref,
    className,
    showHighlighted = false,
  }: {
    text: string
    ref?: React.RefObject<HTMLDivElement>
    className: string
    showHighlighted?: boolean
  }) => (
    <div ref={ref}>
      <SpotlightSpan text={text} showHighlighted={showHighlighted} className={className} />
    </div>
  )

  return (
    <div ref={sectionRef} className={clsx("flex justify-center items-center overflow-x-hidden", "get-started-section")}>
      <div className="relative max-w-[1440px] w-full px-5 pt-20 md:px-20 lg:pt-20 xl:pt-28 xl:pl-28 xl:pr-24 xl:pb-20 min-h-[500px] h-auto md:min-h-[600px] lg:min-h-[400px] xl:min-h-[800px]">
        <div className="flex flex-col gap-3 relative">
          {renderSpotlight({
            text: "GET STARTED",
            ref: getStartedRef,
            showHighlighted: true,
            className: clsx("absolute top-2 font-bebas font-normal -tracking-normal", sharedTextSizes),
          })}

          {renderSpotlight({
            text: "with",
            ref: withRef,
            className: clsx(
              "text-title-tiny xl:text-title-large xl:font-normal absolute top-14 left-64 md:top-20 md:left-72 xl:top-28 xl:left-[560px]",
              "max-[390px]:left-[70%]",
              "max-[360px]:left-[70%]",
              "max-[320px]:left-[63%]",
              "max-[425px]:left-[70%]",
            ),
          })}

          {renderSpotlight({
            text: "FORGE CODE",
            className: clsx(
              "absolute top-16 left-[15%] md:top-20 xl:top-32 font-bebas font-normal -tracking-normal",
              sharedTextSizes,
            ),
          })}

          {renderSpotlight({
            text: "ON YOUR TERMINAL",
            ref: onTerminalRef,
            className: clsx(
              "absolute top-8 left-0 sm:left-40 md:top-32 xl:top-56 xl:left-[300px] font-bebas font-normal -tracking-normal",
              "max-md:top-[120px] max-md:left-[0%]",
              "max-[300px]:top-[120px]",
              sharedTextSizes.replace("text-[64px]", "text-[64px] max-[390px]:text-[55px]"),
            ),
          })}
        </div>
        <CopyCodeBox isCopied={isCopied} onCopy={handleCopy} />
      </div>
    </div>
  )
}

export default GetStarted
