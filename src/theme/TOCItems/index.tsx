import React, {useMemo} from "react"
import {useThemeConfig} from "@docusaurus/theme-common"
import {useTOCHighlight, useFilteredAndTreeifiedTOC, type TOCHighlightConfig} from "@docusaurus/theme-common/internal"
import TOCItemTree from "@theme/TOCItems/Tree"
import type {Props} from "@theme/TOCItems"
import {Star} from "lucide-react"

export default function TOCItems({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link text-tailCall-lightMode---neutral-700 dark:text-tailCall-darkMode---neutral-300",
  linkActiveClassName = "table-of-contents__link--active",
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}: Props): JSX.Element | null {
  const themeConfig = useThemeConfig()

  const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel
  const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel

  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  })

  const tocHighlightConfig: TOCHighlightConfig | undefined = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      }
    }
    return undefined
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel])
  useTOCHighlight(tocHighlightConfig)

  return (
    <div className="flex flex-col gap-3 pt-0 bg-white dark:bg-black p-2">
      <span className="inline-block px-5 font-kanit uppercase text-[22px] font-medium text-tailCall-lightMode---primary-600 dark:text-tailCall-darkMode---primary-400">
        On this page
      </span>
      <TOCItemTree toc={tocTree} className={className} linkClassName={linkClassName} {...props} />
      <div className="flex items-center justify-center px-5">
        <div className="bg-radial-gradient rounded-xl p-[1px]">
          <div className="bg-white dark:bg-black rounded-xl px-4 py-5 flex flex-col">
            <span className="text-tailCall-lightMode---neutral-600 dark:text-white font-kanit text-title-tiny font-normal">
              Was this helpful?
            </span>
            <span className="font-kanit text-content-small font-light text-tailCall-border-dark-1100">
              Let us know how we can be helpful.
            </span>
            <div className="flex gap-1 mt-4">
              {Array.from({length: 4}).map((_, idx) => {
                return <Star key={idx} className="text-tailCall-dark-900" />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
