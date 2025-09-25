import React, {useEffect, useRef, useState} from "react"
import {COMMANDS, GUIDES} from "@site/src/constants"
import {ChevronRight} from "lucide-react"

const TerminalWithTabs = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [commandIndex, setCommandIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [lines, setLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)

  // Scroll to bottom on update
  useEffect(() => {
    containerRef.current?.scrollTo({top: containerRef.current.scrollHeight, behavior: "smooth"})
  }, [typedText, lines])

  useEffect(() => {
    startTypingCommand(0)
  }, [])

  const startTypingCommand = (index: number) => {
    const command = COMMANDS[index]
    let charIndex = 0
    setTypedText("")
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + command.command.charAt(charIndex))
      charIndex++

      if (charIndex === command.command.length) {
        clearInterval(typingInterval)
        animateOutputLines(command.output, index)
      }
    }, 50)
  }

  const animateOutputLines = (output: string[], currentIndex: number) => {
    let lineIndex = 0

    const outputInterval = setInterval(() => {
      setLines((prev) => [...prev, output[lineIndex]])
      lineIndex++

      if (lineIndex === output.length) {
        clearInterval(outputInterval)
        setIsTyping(false)

        const nextIndex = currentIndex + 1
        if (nextIndex < COMMANDS.length) {
          setTimeout(() => {
            setLines((prev) => [...prev, ""]) // add space
            setCommandIndex(nextIndex)
            startTypingCommand(nextIndex)
          }, 1000)
        } else {
          setTimeout(() => {
            resetTerminal()
          }, 2000)
        }
      }
    }, 300)
  }

  const resetTerminal = () => {
    setLines([])
    setTypedText("")
    setCommandIndex(0)
    startTypingCommand(0)
  }

  const renderLine = (line: string, idx: number) => {
    const isDotLine = line?.startsWith("⏺")
    const content = isDotLine ? line?.slice(2) : line
    const isSynthLine = line?.includes("synthesizing")

    if (isDotLine) {
      return (
        <div
          key={idx}
          className="flex items-center gap-2 text-tailCall-darkMode---neutral-500 dark:text-[#B0BEC5] text-[14px] !leading-3"
        >
          <div className="h-2 w-2 rounded-lg bg-tailCall-lightMode---primary-600 dark:bg-tailCall-lightMode---primary-400" />
          <span className="font-space text-content-small font-normal">{content}</span>
        </div>
      )
    }

    return (
      <div
        key={idx}
        className="text-tailCall-darkMode---neutral-700 dark:text-tailCall-darkMode---neutral-300 max-[480px]:text-[14px]"
      >
        <span className="!font-normal font-space text-content-small !leading-3">
          {isSynthLine ? (
            <span className="text-[#1ECB83] font-bold">{line}</span>
          ) : (
            <span className="font-normal">{line}</span>
          )}
        </span>
      </div>
    )
  }

  return (
    <div className="relative bg-tailCall-lightMode---neutral-200 dark:bg-[#1E1C21] p-[1px] dark:bg-custom-diagonal rounded-[12px] w-full max-[375px]:h-[730px] md:w-4/5 lg:w-[450px] h-[685px] xl:h-[720px] flex flex-col font-mono">
      {/* Header */}
      <div className="bg-tailCall-lightMode---neutral-100 dark:bg-tailCall-darkMode---neutral-900 w-full rounded-t-xl flex gap-2 items-center p-3">
        <div className="h-4 w-4 rounded-full bg-tailCall-lightMode---primary-600 dark:bg-tailCall-dark-1300 opacity-50" />
        <div className="h-4 w-4 rounded-full bg-tailCall-lightMode---primary-400 dark:bg-tailCall-dark-1400 opacity-50" />
        <div className="h-4 w-4 rounded-full bg-[#1ceb83] dark:bg-tailCall-darkMode---primary-400 opacity-50" />
      </div>

      {/* Terminal Content */}
      <div className="bg-white dark:bg-tailCall-dark-1500 rounded-b-xl text-sm h-full relative">
        {/* Logo */}
        <img
          src="/images/home/fc-dark.webp"
          alt="Terminal"
          className="ml-2 mt-4 hidden dark:block w-52 md:w-64 lg:w-72"
        />
        <img
          src="/images/home/fc-light.webp"
          alt="Terminal"
          className="ml-2 mt-4 block dark:hidden w-52 md:w-64 lg:w-72"
        />

        {/* Guides */}
        <div className="flex w-full flex-col px-4">
          {GUIDES.map(({title, details}) => (
            <div key={title} className="flex w-full">
              <span className="w-2/5 text-[#525252] dark:text-white font-space text-content-small font-normal max-[480px]:text-[12px]">
                {title}
              </span>
              <span className="text-[#018284] dark:text-tailCall-darkMode---primary-400 font-space text-content-small font-normal leading-[150%] -tracking-[0.307px] max-[480px]:text-[12px]">
                {details}
              </span>
            </div>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="flex-1 text-white p-4 text-sm whitespace-pre-wrap">
          <div ref={containerRef} className="mt-3 space-y-1 overflow-y-auto h-[320px]">
            {lines.map(renderLine)}
          </div>

          {/* Command Line */}
          <div className="bg-[#E5E5E5] dark:bg-tailCall-dark-1600 rounded-[8px] flex h-[75px] absolute bottom-4 w-[91%] md:w-[94%] lg:w-[93%] border border-solid border-tailCall-dark-1800 dark:border-tailCall-lightMode---primary-400">
            <div className="flex items-center bg-[#E5E5E5] dark:bg-tailCall-dark-1600 rounded-[8px] px-2">
              <div className="flex items-center justify-center">
                <ChevronRight className="text-[#018284] dark:text-tailCall-lightMode---primary-400" width={24} />
              </div>
              <span className="py-3 ml-2 text-[#018284] dark:text-tailCall-lightMode---primary-400 font-space text-title-tiny font-normal max-[480px]:text-[14px]">
                {typedText}
                {isTyping && <span className="animate-pulse text-white w-5">|</span>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalWithTabs
