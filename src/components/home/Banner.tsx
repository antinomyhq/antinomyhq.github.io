import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"

const Banner = (): JSX.Element => {
  return (
    <main className="grid justify-center">
      <Section className="flex flex-col sm:items-center sm:text-center w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <Heading
            as="h1"
            className="hero-banner-title text-title-large max-w-xs sm:text-display-small lg:text-display-large sm:max-w-5xl"
          >
            Code Smarter. <br />
            <span className="bg-tailCall-yellow rounded-md sm:rounded-2xl px-SPACE_02">Build Faster.</span> On Your
            Terms
          </Heading>
          <p className="hero-banner-sub-title sm:max-w-2xl sm:m-auto text-content-small sm:text-content-medium lg:text-content-large font-normal max-w-md sm:mt-SPACE_04 mb-0">
            <b>Forge</b> brings AI directly to your terminal – the open-source coding assistant that{" "}
            <b>understands your entire codebase</b>, supports 300+ AI models, and keeps your code private on your
            machine.
          </p>
          <div className="hidden sm:flex justify-center mt-SPACE_06 sm:mt-SPACE_10 space-x-SPACE_04 sm:space-x-SPACE_06">
            <LinkButton
              title="Get Started"
              href={pageLinks.docs}
              theme={Theme.Light}
              width="small"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
            />
          </div>

          <div className="sm:hidden flex justify-between md:justify-center mt-SPACE_06 sm:mt-SPACE_10 space-x-SPACE_04 sm:space-x-SPACE_06">
            <LinkButton
              title="Get Started"
              href={pageLinks.docs}
              theme={Theme.Light}
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
              width="full"
            />
          </div>
        </div>
      </Section>
    </main>
  )
}

export default Banner
