import React from "react"
import Button from "./Button"
import {NavbarItems} from "@site/src/constants"

const Navbar = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex pt-10 px-5 pb-5 justify-between flex-wrap items-center bg-black lg:justify-between">
      <ul className="font-kanit list-none flex items-center p-0 m-0 gap-SPACE_07 text-white font-normal text-title-small cursor-pointer">
        {NavbarItems.map((nav) => {
          return <li key={nav}>{nav}</li>
        })}
      </ul>
      <div className="flex gap-3">
        <Button variant="navlink" onClick={() => {}}>
          <span>Signup</span>
        </Button>
        <Button variant="navlink" onClick={() => {}}>
          <span>Book a Demo</span>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
