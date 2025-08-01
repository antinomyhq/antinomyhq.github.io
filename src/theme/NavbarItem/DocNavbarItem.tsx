import React, {type ReactNode} from "react"
import {useActiveDocContext, useLayoutDoc} from "@docusaurus/plugin-content-docs/client"
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem"
import type {Props} from "@theme/NavbarItem/DocNavbarItem"

export default function DocNavbarItem({docId, label: staticLabel, docsPluginId, ...props}: Props): ReactNode {
  const {activeDoc} = useActiveDocContext(docsPluginId)
  const doc = useLayoutDoc(docId, docsPluginId)
  const pageActive = activeDoc?.path === doc?.path

  // Draft and unlisted items are not displayed in the navbar.
  if (doc === null || (doc.unlisted && !pageActive)) {
    return null
  }

  return (
    <DefaultNavbarItem
      exact
      {...props}
      isActive={() => pageActive || (!!activeDoc?.sidebar && activeDoc.sidebar === doc.sidebar)}
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  )
}
