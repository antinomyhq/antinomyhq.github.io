import React, {useMemo, type ReactNode} from "react"
import DefaultNavbarItemMobile from "@theme/NavbarItem/DefaultNavbarItem/Mobile"
import DefaultNavbarItemDesktop from "@theme/NavbarItem/DefaultNavbarItem/Desktop"
import type {Props} from "@theme/NavbarItem/DefaultNavbarItem"
import {useLocation} from "@docusaurus/router"

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): ReactNode {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop

  const {pathname} = useLocation()

  const isActive = useMemo(() => {
    if (props.to === "/") {
      return pathname === "/"
    }
    return pathname === props.to || pathname.startsWith(`${props.to}/`)
  }, [pathname, props.to])

  const ACTIVE_CLASS = isActive ? props.activeClassName ?? (mobile ? "menu__link--active" : "navbar__link--active") : ""

  return <Comp {...props} activeClassName={ACTIVE_CLASS} />
}
