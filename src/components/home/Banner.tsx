import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"
import {Star, Github} from "lucide-react"

const Banner = (): JSX.Element => {
  return (
    <main className="grid justify-center">
      <Section className="flex flex-col sm:items-center sm:text-center w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <Heading
            as="h1"
            className="hero-banner-title text-title-large max-w-xs sm:text-display-small lg:text-display-large sm:max-w-5xl"
          >
            AI Pair Programmer <br></br> in Your Terminal
          </Heading>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-SPACE_06 sm:mt-SPACE_10 space-y-SPACE_04 sm:space-y-0 sm:space-x-SPACE_06">
            <LinkButton
              title="Sign up"
              href={pageLinks.signup}
              theme={Theme.Gray}
              width="medium"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Early Access")}
            />
            <LinkButton
              title="Get Started"
              href={pageLinks.installation}
              theme={Theme.Light}
              width="medium"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
            />
          </div>
        </div>
      </Section>
    </main>
  )
}

export default Banner
