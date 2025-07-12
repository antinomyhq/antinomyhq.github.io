import React from "react"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies, companiesLight} from "@site/src/constants"
import TerminalWithTabs from "../shared/TerminalWithTabs"
import SpotlightSpan from "./SpotlightCursor"
import {useThemeContext} from "@site/src/theme/ThemeProvider/ThemeProvider"
import clsx from "clsx"

const Banner = (): JSX.Element => {
  const {theme} = useThemeContext()
  const spotlightBase = "absolute -tracking-normal text-[118px] opacity-90 font-bebas"
  const sharedClasses =
    "-tracking-normal font-normal absolute opacity-90 font-bebas text-[64px] min-[390px]:text-[75px] sm:text-[75px] lg:text-[120px] xl:text-[180px]"

  return (
    <div className="flex justify-center mt-10 sm:mt-[66px] md:mt-[80px] xl:mt-auto">
      <div className="max-w-[1440px] relative px-7 pt:5 lg:pt-0 flex lg:justify-center flex-col w-full">
        <div className="flex justify-around flex-col lg:flex-row gap-40 md:gap-60 lg:gap-40 xl:gap-60 pt-20 md:pt-0 xl:pt-20">
          <div className="flex md:hidden lg:flex flex-col">
            <p className="text-tailCall-lightMode---neutral-800 dark:text-white text-[26px] font-light lg:font-light text-title-medium lg:text-display-tiny opacity-80 max-w-[500px] md:mt-24 font-kanit">
              Forge is a non-intrusive light-weight AI assistant for - the terminal.
            </p>
            <div className="relative flex flex-col">
              <SpotlightSpan showHighlighted text="AI PAIR" className={clsx(sharedClasses, "-top-5")} />
              <SpotlightSpan
                text="PROGRAMMER"
                className={clsx(sharedClasses, "top-10 xl:top-32 xl:left-20 lg:top-20 left-5 lg:left-0")}
              />
            </div>
          </div>
          <div className="relative hidden md:flex lg:hidden flex-col">
            <div className="relative flex flex-col">
              <SpotlightSpan text="AI PAIR" className={`${spotlightBase} font-normal`} />
              <SpotlightSpan text="PROGRAMMING" className={`${spotlightBase} top-24 left-16`} />
            </div>
            <p className="absolute left-80 -top-20 text-tailCall-lightMode---neutral-800 dark:text-white font-light text-title-semi-large lg:text-display-tiny opacity-80 max-w-[500px] mt-24 font-kanit">
              Forge is a non-intrusive light-weight AI assistant for - the terminal.
            </p>
          </div>
          <div className="flex justify-center md:mt-8 md:ml-8">
            <TerminalWithTabs />
          </div>
        </div>
        <div className="w-full px-0 mt-10">
          <TrustedByMarquee
            title="Trusted by Engineers"
            logos={theme === "dark" ? companies : companiesLight}
            isHorizontal
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
