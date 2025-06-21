import React from "react"
import CopyCodeButton from "../shared/CopyCodeButton"
import Button from "../shared/Button"
import {footerItems} from "@site/src/constants"
import FooterItem from "../shared/FooterItem"

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col gap-14 px-6 py-10">
      <div className="flex justify-between items-start">
        <div>
          <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="cursor-pointer" />
        </div>
        <div className="flex flex-col max-w-[380px]">
          <span className="font-kanit text-title-semi-large font-normal text-white">
            Get started with personal AI Assistant now.
          </span>
          <div className="flex">
            <CopyCodeButton />
            <Button variant="transparent" onClick={() => {}}>
              <span className="font-kanit text-white font-semibold text-title-tiny">Book a demo</span>
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        {footerItems.map(({items, title}) => {
          return <FooterItem key={title} items={items} title={title} />
        })}
      </div>
    </footer>
  )
}

export default Footer
