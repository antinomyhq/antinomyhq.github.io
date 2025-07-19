import React from "react"
import Link from "@docusaurus/Link"
import type {Props} from "@theme/PaginatorNavLink"
import ArrowLeft from "@site/static/icons/basic/circle-arrow-left.svg"
import ArrowRight from "@site/static/icons/basic/circle-arrow-right.svg"
import ArrowRightLight from "@site/static/icons/basic/circle-arrow-right-light.svg"
import ArrowLeftLight from "@site/static/icons/basic/circle-arrow-left-light.svg"
import {useThemeContext} from "../ThemeProvider/ThemeProvider"

function NavigatorIcon({isNext}: {isNext: boolean}): JSX.Element {
  const {theme} = useThemeContext()
  return isNext ? (
    theme === "dark" ? (
      <ArrowRight />
    ) : (
      <ArrowRightLight />
    )
  ) : theme === "dark" ? (
    <ArrowLeft />
  ) : (
    <ArrowLeftLight />
  )
}

export default function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel, isNext} = props
  return (
    <Link className="!no-underline flex gap-3 items-center" to={permalink}>
      <div className="hidden md:block">
        {subLabel && (
          <div
            className={`text-tailCall-darkMode---neutral-500 text-[14px] font-kanit font-medium ${!isNext ? "text-end" : "text-start"}`}
          >
            {subLabel}
          </div>
        )}
        <div
          className={`flex items-center gap-4 pagination-nav__label text-tailCall-darkMode---neutral-600 dark:text-tailCall-darkMode---neutral-300 font-kanit text-content-medium font-small !leading-tight ${isNext ? "text-tailCall-darkMode---primary-700 dark:text-tailCall-darkMode---primary-400" : ""}`}
        >
          {!isNext && (
            <span className="flex items-center flex-shrink-0 w-[26px] h-[26px]">
              <NavigatorIcon isNext={isNext!} />
            </span>
          )}
          {title}
          {isNext && (
            <span className="flex items-center flex-shrink-0 w-[26px] h-[26px]">
              <NavigatorIcon isNext={isNext} />
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
