import React from "react"
import clsx from "clsx"
import {ThemeClassNames} from "@docusaurus/theme-common"
import {isActiveSidebarItem} from "@docusaurus/plugin-content-docs/client"
import Link from "@docusaurus/Link"
import isInternalUrl from "@docusaurus/isInternalUrl"
import IconExternalLink from "@theme/Icon/ExternalLink"
import type {Props} from "@theme/DocSidebarItem/Link"

import styles from "./styles.module.css"

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): JSX.Element {
  const {href, label, className, autoAddBaseUrl} = item
  const isActive = isActiveSidebarItem(item, activePath)
  const isInternalLink = isInternalUrl(href)
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className,
      )}
      key={label}
    >
      <Link
        className={clsx(
          "hover:dark:text-white transition-colors duration-200",
          "menu__link",
          !isInternalLink && styles.menuExternalLink,
          {
            "menu__link--active": isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  )
}
