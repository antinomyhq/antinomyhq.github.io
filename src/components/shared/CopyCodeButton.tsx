import React, {useEffect, useState} from "react"
import clsx from "clsx"
import {analyticsHandler} from "@site/src/utils"
import { FORGE_CODE_INSTALL_COMMAND } from "@site/src/constants"
import { Copy, CopyCheck } from "lucide-react"

type LinkButtonProps = {
  title?: string
  titleClassName?: string
  width?: "small" | "medium" | "large" | "auto" | "full"
  disabled?: boolean
}

const CopyCodeButton = ({
  title = FORGE_CODE_INSTALL_COMMAND,
  titleClassName,
  width = "auto",
  disabled,
}: LinkButtonProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false)
  const setButtonWidth = () => {
    switch (width) {
      case "small":
        return "w-[228px]"
      case "medium":
        return "w-[300px]"
      case "large":
        return "w-[500px]"
      case "full":
        return "w-full"
      case "auto":
        return "w-fit"
      default:
        return "w-fit"
    }
  }

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined
    if (isCopied) {
      interval = setTimeout(() => setIsCopied(false), 1000)
    }
    return () => clearTimeout(interval)
  }, [isCopied])

  const handleCopy = async () => {
    analyticsHandler("Home Page", "Click", "Forge code command")
    await navigator.clipboard.writeText(FORGE_CODE_INSTALL_COMMAND)
    setIsCopied(true)
  }

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        `
        group relative
        flex items-center justify-center
        gap-x-2
        rounded-[12px]
        px-4 py-4 sm:px-6 lg:px-8 sm:py-5 lg:py-6
        cursor-pointer
        transition-all duration-300
        text-lg
        border border-solid border-tailCall-lightMode---primary-700 dark:border-tailCall-lightMode---primary-400
        text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400 hover:text-white hover:dark:text-black
        bg-transparent hover:bg-tailCall-lightMode---primary-700 hover:dark:bg-tailCall-lightMode---primary-400 
        `,
        setButtonWidth(),
        disabled ? "cursor-not-allowed opacity-20" : "",
      )}
    >
      {title && <span className={clsx("z-[1] text-[18px]", titleClassName)}>{title}</span>}

      {!isCopied ? (
        <Copy className="stroke-current text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400 group-hover:text-white group-hover:dark:text-black" />
      ) : (
        <CopyCheck className="stroke-current text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400 group-hover:text-white group-hover:dark:text-black" />
      )}
    </button>
  )
}

export default CopyCodeButton
