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
      <div className="w-full px-4 mx-auto mt-3 mb-10 md:my-8 max-w-7xl">
        <div className="flex flex-row">
          {isBlogPostPage && <div className="hidden lg:block lg:w-[20.83%]"></div>}
          <div className={clsx("w-full", isBlogPostPage && "lg:w-[58.33%]")}>{children}</div>
          {toc && (
            <div className="hidden lg:block lg:w-[20.83%] pl-8 mt-12">
              <div className="sticky top-28">
                <div className="border-l-solid border-gray-200 pl-4">{toc}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BlogRecentPosts sidebar={sidebar} />
    </Layout>
  )
}
