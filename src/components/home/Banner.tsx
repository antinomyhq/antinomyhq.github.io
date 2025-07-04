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
              title="Get Started"
              href={pageLinks.installation}
              theme={Theme.Light}
              width="small"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
            />
            <LinkButton
              title="🎉 Sign up"
              href={pageLinks.signup}
              theme={Theme.Gray}
              width="small"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Early Access")}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center">
              <a
                href="https://github.com/antinomyhq/forge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 rounded-full text-sm font-medium text-gray-700 transition-all duration-200 hover:no-underline shadow-lg"
                onClick={() => analyticsHandler("Home Page", "Click", "GitHub Badge")}
              >
                <Github size={28} />
                <Star size={28} className="text-yellow-500" />
                <span className="font-medium text-base">3.6k on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

export default Banner
