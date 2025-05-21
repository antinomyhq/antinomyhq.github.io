import React from "react"
import Heading from "@theme/Heading"
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const Configuration = (): JSX.Element => {
  return (
    <Section className="flex flex-col lg:flex-row justify-center gap-10" innerClassName="xl:flex md:gap-10">
      <div className="max-w-2xl">
        <Heading as="h2" className="text-title-large sm:text-display-tiny lg:text-display-small mb-SPACE_04">
          Get <span className="rounded-lg px-SPACE_02 bg-tailCall-yellow">Started</span>
        </Heading>
        <p className="text-content-small sm:text-content-medium mb-SPACE_11">
          Forge uniquely combines the power of an industry-leading AI coding agent with the transparency and 
          hackability of an open-source project. Unlike proprietary assistants, it's not a one-size-fits-all 
          black box – it's <b>your coding partner, on your terms</b>.
        </p>
        <div className="mb-SPACE_06">
          <h5 className="font-semibold mb-2">Quick Setup</h5>
          <p className="text-content-small sm:text-content-medium mb-2">
            1. Install Forge using the commands on the right (npm works on all platforms)
          </p>
          <p className="text-content-small sm:text-content-medium mb-2">
            2. Create a <code>.env</code> file in your home directory with your preferred AI model API key:
          </p>
          <pre className="bg-gray-100 p-2 rounded-md mb-4">
            <code>OPENROUTER_API_KEY=&lt;Your Open Router Key&gt;</code>
          </pre>
          <p className="text-content-small sm:text-content-medium">
            3. Launch Forge by typing <code>forge</code> in your terminal
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Why Forge?</h5>
          <p className="text-content-small sm:text-content-medium mb-SPACE_11">
            Whether you're an indie developer or part of a large enterprise, Forge adapts to your needs: 
            use it to rapidly prototype, onboard to unfamiliar codebases, crush bugs, or enforce coding standards with AI-based fixes.
            All of this happens right in your terminal, where you're most productive.
          </p>
        </div>
      </div>
      <div>{CodeTabItem({code: INSTALLATION, title: "Install Forge"})}</div>
    </Section>
  )
}

const CodeTabItem = ({
  code,
  language = "bash",
  showLineNumbers = false,
  title,
}: {
  code: string
  language?: "bash" | "json" | "yaml" | "graphql"
  showLineNumbers?: boolean
  title?: string
}) => (
  <div>
    {title && <h4 className="text-lg font-semibold mb-2">{title}</h4>}
    <Tabs>
      <TabItem value="npm" label="NPM (All Platforms)" default>
        <CodeBlock
          language={language}
          showLineNumbers={showLineNumbers}
          className="overflow-y-auto md:min-w-[45rem] min-w-[100%]"
        >
          {NPM_INSTALLATION}
        </CodeBlock>
      </TabItem>
      <TabItem value="mac" label="MacOS (Homebrew)">
        <CodeBlock
          language={language}
          showLineNumbers={showLineNumbers}
          className="overflow-y-auto md:min-w-[45rem] min-w-[100%]"
        >
          {MAC_INSTALLATION}
        </CodeBlock>
      </TabItem>
      <TabItem value="linux" label="Linux">
        <CodeBlock
          language={language}
          showLineNumbers={showLineNumbers}
          className="overflow-y-auto md:min-w-[45rem] min-w-[100%]"
        >
          {LINUX_INSTALLATION}
        </CodeBlock>
      </TabItem>
    </Tabs>
  </div>
)

export default Configuration

const INSTALLATION = `# Choose the appropriate tab for your operating system
`

const NPM_INSTALLATION = `# Install Forge globally using npm (recommended for all platforms)
npm install -g @antinomyhq/forge

# Or run directly without installation using npx
npx @antinomyhq/forge
`

const MAC_INSTALLATION = `# Add Code-Forge's package repository to Homebrew
brew tap antinomyhq/code-forge

# Install Code-Forge
brew install code-forge
`

const LINUX_INSTALLATION = `# Using curl (common download tool)
curl -L https://raw.githubusercontent.com/antinomyhq/forge/main/install.sh | bash

# Or using wget (alternative download tool)
wget -qO- https://raw.githubusercontent.com/antinomyhq/forge/main/install.sh | bash
`