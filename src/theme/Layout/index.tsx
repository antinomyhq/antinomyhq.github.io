import React from "react"
import clsx from "clsx"
import ErrorBoundary from "@docusaurus/ErrorBoundary"
import {PageMetadata, SkipToContentFallbackId, ThemeClassNames} from "@docusaurus/theme-common"
import {useKeyboardNavigation} from "@docusaurus/theme-common/internal"
import SkipToContent from "@theme/SkipToContent"
import AnnouncementBar from "@theme/AnnouncementBar"
import Navbar from "@theme/Navbar"
import LayoutProvider from "@theme/Layout/Provider"
import ErrorPageContent from "@theme/ErrorPageContent"
import type {Props} from "@theme/Layout"
import styles from "./styles.module.css"
import GlobalLayout from "@site/src/components/shared/GlobalLayout"
import Announcement from "@site/src/components/shared/Announcement"
import {FloatingCta} from "@site/src/components/cta"
import {useLocation} from "@docusaurus/router"
import {ThemeProvider} from "../ThemeProvider/ThemeProvider"
import Footer from "@site/src/components/home/Footer"

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props

  const location = useLocation()
  useKeyboardNavigation()

  const targetDate = new Date("2024-12-31T23:59:59-08:00") // Dec 31, 2025 - announcement visible until end of year
  const currentDate = new Date()
  const hasAnnouncement = currentDate < targetDate

  return (
    <LayoutProvider>
      <ThemeProvider>
        <GlobalLayout />

        <PageMetadata title={title} description={description} />

        <SkipToContent />

        <AnnouncementBar />

        {hasAnnouncement && (
          <div className="sticky top-0 z-50">
            <Announcement
              text="⚡ Stop paying $20/month for AI coding – Forge Code is 100% FREE"
              refLink="https://app.forgecode.dev/app/"
              refText="Get Started →"
              variant="gradient"
            />
          </div>
        )}

        <Navbar />

        <div
          id={SkipToContentFallbackId}
          className={clsx(
            ThemeClassNames.wrapper.main,
            styles.mainWrapper,
            wrapperClassName,
            `${location.pathname !== "/" ? "mt-[81px]" : "mt-auto"}`,
            `${location.pathname !== "/" ? "mb-[100px]" : ""}`,
          )}
        >
          <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>{children}</ErrorBoundary>
        </div>

        {!noFooter && <Footer />}

        {/* <FloatingCta /> */}
      </ThemeProvider>
    </LayoutProvider>
  )
}
