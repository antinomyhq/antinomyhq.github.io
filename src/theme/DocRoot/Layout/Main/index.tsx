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
        "bg-tailCall-light-1200 dark:bg-tailCall-border-dark-700 width-[80%]",
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}
    >
      <div
        className={clsx(
          "pl-[16px] padding-bottom--lg bg-tailCall-light-1200 dark:bg-black w-full",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>
    </main>
  )
}
