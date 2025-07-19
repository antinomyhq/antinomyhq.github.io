import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import BlogRecentPosts from "../BlogRecentPosts"
import type {Props} from "@theme/BlogLayout"

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props
  // Use toc presence to determine if this is a blog post page (SSR-safe)
  // Blog posts have TOC, blog list pages don't
  const isBlogPostPage = !!toc

  return (
    <Layout {...layoutProps}>
      <div className="bg-tailCall-light-1200 dark:bg-black min-h-screen w-full">
        <div className="container mb-10">
          <div className="flex flex-row">
            {isBlogPostPage && <div className="hidden lg:block w-[20%]"></div>}
            <div className={clsx("w-full", isBlogPostPage && "w-[60%] pr-5")}>{children}</div>
            {toc && (
              <div className="hidden lg:block w-20% pl-0 border-[2px] border-l-solid border-tailCall-darkMode---neutral-200 dark:border-tailCall-darkMode---neutral-800">
                <div className="sticky top-[80px]">
                  <div className="pl-0">
                    <div className="pt-[10px]">{toc}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <BlogRecentPosts sidebar={sidebar} />
      </div>
    </Layout>
  )
}
