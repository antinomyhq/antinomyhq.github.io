import React, {useEffect, useState} from "react"
import Button from "./Button"
import {Copy, CopyCheck} from "lucide-react"
import {FORGE_CODE_INSTALL_COMMAND} from "@site/src/constants"

const CopyCodeButton = (): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false)
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined
    if (isCopied) {
      interval = setTimeout(() => setIsCopied(false), 1000)
    }
    return () => clearTimeout(interval)
  }, [isCopied])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(FORGE_CODE_INSTALL_COMMAND)
    setIsCopied(true)
  }
  return (
    <Button variant="transparent" onClick={handleCopy}>
      <div className="group">
        <div className="relative flex w-fit items-center group group-hover:bg-tailCall-dark-1800 group-hover:dark:bg-[#30EDE6] transition-colors duration-500 rounded-xl cursor-pointer">
          <img
            src="/images/home/curly-open.svg"
            alt="curly open"
            className="dark:block hidden group-hover:absolute -left-1"
          />
          <img
            src="/images/home/curly-open-light.svg"
            alt="curly open"
            className="dark:hidden block group-hover:absolute -left-1"
          />
          <span className="font-kanit text-title-medium font-light text-tailCall-lightMode---primary-600 dark:text-tailCall-lightMode---primary-400 group-hover:text-black group-hover:hidden text-[20px]">
            Try Now
          </span>
          <span className="text-black hidden font-kanit group-hover:block px-3 ml-3 xl:text-content-medium sm:text-content-small ">
            {FORGE_CODE_INSTALL_COMMAND}
          </span>
          {!isCopied ? <Copy className="hidden group-hover:block" color="#000000" /> : <CopyCheck color="#000000" />}
          <img src="/images/home/curly-close.svg" alt="curly close" className="dark:block hidden -mr-1" />
          <img src="/images/home/curly-close-light.svg" alt="curly close" className="dark:hidden block -mr-1" />
        </div>
      </div>
    </Button>
  )
}

export default CopyCodeButton
