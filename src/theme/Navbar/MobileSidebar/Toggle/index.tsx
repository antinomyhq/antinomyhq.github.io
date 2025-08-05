import React, {type ReactNode} from "react"
import {useNavbarMobileSidebar} from "@docusaurus/theme-common/internal"
import {translate} from "@docusaurus/Translate"
import IconMenu from "@theme/Icon/Menu"
import {Menu} from "lucide-react"

export default function MobileSidebarToggle(): ReactNode {
  const {toggle, shown} = useNavbarMobileSidebar()
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description: "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn !bg-tailCall-lightMode---primary-700 dark:!bg-tailCall-darkMode---primary-400 rounded p-[9px] ml-1"
      type="button"
    >
      <Menu className="text-white dark:text-black h-5 w-5" />
    </button>
  )
}
