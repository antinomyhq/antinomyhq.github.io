import React, {type ReactNode} from "react"
import useBrokenLinks from "@docusaurus/useBrokenLinks"
import type {Props} from "@theme/MDXComponents/Li"

export default function MDXLi(props: Props): ReactNode | undefined {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  useBrokenLinks().collectAnchor(props.id)
  return (
    <li
      className="text-[18px] font-light text-tailCall-lightMode---neutral-500 dark:text-tailCall-darkMode---neutral-200 font-kanit"
      {...props}
    />
  )
}
