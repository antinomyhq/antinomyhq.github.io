import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"
import {Star, Github} from "lucide-react"

const Banner: React.FC = () => {
  return (
    <main className="grid justify-center">
      <Section className="flex flex-col sm:items-center sm:text-center w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <Heading as="h1" className="hero-banner-title">
            AI-Native <br />
            Engineering
          </Heading>
        </div>
      </Section>
    </main>
  )
}

export default Banner
