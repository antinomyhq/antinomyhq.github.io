import React from "react"
import {companies} from "@site/src/constants"
import clsx from "clsx"
import {SpotlightSpan, CTAButtons, TrustedByMarquee} from "../components"
import TerminalWithTabs from "../../shared/TerminalWithTabs"

const spotlightBase = "absolute -tracking-normal text-[118px] opacity-90 font-bebas"
const sharedClasses =
  "-tracking-normal font-normal absolute opacity-90 font-bebas text-[64px] min-[390px]:text-[75px] sm:text-[75px] lg:text-[120px] xl:text-[180px]"

// Tailwind class constants
const outerWrapper = "flex justify-center md:mt-auto"
const container = "max-w-[1440px] relative px-7 pt:5 lg:pt-0 flex lg:justify-center flex-col w-full"
const contentLayout = "flex justify-around flex-col lg:flex-row gap-4 md:gap-0 lg:gap-40 xl:gap-64 md:pt-0 xl:pt-auto"

const mobileTextWrapper = "flex md:hidden lg:flex flex-col"
const descriptionText =
  "text-tailCall-lightMode---neutral-800 dark:text-white text-[26px] font-light lg:font-light text-title-medium lg:text-display-tiny opacity-80 max-w-[500px] md:mt-24 font-kanit"
const headerSection = "relative flex flex-col"
const mobileCTAButtons = "mt-36 ml-5 lg:mt-60 xl:mt-[22rem] xl:ml-20"

const tabletWrapper = "relative hidden md:flex lg:hidden flex-col"
const tabletHeaderSection = "relative flex flex-col"
const tabletDescriptionText =
  "absolute left-80 -top-20 text-tailCall-lightMode---neutral-800 dark:text-white font-light text-title-semi-large lg:text-display-tiny opacity-80 max-w-[500px] mt-24 font-kanit"
const tabletCTAButtons = "md:mx-auto md:mt-64"

const terminalWrapper = "flex justify-center md:mt-8 md:ml-8"
const marqueeWrapper = "w-full px-0 mt-10"

const Banner = (): JSX.Element => {
  return (
    <div className={outerWrapper}>
      <div className={container}>
        <div className={contentLayout}>
          {/* Mobile + Large */}
          <div className={mobileTextWrapper}>
            <p className={descriptionText}>Forge is a non-intrusive light-weight AI assistant for the terminal.</p>
            <div id="header-title-section" className={headerSection}>
              <SpotlightSpan showHighlighted text="AI PAIR" className={clsx(sharedClasses, "-top-5")} />
              <SpotlightSpan
                text="PROGRAMMER"
                className={clsx(sharedClasses, "top-10 xl:top-32 xl:left-20 lg:top-20 left-5 lg:left-0")}
              />
            </div>
            <CTAButtons className={mobileCTAButtons} />
          </div>

          {/* Tablet only */}
          <div className={tabletWrapper}>
            <div className={tabletHeaderSection}>
              <SpotlightSpan text="AI PAIR" className={`${spotlightBase} font-normal`} />
              <SpotlightSpan text="PROGRAMMER" className={`${spotlightBase} top-24 left-16`} />
            </div>
            <p className={tabletDescriptionText}>
              Forge is a non-intrusive light-weight AI assistant for - the terminal.
            </p>
            <CTAButtons className={tabletCTAButtons} />
          </div>

          {/* Terminal */}
          <div className={terminalWrapper}>
            <TerminalWithTabs />
          </div>
        </div>

        {/* Marquee */}
        <div className={marqueeWrapper}>
          <TrustedByMarquee title="Trusted by Engineers" logos={companies} isHorizontal />
        </div>
      </div>
    </div>
  )
}

export default Banner
