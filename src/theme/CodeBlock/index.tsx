import React from "react"
import CodeBlock from "@theme-original/CodeBlock"
import type CodeBlockType from "@theme/CodeBlock"
import type {WrapperProps} from "@docusaurus/types"
import CopyButton from "@site/src/components/shared/CopyButton"

type Props = WrapperProps<typeof CodeBlockType>

type Primitive = string | boolean | number

interface MetastringData extends Record<string, Primitive> {
  title: string
  showLineNumbers: boolean
}

export default function CodeBlockWrapper(props: Props): JSX.Element {
  return (
    <div className="relative overflow-hidden">
      <CodeBlock {...props} />
      <CopyButton textToCopy={props.children?.toString() || ""} ariaLabel="Copy code" className="absolute top-[12px] right-4 z-20" />
    </div>
  )
}
