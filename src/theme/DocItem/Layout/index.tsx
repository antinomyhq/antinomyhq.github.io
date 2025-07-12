import React from "react"
import clsx from "clsx"
import {useWindowSize} from "@docusaurus/theme-common"
import {useDoc} from "@docusaurus/plugin-content-docs/client"
import DocItemPaginator from "@theme/DocItem/Paginator"
import DocVersionBanner from "@theme/DocVersionBanner"
import DocVersionBadge from "@theme/DocVersionBadge"
import DocItemFooter from "@theme/DocItem/Footer"
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile"
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop"
import DocItemContent from "@theme/DocItem/Content"
import DocBreadcrumbs from "@theme/DocBreadcrumbs"
import styles from "./styles.module.css"
import Giscus from "@giscus/react"
import {useThemeContext} from "../../ThemeProvider/ThemeProvider"

interface DocItemLayoutProps {
  children: React.JSX.Element
}

function useDocTOC() {
  const {frontMatter, toc} = useDoc()
  const windowSize = useWindowSize()
  const hidden = frontMatter.hide_table_of_contents
  const canRender = !hidden && toc.length > 0
  const mobile = canRender ? <DocItemTOCMobile /> : undefined
  const desktop = canRender && (windowSize === "desktop" || windowSize === "ssr") ? <DocItemTOCDesktop /> : undefined
  return {
    hidden,
    mobile,
    desktop,
  }
}

export default function DocItemLayout({children}: DocItemLayoutProps) {
  const {theme} = useThemeContext()
  const docTOC = useDocTOC()
  const giscus = (
    <div className="min-h-[450px]">
      <hr />
      <br />
      <Giscus
        id="comments"
        repo="antinomyhq/antinomyhq.github.io"
        repoId="R_kgDON_Fcyw"
        category="General"
        categoryId="DIC_kwDON_Fcy84CnUHb"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={theme === "dark" ? "dark" : "light"}
        lang="en"
        strict="0"
        loading="lazy"
      />
    </div>
  )
  return (
    <div className="row pb-10">
      <div className={clsx("col pt-2 md:pt-6 xl:pt-2", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          {giscus}
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  )
}
