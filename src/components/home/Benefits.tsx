import React from "react"
import Heading from "@theme/Heading"
import SectionTitle from "../shared/SectionTitle"
import BenefitsCard from "./BenefitsCard"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies} from "@site/src/constants"

const Benefits = (): JSX.Element => {
  return (
    <div className="bg-tailCall-terminal-bg-primary terminal-grid-bg text-tailCall-terminal-text-primary border-t border-tailCall-terminal-border">
      <Section>
        <div>
          <SectionTitle title="Benefits" />
          <div className="h-fit sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20">
            <Heading
              as="h3"
              className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-vt323 text-tailCall-terminal-green-primary terminal-glow tracking-wide"
            >
              Key Benefits - AI Assistance Without Compromises
            </Heading>
          </div>
        </div>
        <BenefitsCard />
      </Section>
    </div>
  )
}

export default Benefits
