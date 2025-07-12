import React, {useEffect, useRef, useState} from "react"
import SpotlightSpan from "./SpotlightCursor"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import clsx from "clsx"
import {Copy, CopyCheck} from "lucide-react"
import {FORGE_CODE_INSTALL_COMMAND} from "@site/src/constants"

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
              "text-title-tiny xl:text-title-large xl:font-normal font-kanit absolute top-14 left-64 md:top-20 md:left-72 xl:top-28 xl:left-[560px]",
              "max-[390px]:left-[70%]",
              "max-[360px]:left-[66%]",
              "max-[320px]:left-[63%]",
              "max-[425px]:left-[65%]",
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
              sharedTextSizes.replace("text-[64px]", "text-[64px] max-[390px]:text-[58px]"),
            ),
          })}
        </div>
        <div className="flex flex-col items-center mt-[200px] sm:mt-[220px] md:mt-[250px] lg:mt-[280px] xl:mt-[450px]">
          <div className="w-full max-w-[700px] dark:bg-gradient-315 rounded-2xl p-[1px]">
            <div className="bg-tailCall-lightMode---neutral-200 dark:bg-[#1E1C21] flex flex-col rounded-2xl relative">
              <div className="flex items-center gap-1 px-4 py-3 bg-tailCall-lightMode---neutral-300 dark:bg-[#18171A] rounded-t-2xl">
                <div className="h-4 w-4 bg-tailCall-lightMode---neutral-600 dark:bg-[#D9D9D9] rounded-full opacity-50"></div>
                <div className="h-4 w-4 bg-tailCall-lightMode---neutral-600 dark:bg-[#D9D9D9] rounded-full opacity-20"></div>
                <div className="h-4 w-4 bg-tailCall-lightMode---neutral-600 dark:bg-[#D9D9D9] rounded-full opacity-10"></div>
              </div>
              <button onClick={handleCopy} className="absolute right-2 top-2 border-none bg-transparent cursor-pointer">
                {isCopied ? (
                  <CopyCheck className="h-5 w-5 text-tailCall-lightMode---primary-600 dark:text-tailCall-lightMode---primary-400" />
                ) : (
                  <Copy className="h-5 w-5 text-tailCall-lightMode---primary-600 dark:text-tailCall-lightMode---primary-400" />
                )}
              </button>
              <div className="pt-4 px-8 pb-2 md:pt-4 md:px-8 md:pb-4 lg:pt-4 lg:px-5 lg:pb-3 xl:pt-4 xl:px-7 xl:pb-4">
                <span className="text-tailCall-lightMode---primary-600 dark:text-[#30EDE6] block font-space text-content-small md:text-content-large xl:text-title-semi-large xl:font-normal font-normal md:font-normal -tracking-wide">
                  {FORGE_CODE_INSTALL_COMMAND}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
