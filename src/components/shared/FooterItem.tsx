import Link from "@docusaurus/Link"
import React from "react"
import {useCookieConsentManager} from "./CookieConsentProvider"

type FooterItemProps = {
  title: string
  items: FooterLink[]
}

const FooterItem = ({title, items}: FooterItemProps): JSX.Element => {
  const {openCookieConsentModal} = useCookieConsentManager()

  return (
    <div className="flex flex-col mt-5 md:mt-0 gap-5 md:gap-8">
      <span className="font-kanit text-title-tiny text-tailCall-light-1000 dark:text-white opacity-40 font-normal">
        {title}
      </span>
      <ul className="m-0 p-0 flex flex-col items-start gap-5 md:gap-8 list-none font-kanit text-white text-title-tiny font-[275]">
        {items.map((item) => {
          return item.name === "Cookie Settings" ? (
            <button
              className="text-tailCall-light-1000 dark:text-white no-underline hover:no-underline hover:text-tailCall-lightMode---neutral-900 hover:dark:text-white border-none bg-transparent text-title-tiny font-[275] m-0 p-0 font-kanit font-normal cursor-pointer"
              onClick={openCookieConsentModal}
            >
              {item.name}
            </button>
          ) : (
            <Link
              className="font-normal text-tailCall-light-1000 dark:text-white no-underline hover:no-underline hover:text-tailCall-lightMode---neutral-900 hover:dark:text-white"
              href={item.link}
              key={item.name}
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
