import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"
import SectionTitle from "../shared/SectionTitle"
import {Star, Github} from "lucide-react"
import InstallTerminal from "./InstallTerminal"

const HeroTitle: React.FC = () => {
  return (
    <main>
      <Section className="flex flex-col items-start text-left w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <Heading as="h1" className="hero-banner-title mb-4">
            Invisible When You Don’t.
            <br />
            Powerful When You Do.
          </Heading>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            AI-native engineering that lives in your terminal. Fast. Deterministic. Context-aware.
          </p>
          <InstallTerminal className="mt-8 mb-8" />
        </div>
      </Section>
    </main>
  )
}

export default HeroTitle
