import {useState} from "react"

interface UseCopyToClipboardReturn {
  copied: boolean
  copyToClipboard: (text: string) => void
}

export const useCopyToClipboard = (duration: number = 2000): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), duration)
  }

  return {copied, copyToClipboard}
}

