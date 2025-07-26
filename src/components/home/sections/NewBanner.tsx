import React, {useEffect, useRef} from "react"
import {companies, companiesLight} from "@site/src/constants"
import {useThemeContext} from "@site/src/theme/ThemeProvider/ThemeProvider"
import clsx from "clsx"
import {analyticsHandler} from "@site/src/utils"
import {useHistory} from "@docusaurus/router"
import SpotlightSpan from "../components/SpotlightCursor"
import TerminalWithTabs from "../../shared/TerminalWithTabs"
import TrustedByMarquee from "../components/TrustedByMarquee"
import PrimaryButton from "../../shared/PrimaryButton"

const spotlightBase = "absolute -tracking-normal text-[118px] opacity-90 font-bebas"
const sharedClasses =
  "-tracking-normal font-normal absolute opacity-90 font-bebas text-[64px] min-[390px]:text-[75px] sm:text-[75px] lg:text-[120px] xl:text-[180px]"

const Banner = (): JSX.Element => {
  const {theme} = useThemeContext()
  const history = useHistory()

  const handleSignUp = () => {
    analyticsHandler("Home Page", "Click", "Sign Up")
    window.open("https://app.forgecode.dev/app/", "_blank")
  }

  const handleGetStarted = () => {
    analyticsHandler("Home Page", "Click", "Sign Up")
    history.push("/docs/installation/")
  }

  return (
    <div className="flex justify-center mt-10 sm:mt-[66px] md:mt-auto">
      <div className="max-w-[1440px] relative px-7 pt:5 lg:pt-0 flex lg:justify-center flex-col w-full">
        <div className="flex justify-around flex-col lg:flex-row gap-4 md:gap-0 lg:gap-40 xl:gap-64 md:pt-0 xl:pt-auto">
          <div className="flex md:hidden lg:flex flex-col">
            <p className="text-tailCall-lightMode---neutral-800 dark:text-white text-[26px] font-light lg:font-light text-title-medium lg:text-display-tiny opacity-80 max-w-[500px] md:mt-24 font-kanit">
              Forge is a non-intrusive light-weight AI assistant for the terminal.
            </p>
            <div id="header-title-section" className="relative flex flex-col">
              <SpotlightSpan showHighlighted text="AI PAIR" className={clsx(sharedClasses, "-top-5")} />
              <SpotlightSpan
                text="PROGRAMMER"
                className={clsx(sharedClasses, "top-10 xl:top-32 xl:left-20 lg:top-20 left-5 lg:left-0")}
              />
            </div>
            <div className="flex gap-4 mt-36 max-[375px]:ml-0 ml-5 md:ml-0 lg:mt-60 xl:mt-[22rem] xl:ml-20 z-10">
              <PrimaryButton onClick={handleSignUp} variant="solid">
                Sign up
              </PrimaryButton>
              <PrimaryButton onClick={handleGetStarted} variant="outline">
                Get Started
              </PrimaryButton>
            </div>
          </div>
          <div className="relative hidden md:flex lg:hidden flex-col">
            <div className="relative flex flex-col">
              <SpotlightSpan text="AI PAIR" className={`${spotlightBase} font-normal`} />
              <SpotlightSpan text="PROGRAMMER" className={`${spotlightBase} top-24 left-16`} />
            </div>
            <p className="absolute left-80 -top-20 text-tailCall-lightMode---neutral-800 dark:text-white font-light text-title-semi-large lg:text-display-tiny opacity-80 max-w-[500px] mt-24 font-kanit">
              Forge is a non-intrusive light-weight AI assistant for - the terminal.
            </p>
            <div className="flex gap-4 md:mx-auto md:mt-64 z-10">
              <PrimaryButton onClick={handleSignUp} variant="solid">
                Sign up
              </PrimaryButton>
              <PrimaryButton onClick={handleGetStarted} variant="outline">
                Get Started
              </PrimaryButton>
            </div>
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
