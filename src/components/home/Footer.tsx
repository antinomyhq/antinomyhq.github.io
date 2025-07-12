import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"
import Button from "../shared/Button"
import {footerItems} from "@site/src/constants"
import FooterItem from "../shared/FooterItem"

const Footer = (): JSX.Element => {
  return (
    <footer className="relative flex flex-col gap-14 px-6 py-10 z-[99] bg-tailCall-lightMode---neutral-100 dark:bg-tailCall-darkMode---neutral-900">
      <div className="flex flex-col lg:hidden md:flex-row gap-16 md:gap-0 justify-between items-start">
        <div className="flex flex-col gap-4 w-full">
          <span className="font-kanit text-title-small xl:font-normal xl:text-title-semi-large font-normal text-tailCall-light-1000 dark:text-white">
            Get started with personal AI Assistant now.
          </span>
          <div className="flex justify-start gap-5 items-start min-[425px]:items-center flex-col min-[425px]:flex-row">
            <Button variant="transparent" onClick={() => {}}>
              <span className="font-kanit text-tailCall-light-1000 dark:text-white font-semibold text-title-tiny">
                Book a demo
              </span>
            </Button>
            <CopyCodeButton />
          </div>
        </div>
      </div>
      <hr className="bg-tailCall-light-1100 dark:bg-[#262626] lg:hidden block" />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:flex justify-between gap-5 flex-wrap">
        {footerItems.map(({items, title}) => {
          return <FooterItem key={title} items={items} title={title} />
        })}
        <div className="hidden flex-col lg:flex gap-4 max-w-[340px] xl:max-w-max">
          <span className="font-kanit text-title-small xl:font-normal xl:text-title-semi-large font-normal text-tailCall-light-1000 dark:text-white md:text-end">
            Get started with personal AI Assistant now.
          </span>
          <div className="flex justify-start gap-5 items-center">
            <Button variant="transparent" onClick={() => {}}>
              <span className="font-kanit text-tailCall-light-1000 dark:text-white font-semibold text-title-tiny">
                Book a demo
              </span>
            </Button>
            <CopyCodeButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 justify-between pt-5">
        <div className="flex items-center gap-5">
          <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="hidden dark:block cursor-pointer" />
          <img src="/images/home/logo-dark.svg" alt="Logo" width={141} className="block dark:hidden cursor-pointer" />
        </div>
        <span className="text-tailCall-light-1000 dark:text-white font-kanit text-title-tiny font-[275]">
          Copyright © {new Date().getFullYear()} Tailcall, Inc.
        </span>
        <div className="flex gap-5">
          <img
            src="/icons/basic/xlogo.svg"
            alt="xlogo"
            className="hidden dark:block cursor-pointer"
            onClick={() => window.open("https://x.com/forgecodehq", "_blank")}
          />
          <img
            src="/icons/basic/DiscordLogo.svg"
            alt="discord"
            className="hidden dark:block cursor-pointer"
            onClick={() => window.open("https://discord.com/invite/kRZBPpkgwq", "_blank")}
          />
          <img
            src="/icons/basic/linkedin.svg"
            alt="linkedin"
            className="hidden dark:block cursor-pointer"
            onClick={() => window.open("https://www.linkedin.com/company/forgecodehq", "_blank")}
          />
          <img
            src="/icons/basic/GithubLogo.svg"
            alt="github"
            className="hidden dark:block cursor-pointer"
            onClick={() => window.open("https://github.com/antinomyhq/forge", "_blank")}
          />
          <img
            src="/icons/basic/xlogo-light.svg"
            alt="xlogo"
            className="dark:hidden block cursor-pointer"
            onClick={() => window.open("https://x.com/forgecodehq", "_blank")}
          />
          <img
            src="/icons/basic/DiscordLogo-light.svg"
            alt="discord"
            className="dark:hidden block cursor-pointer"
            onClick={() => window.open("https://discord.com/invite/kRZBPpkgwq", "_blank")}
          />
          <img
            src="/icons/basic/linkedin-light.svg"
            alt="linkedin"
            className="dark:hidden block cursor-pointer"
            onClick={() => window.open("https://www.linkedin.com/company/forgecodehq", "_blank")}
          />
          <img
            src="/icons/basic/GithubLogo-light.svg"
            alt="github"
            className="dark:hidden block cursor-pointer"
            onClick={() => window.open("https://github.com/antinomyhq/forge", "_blank")}
          />
        </div>
      </div>
      <div className="bg-tailCall-lightMode---primary-600 dark:bg-tailCall-lightMode---primary-400 h-2 w-full absolute left-0 bottom-0 z-50"></div>
    </footer>
  )
}

export default Footer
