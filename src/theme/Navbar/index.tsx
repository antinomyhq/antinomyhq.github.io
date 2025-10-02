import React from "react"
import OriginalNavbar from "@theme-original/Navbar"

export default function Navbar(props: any): JSX.Element {
  return (
    <div className="sticky top-0 z-[100]">
      <OriginalNavbar {...props} />
    </div>
  )
}
