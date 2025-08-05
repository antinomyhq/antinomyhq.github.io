import React from "react"
import Heading from "@theme/Heading"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const Configuration = (): JSX.Element => {
  return (
    <Section className="flex flex-col" innerClassName="xl:flex flex-col md:gap-10">
      <div className="flex flex-col justify-center gap-10 lg:flex-row">
        <div className="max-w-2xl">
          <Heading as="h2" className="text-title-large sm:text-display-tiny lg:text-display-small mb-SPACE_04">
            Get started
          </Heading>
          <p className="text-content-small sm:text-content-medium mb-SPACE_06">
            Install Forge globally and get started in seconds.
          </p>
          <div className="mb-SPACE_06">
            <h5 className="font-semibold">Need help?</h5>
            <p className="text-content-small sm:text-content-medium mb-SPACE_11">
              Explore our <Link href="/docs">documentation</Link> to learn about Forge's powerful capabilities and how
              to leverage AI models in your development workflow.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Install Forge</h4>
          <pre className="md:min-w-[45rem] min-w-[100%] main-install-command">npx forgecode@latest</pre>
        </div>
      </div>
    </Section>
  )
}

export default Configuration
