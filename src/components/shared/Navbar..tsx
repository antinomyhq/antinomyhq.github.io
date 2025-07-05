import React from "react"
import Button from "./Button"
import {NavbarItems} from "@site/src/constants"
import {Menu} from "lucide-react"
import Link from "@docusaurus/Link"

const Navbar = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex md:pt-10 md:px-5 md:pb-5 md:justify-end flex-wrap items-center bg-black lg:justify-between ">
      <ul className="hidden lg:flex font-kanit list-none items-center p-0 m-0 gap-SPACE_07 text-white font-normal text-title-small cursor-pointer">
        {NavbarItems.map((item) => {
          return (
            <Link
              className="text-white no-underline hover:no-underline hover:text-white"
              href={item.link}
              key={item.name}
            >
              {item.name}
            </Link>
          )
        })}
      </ul>
      <div className="flex justify-between w-full md:w-auto p-5 md:p-0 items-center md:self-end gap-3">
        <div className="flex md:hidden">
          <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="cursor-pointer" />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="navlink" onClick={() => {}}>
            <span>Signup</span>
          </Button>
          <Button variant="navlink" onClick={() => {}}>
            <span>Book a Demo</span>
          </Button>
        </div>
        <div className="flex lg:hidden bg-tailCall-cyan rounded p-3 items-center justify-center cursor-pointer">
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
