import React from "react"
import clsx from "clsx"
import ErrorBoundary from "@docusaurus/ErrorBoundary"
import {PageMetadata, SkipToContentFallbackId, ThemeClassNames} from "@docusaurus/theme-common"
import {useKeyboardNavigation} from "@docusaurus/theme-common/internal"
import SkipToContent from "@theme/SkipToContent"
import AnnouncementBar from "@theme/AnnouncementBar"
import Navbar from "@theme/Navbar"
import Footer from "@theme/Footer"
import LayoutProvider from "@theme/Layout/Provider"
import ErrorPageContent from "@theme/ErrorPageContent"
import type {Props} from "@theme/Layout"
import styles from "./styles.module.css"
import GlobalLayout from "@site/src/components/shared/GlobalLayout"
import Announcement from "@site/src/components/shared/Announcement"
import {FloatingCta} from "@site/src/components/cta"

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props

  useKeyboardNavigation()

  const targetDate = new Date("2025-12-31T23:59:59-08:00") // Dec 31, 2025 - announcement visible until end of year
  const currentDate = new Date()
  const hasAnnouncement = currentDate < targetDate

  return (
    <LayoutProvider>
      <GlobalLayout />

      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      {hasAnnouncement && (
        <div>
          <Announcement refLink="https://openrouter.ai/rankings" refText={<>View Rankings →</>} variant="gradient">
            <i className="fas fa-trophy mr-1"></i> #1 CLI Coding Agent on OpenRouter • Over 1 billion tokens processed
            every day.
          </Announcement>
        </div>
      )}

      <div
        id={SkipToContentFallbackId}
        className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>{children}</ErrorBoundary>
      </div>

      {!noFooter && <Footer />}

      {/* <FloatingCta /> */}
    </LayoutProvider>
  )
}
