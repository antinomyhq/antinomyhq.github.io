import React, {useEffect, useState} from "react"
import {useDocsSidebar} from "@docusaurus/plugin-content-docs/client"
import BackToTopButton from "@theme/BackToTopButton"
import DocRootLayoutSidebar from "@theme/DocRoot/Layout/Sidebar"
import DocRootLayoutMain from "@theme/DocRoot/Layout/Main"
import type {Props} from "@theme/DocRoot/Layout"
import ReactGA from "react-ga4"

import styles from "./styles.module.css"
import clsx from "clsx"
import {useLocation} from "@docusaurus/router"

export default function DocRootLayout({children}: Props): JSX.Element {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname, title: "Docs Page"})
  })

  const sidebar = useDocsSidebar()
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false)
  return (
    <div className={styles.docsWrapper}>
      {/* <BackToTopButton /> */}
      <div className={clsx(styles.docRoot, "bg-tailCall-light-1200 dark:bg-black")}>
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocRootLayoutMain>
      </div>
    </div>
  )
}
