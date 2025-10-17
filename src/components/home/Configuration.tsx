import React, {useState} from "react"
import Heading from "@theme/Heading"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const INSTALL_COMMAND = "npx forgecode@latest"
const COPY_FEEDBACK_DURATION = 2000

const Configuration = (): JSX.Element => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION)
  }

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
          <div className="relative">
            <pre className="w-full overflow-x-auto text-xs sm:text-sm md:text-base main-install-command px-4 py-3 pr-14">
              {INSTALL_COMMAND}
            </pre>
            <button
              onClick={handleCopy}
              aria-label="Copy command"
              className="absolute top-2 right-3 z-20 bg-[rgba(24,24,24,0.85)] hover:bg-[rgba(24,24,24,0.95)] border-none rounded-none px-2 py-1 flex items-center cursor-pointer text-white font-sans transition-colors"
            >
              {copied && (
                <span className="text-xs mr-1.5 text-[#b6ffbe] opacity-85 font-sans">
                  Copied!
                </span>
              )}
              <img
                src="/icons/basic/copy-icon.svg"
                alt="Copy"
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 [filter:brightness(2)] ${copied ? "" : "ml-0.5"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Configuration
