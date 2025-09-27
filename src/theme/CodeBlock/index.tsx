import React, {useState} from "react"
import CodeBlock from "@theme-original/CodeBlock"
import type CodeBlockType from "@theme/CodeBlock"
import type {WrapperProps} from "@docusaurus/types"

type Props = WrapperProps<typeof CodeBlockType>

type Primitive = string | boolean | number

interface MetastringData extends Record<string, Primitive> {
  title: string
  showLineNumbers: boolean
}

export default function CodeBlockWrapper(props: Props): JSX.Element {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.children?.toString() || "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden">
      <CodeBlock {...props} />
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-[12px] right-4 z-20 bg-[rgba(24,24,24,0.85)] border-none rounded-none px-2 py-1 flex items-center cursor-pointer text-white font-sans"
      >
        {copied && <span className="text-xs mr-1.5 text-[#b6ffbe] opacity-85 font-sans">Copied!</span>}
        <img
          src="/icons/basic/copy-icon.svg"
          alt="Copy Icon"
          className={`w-4 h-4 [filter:brightness(2)] ${copied ? "ml-0" : "ml-0.5"}`}
        />
      </button>
    </div>
  )
}
