import React from "react"
import Link from "@docusaurus/Link"
import type {Props} from "@theme/PaginatorNavLink"
import {ArrowRight} from "lucide-react"
import {ArrowLeft} from "lucide-react"

function NavigatorIcon({isNext}: {isNext: boolean}): JSX.Element {
  return (
    <div className="w-10 h-10 p-2 bg-terminal-bg-primary border border-terminal-border flex justify-center items-center hover:border-terminal-green-primary hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
      {isNext ? (
        <ArrowRight size={24} className="text-terminal-green-primary" />
      ) : (
        <ArrowLeft size={24} className="text-terminal-green-primary" />
      )}
    </div>
  )
}

export default function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel, isNext} = props
  return (
    <Link className="!no-underline flex gap-3 items-center" to={permalink}>
      {!isNext && <NavigatorIcon isNext={isNext!} />}
      <div className="hidden md:block">
        {subLabel && <div className="pagination-nav__sublabel text-[12px] font-medium">{subLabel}</div>}
        <div className="pagination-nav__label text-content-small font-medium">{title}</div>
      </div>
      {isNext && <NavigatorIcon isNext={isNext} />}
    </Link>
  )
}
