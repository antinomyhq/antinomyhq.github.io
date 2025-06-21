import React from "react"
import Button from "../shared/Button"

const Aside = (): JSX.Element => {
  return (
    <aside className="relative flex flex-col border-r border-solid border-r-tailCall-border-dark-800 h-screen">
      <div className="pt-10 px-8">
        <img src="/images/home/logo-light.svg" alt="Logo" width={141} className="cursor-pointer" />
      </div>
      <div className="mt-[600px] bg-tailCall-border-dark-800 h-[1px] w-auto"></div>
      <div className="absolute bottom-0 flex w-full">
        <Button onClick={() => {}} variant="keyboard">
          <img src="/images/home/keyboard.svg" alt="keyboard" />
        </Button>
        <Button onClick={() => {}} variant="keyboard">
          <img src="/images/home/dots-three.svg" alt="keyboard" />
        </Button>
      </div>
    </aside>
  )
}

export default Aside
