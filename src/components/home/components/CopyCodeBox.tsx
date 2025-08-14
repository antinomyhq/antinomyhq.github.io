import React from "react"
import {Copy, CopyCheck} from "lucide-react"
import {FORGE_CODE_INSTALL_COMMAND} from "@site/src/constants"
import {common_styles} from "@site/src/constants/styles"

type Props = {
  isCopied: boolean
  onCopy: () => void
}

const cls = {
  wrapper: "flex__column items-center mt-[200px] sm:mt-[220px] md:mt-[250px] lg:mt-[280px] xl:mt-[450px]",
  outerBox:
    "w-full max-w-[700px] bg-tailCall-lightMode---neutral-200 dark:bg-gradient-315 rounded-[12px] p-[1px] cursor-pointer",
  innerBox: "bg-white dark:bg-tailCall-dark-1900 flex__column rounded-[12px] relative",
  topBar:
    "flex__column__center gap-1 px-4 py-3 bg-tailCall-lightMode---neutral-100 dark:bg-tailCall-dark-1200 rounded-t-2xl",
  dot1: "h-4 w-4 bg-tailCall-lightMode---primary-600 dark:bg-tailCall-dark-1300 rounded-full opacity-50",
  dot2: "h-4 w-4 bg-tailCall-lightMode---primary-400 dark:bg-tailCall-dark-1400 rounded-full opacity-50",
  dot3: "h-4 w-4 bg-tailCall-dark-2000 dark:bg-tailCall-darkMode---primary-400 rounded-full opacity-50",

  copyButton: "absolute right-2 top-2 border-none bg-transparent flex__column__center gap-2 cursor-pointer",
  copyText: common_styles.theme_text,
  icon: `h-5 w-5 ${common_styles.theme_text}`,

  codeContainer: "pt-4 px-8 pb-2 md:pt-4 md:px-8 md:pb-4 lg:pt-4 lg:px-5 lg:pb-3 xl:pt-4 xl:px-7 xl:pb-4",
  codeText:
    "text-tailCall-lightMode---primary-700 dark:text-tailCall-darkMode---primary-400 block font-space text-content-small md:text-content-large xl:text-title-semi-large xl:font-normal font-normal md:font-normal -tracking-wide",
}

const CopyCodeBox = ({isCopied, onCopy}: Props) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.outerBox} onClick={onCopy}>
        <div className={cls.innerBox}>
          <div className={cls.topBar}>
            <div className={cls.dot1} />
            <div className={cls.dot2} />
            <div className={cls.dot3} />
          </div>
          <button className={cls.copyButton}>
            <span className={cls.copyText}>{isCopied ? "Text Copied!" : "Copy Here!"}</span>
            {isCopied ? <CopyCheck className={cls.icon} /> : <Copy className={cls.icon} />}
          </button>
          <div className={cls.codeContainer}>
            <span className={cls.codeText}>{FORGE_CODE_INSTALL_COMMAND}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyCodeBox
