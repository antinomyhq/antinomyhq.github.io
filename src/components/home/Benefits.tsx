import React from "react"
import Heading from "@theme/Heading"
import SectionTitle from "../shared/SectionTitle"
import BenefitsCard from "./BenefitsCard"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies} from "@site/src/constants"

const Benefits = (): JSX.Element => {
  return (
    <div className="bg-[#1C1D1F] grid-background text-tailCall-white">
      <Section>
        <div>
          <SectionTitle title="Benefits" />
          <div className="h-fit sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20">
            <Heading as="h3" className="text-title-large sm:text-display-tiny lg:text-display-small md:w-[65%]">
              Key Benefits - AI Assistance Without Compromises
            </Heading>
          </div>
        </div>
        <BenefitsCard />
        <div className="mt-SPACE_16">
          <TrustedByMarquee title="Trusted by engineers at" logos={companies} />
        </div>
      </Section>
    </div>
  )
}

export default Benefits
