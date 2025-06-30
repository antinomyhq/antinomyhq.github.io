import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"
import Button from "../shared/Button"
import {footerItems} from "@site/src/constants"
import FooterItem from "../shared/FooterItem"

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col gap-14 px-6 py-10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-start">
        <div className="flex flex-col gap-10">
          <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="cursor-pointer" />
          <div className="flex gap-5">
            <img src="/icons/basic/xlogo.svg" alt="xlogo" />
            <img src="/icons/basic/facebook.svg" alt="facebook" />
            <img src="/icons/basic/linkedin.svg" alt="linkedin" />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[340px]">
          <span className="font-kanit text-title-small xl:font-normal xl:text-title-semi-large font-normal text-white md:text-end">
            Get started with personal AI Assistant now.
          </span>
          <div className="flex justify-between gap-5 items-start flex-col md:items-end">
            <Button variant="transparent" onClick={() => {}}>
              <span className="font-kanit text-white font-semibold text-title-tiny">Book a demo</span>
            </Button>
            <CopyCodeButton />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between gap-5 flex-wrap">
        {footerItems.map(({items, title}) => {
          return <FooterItem key={title} items={items} title={title} />
        })}
      </div>
    </footer>
  )
}

export default Footer
