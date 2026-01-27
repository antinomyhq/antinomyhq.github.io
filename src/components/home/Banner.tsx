import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"
import SectionTitle from "../shared/SectionTitle"
import {Star, Github} from "lucide-react"

const Banner: React.FC = () => {
  return (
    <main>
      <Section className="flex flex-col items-start text-left w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <SectionTitle title="Mission" />
          <Heading as="h1" className="hero-banner-title mb-4">
            AI-Native <br />
            Engineering
          </Heading>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            Build software faster with AI agents that understand your codebase, tools, and workflow
          </p>
        </div>
      </Section>
    </main>
  )
}

export default Banner
