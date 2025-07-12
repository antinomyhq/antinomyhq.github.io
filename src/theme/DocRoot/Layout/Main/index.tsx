import React from "react"
import clsx from "clsx"
import {useDocsSidebar} from "@docusaurus/plugin-content-docs/client"
import type {Props} from "@theme/DocRoot/Layout/Main"

import styles from "./styles.module.css"

export default function DocRootLayoutMain({hiddenSidebarContainer, children}: Props): JSX.Element {
  const sidebar = useDocsSidebar()
  return (
    <main
      className={clsx(
        "bg-white dark:bg-tailCall-border-dark-700",
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}
    >
      <div
        className={clsx(
          "container padding-bottom--lg bg-white dark:bg-black",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>
    </main>
  )
}
