import React from "react"
import {VerticalBadge} from "../components/VerticalBadge"

const FloatingWidget = () => {
  return (
    <>
      <VerticalBadge
        icon={<span>P</span>}
        bgColor="#632F2F"
        rightOffset="-right-14"
        top="top-[170px]"
        title="Featured on"
        subtitle="Product Hunt"
      />
      <VerticalBadge
        icon={<img src="/icons/basic/GithubLogo.svg" alt="Github Logo" />}
        bgColor="#545454"
        rightOffset="-right-14"
        top="top-[340px]"
        title="Featured on"
        subtitle="Github"
      />
    </>
  )
}

export default FloatingWidget
