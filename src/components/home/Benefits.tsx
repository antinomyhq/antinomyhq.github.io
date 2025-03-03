import React from "react"
import Heading from "@theme/Heading"
import SectionTitle from "../shared/SectionTitle"
import Partners from "./Partners"
import BenefitsCard from "./BenefitsCard"
import Section from "../shared/Section"

const Benefits = (): JSX.Element => {
  return (
    <div className="bg-[#1C1D1F] grid-background pb-20 lg:pb-40">
      <Section className="!pb-0 lg:pt-24">
        <div>
          <SectionTitle title="Benefits" />
          <div className="h-fit sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20">
            <Heading
              as="h3"
              className="text-title-large sm:text-display-tiny lg:text-display-small text-white md:w-[65%]"
            >
              Transform into a 100x developer with Code-Forge—solve complex engineering challenges at lightning speed
              directly from your terminal.
            </Heading>
          </div>
        </div>
        <BenefitsCard />
      </Section>
    </div>
  )
}

export default Benefits
