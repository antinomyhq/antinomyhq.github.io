import React from "react"
import Link from "@docusaurus/Link"
import {footerItems, socials} from "@site/src/constants"
import useBaseUrl from "@docusaurus/useBaseUrl"
import {useCookieConsentManager} from "./CookieConsentProvider"

const Footer = (): JSX.Element => {
  const {openCookieConsentModal} = useCookieConsentManager()
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col relative w-full px-4 py-8 lg:px-40 lg:pt-20 lg:pb-0 bg-tailCall-terminal-bg-primary border-t border-tailCall-terminal-border terminal-grid-bg gap-4 lg:gap-8">
      <div className="grid grid-cols-2 gap-8 lg:flex lg:gap-32 xl:gap-64 w-full z-10">
        <span className="text-2xl font-semibold text-tailCall-terminal-text-primary col-span-2 h-10 flex items-center terminal-glow">
          <img src="/images/home/logo-light.svg" alt="footer logo" height={30} />
        </span>
        {footerItems.map((category: FooterItem, idx: number) => {
          return (
            <div className="flex flex-col gap-4 lg:gap-6" key={idx}>
              <span className="text-content-small font-bold lg:text-title-small text-tailCall-terminal-green-primary leading-[20px] lg:leading-[26px] font-mono terminal-glow">
                {category.title}
              </span>
              {category.items.map((footerItem: FooterLink, index: number) => {
                return (
                  <Link
                    key={index}
                    href={footerItem.link}
                    className="text-content-small lg:text-content-medium text-tailCall-terminal-text-secondary hover:text-tailCall-terminal-green-primary hover:no-underline leading-[20px] lg:leading-[26px] font-mono transition-all duration-200"
                  >
                    {footerItem.name}
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-[100%] lg:w-full z-10 py-2 lg:py-6 gap-2 lg:gap-0">
        <p
          className="text-content-mini lg:text-content-tiny text-tailCall-terminal-text-muted font-mono font-normal cursor-pointer mb-0 hover:text-tailCall-terminal-green-primary transition-colors duration-200"
          onClick={openCookieConsentModal}
        >
          Cookie Settings
        </p>
        <p className="text-content-mini lg:text-content-tiny text-tailCall-terminal-text-muted font-mono font-normal mb-0">
          Copyright © {year} Tailcall, Inc.
        </p>
        <div className="space-x-SPACE_04">
          {socials.map((social) => (
            <Link href={social.href} className="cursor-pointer" key={social.id}>
              <social.image className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
