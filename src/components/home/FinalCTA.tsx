import React from "react"
import Heading from "@theme/Heading"
import LinkButton from "../shared/LinkButton"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Section from "../shared/Section"
import {analyticsHandler} from "@site/src/utils"

const FinalCTA = (): JSX.Element => {
  return (
    <Section className="bg-tailCall-dark-600 text-white text-center py-16">
      <Heading as="h2" className="text-title-large sm:text-display-tiny lg:text-display-small mb-8">
        Ready to Transform Your Development Workflow?
      </Heading>
      <p className="text-content-medium max-w-2xl mx-auto mb-10">
        Start coding smarter with Forge – the AI assistant that respects your workflow and your privacy.
      </p>
      <div className="flex flex-col sm:flex-row justify-center">
        <LinkButton
          title="Sign Up"
          href="https://app.antinomy.ai/app/"
          theme={Theme.Gray}
          width="small"
          onClick={() => analyticsHandler("Home Page", "Click", "Signup - Bottom")}
        />
      </div>
    </Section>
  )
}

export default FinalCTA
