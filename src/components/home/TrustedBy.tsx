import React from "react"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {clientLogos} from "@site/src/constants"

const TrustedBy: React.FC = () => {
  return (
    <Section>
      <TrustedByMarquee title="Trusted by" logos={clientLogos} />
    </Section>
  )
}

export default TrustedBy
