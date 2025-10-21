import React from "react"
import CodeBlock from "@theme-original/CodeBlock"
import type CodeBlockType from "@theme/CodeBlock"
import type {WrapperProps} from "@docusaurus/types"
import CopyButton from "@site/src/components/shared/CopyButton"
import {useCopyToClipboard} from "@site/src/hooks/useCopyToClipboard"

type Props = WrapperProps<typeof CodeBlockType>

type Primitive = string | boolean | number

interface MetastringData extends Record<string, Primitive> {
  title: string
  showLineNumbers: boolean
}

export default function CodeBlockWrapper(props: Props): JSX.Element {
  const {copied, copyToClipboard} = useCopyToClipboard()

  return (
    <div className="relative overflow-hidden">
      <CodeBlock {...props} />
      <CopyButton
        copied={copied}
        onClick={() => copyToClipboard(props.children?.toString() || "")}
        ariaLabel="Copy code"
        className="absolute top-[12px] right-4 z-20"
      />
    </div>
  )
}
