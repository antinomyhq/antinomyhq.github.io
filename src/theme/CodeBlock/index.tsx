import React, {useState} from "react"
import CodeBlock from "@theme-original/CodeBlock"
import type CodeBlockType from "@theme/CodeBlock"
import type {WrapperProps} from "@docusaurus/types"
import {Copy, CopyCheck} from "lucide-react"
import {common_styles} from "@site/src/constants/styles"

type Props = WrapperProps<typeof CodeBlockType>

type Primitive = string | boolean | number

interface MetastringData extends Record<string, Primitive> {
  title: string
  showLineNumbers: boolean
}

const ICON_STYLES = `h-5 w-5 ${common_styles.theme_text}`

export default function CodeBlockWrapper(props: Props): JSX.Element {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.children?.toString() || "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden cursor-pointer" onClick={handleCopy}>
      <CodeBlock {...props} />
      <button
        aria-label="Copy code"
        className="absolute top-[35px] right-[10px] z-20 bg-transparent border-none rounded-none flex items-center cursor-pointer text-white font-sans"
      >
        {copied && (
          <span className={`text-xs mr-1.5 opacity-85 font-sans ${common_styles.theme_text}`}>Text Copied!</span>
        )}
        {copied ? <CopyCheck className={ICON_STYLES} /> : <Copy className={ICON_STYLES} />}
      </button>
    </div>
  )
}
