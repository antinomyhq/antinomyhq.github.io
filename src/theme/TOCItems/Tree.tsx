import React, {useEffect, useState} from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"

import styles from "./tocTree.module.css" // ⬅️ add a CSS file like this

type Props = {
  toc: any[]
  className?: string
  linkClassName?: string
  linkActiveClassName?: string
  isChild?: boolean
}

function TOCItemTree({toc, className, linkClassName, linkActiveClassName, isChild}: Props): JSX.Element | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const el = document.querySelector(".table-of-contents__link--active") as HTMLAnchorElement
      if (el?.hash) {
        setActiveId(el.hash.replace("#", ""))
      }
    })

    observer.observe(document.body, {subtree: true, attributes: true})

    return () => observer.disconnect()
  }, [])

  if (!toc.length) return null

  return (
    <ul className={clsx(styles.timeline, !isChild && className)}>
      {toc.map((heading, index) => {
        const isLast = index === toc.length - 1
        const isActive = activeId === heading.id

        return (
          <li className={clsx(styles.item)} key={heading.id}>
            <div
              className={clsx(
                "lg:hidden xl:block",
                styles.dot,
                isActive
                  ? "bg-tailCall-lightMode---primary-600 dark:bg-tailCall-lightMode---primary-400"
                  : "bg-tailCall-darkMode---neutral-300 dark:bg-tailCall-darkMode---neutral-700",
              )}
            />
            {!isLast && <div className={styles.line} />}
            <Link
              to={`#${heading.id}`}
              className={clsx(linkClassName, isActive && linkActiveClassName)}
              dangerouslySetInnerHTML={{__html: heading.value}}
            />
            <TOCItemTree
              isChild
              toc={heading.children}
              className={className}
              linkClassName={linkClassName}
              linkActiveClassName={linkActiveClassName}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(TOCItemTree)
