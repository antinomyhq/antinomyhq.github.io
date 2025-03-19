import React from "react"
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import Version from "./Version"

const InstallCommand = (): JSX.Element => {
  const npmCommand = `npm install -g @antinomyhq/forge`
  const curlCommand = `curl -sSL https://tailcall.run/install.sh | bash -s -- `

  return (
    <div>
      <Tabs>
        <TabItem value="npm" label="NPM (All Platforms)" default>
          <CodeBlock>
            {npmCommand}
            <Version />
          </CodeBlock>
        </TabItem>
        <TabItem value="curl" label="curl (Linux/macOS)">
          <CodeBlock>
            {curlCommand}
            <Version />
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  )
}

export default InstallCommand
