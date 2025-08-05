import React, {type ReactNode} from "react"
import {useNavbarMobileSidebar} from "@docusaurus/theme-common/internal"
import {translate} from "@docusaurus/Translate"
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle"
import IconClose from "@theme/Icon/Close"
import NavbarLogo from "@theme/Navbar/Logo"
import {X} from "lucide-react"

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar()
  return (
    <button
      type="button"
      aria-label={translate({
        id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
        message: "Close navigation bar",
        description: "The ARIA label for close button of mobile sidebar",
      })}
      className="clean-btn navbar-sidebar__close !bg-tailCall-lightMode---primary-700 dark:!bg-tailCall-darkMode---primary-400 rounded p-2 text-white"
      onClick={() => mobileSidebar.toggle()}
    >
      <X className="text-white dark:text-black !h-5 !w-5" />
    </button>
  )
}

export default function NavbarMobileSidebarHeader(): ReactNode {
  return (
    <div className="relative navbar-sidebar__brand !h-[72px] dark:bg-black bg-[radial-gradient(40.27%_100.55%_at_50%_100%,_rgba(48,237,230,0.5)_0%,_rgba(0,0,0,0)_100%)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[.6px] after:bg-[linear-gradient(90deg,rgba(212,212,212,1)_0%,rgba(0,206,201,1)_62%,rgba(212,212,212,1)_100%)] after:dark:bg-[linear-gradient(90deg,rgba(75,75,75,1)_0%,rgba(0,206,201,1)_62%,rgba(75,75,75,1)_100%)]">
      <NavbarLogo />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  )
}
