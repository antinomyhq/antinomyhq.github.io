import Link from "@docusaurus/Link"
import React from "react"

type FooterItemProps = {
  title: string
  items: FooterLink[]
}

const FooterItem = ({title, items}: FooterItemProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-9">
      <span className="font-kanit text-title-tiny text-white opacity-40 font-medium">{title}</span>
      <ul className="m-0 p-0 flex flex-col items-start gap-9 list-none font-kanit text-white text-title-tiny font-[275]">
        {items.map((item) => {
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
    </div>
  )
}

export default FooterItem
