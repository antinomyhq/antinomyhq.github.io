import Link from "@docusaurus/Link"
import React from "react"
import {useCookieConsentManager} from "./CookieConsentProvider"
import {analyticsHandler} from "@site/src/utils"

type FooterItemProps = {
  title: string
  items: FooterLink[]
}

const FooterItem = ({title, items}: FooterItemProps): JSX.Element => {
  const {openCookieConsentModal} = useCookieConsentManager()

  const handleOpenCookieConsent = () => {
    analyticsHandler("Home Page", "Click", "Cookie Settings")
    openCookieConsentModal()
  }
  return (
    <div className="flex flex-col mt-5 md:mt-0 gap-5 md:gap-8">
      <span className="font-kanit text-title-tiny text-tailCall-light-1000 dark:text-white opacity-40 font-normal">
        {title}
      </span>
      <ul className="m-0 p-0 flex flex-col items-start gap-5 md:gap-8 list-none font-kanit text-white text-title-tiny font-[275]">
        {items.map((item) => {
          return item.name === "Cookie Settings" ? (
            <button
              key={item.name}
              className="text-tailCall-light-1000 dark:text-white no-underline hover:no-underline border-none bg-transparent text-title-tiny font-[275] m-0 p-0 font-kanit font-normal cursor-pointer hover:dark:text-tailCall-darkMode---primary-400 hover:text-tailCall-darkMode---primary-600"
              onClick={handleOpenCookieConsent}
            >
              {item.name}
            </button>
          ) : (
            <Link
              className="font-normal text-tailCall-light-1000 dark:text-white no-underline hover:no-underline transition-opacity duration-500 cursor-pointer hover:dark:text-tailCall-darkMode---primary-400 hover:text-tailCall-darkMode---primary-600"
              href={item.link}
              key={item.name}
              onClick={() => analyticsHandler("Home Page", "Click", item.name)}
            >
              {item.name}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterItem
