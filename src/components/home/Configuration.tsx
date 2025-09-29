import React from "react"
import Heading from "@theme/Heading"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const Configuration = (): JSX.Element => {
  return (
    <Section className="flex flex-col">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:flex-row lg:items-start">
        <div className="flex-1 max-w-2xl lg:max-w-none">
          <Heading as="h2" className="text-title-large sm:text-display-tiny lg:text-display-small mb-SPACE_04">
            Get started
          </Heading>
          <p className="text-content-small sm:text-content-medium mb-SPACE_06">
            Install Forge globally and get started in seconds.
          </p>
          <div className="mb-SPACE_06">
            <h5 className="font-semibold text-sm sm:text-base">Need help?</h5>
            <p className="text-content-small sm:text-content-medium mb-SPACE_11">
              Explore our <Link href="/docs">documentation</Link> to learn about Forge's powerful capabilities and how
              to leverage AI models in your development workflow.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:flex-none lg:min-w-[400px] xl:min-w-[500px]">
          <h4 className="text-base sm:text-lg font-semibold mb-2">Install Forge</h4>
          <pre className="w-full overflow-x-auto text-sm sm:text-base main-install-command px-4 py-3">
            npx forgecode@latest
          </pre>
        </div>
      </div>
    </Section>
  )
}

export default Configuration
