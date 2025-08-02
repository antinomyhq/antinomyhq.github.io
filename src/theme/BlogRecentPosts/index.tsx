import React, {useEffect} from "react"
import {useLocation} from "@docusaurus/router"
import type {Props} from "@theme/BlogLayout"
import {isBlogPost} from "@site/src/utils"
import {usePluginData} from "@docusaurus/useGlobalData"
import BlogListItem from "@site/src/components/blog/BlogListItem"
import {assignBgIndices} from "@site/src/utils/blogColorUtils"

export default function BlogRecentPosts({sidebar}: {sidebar: Props["sidebar"]}): JSX.Element {
  const [isBlogPostPage, setIsBlogPostPage] = React.useState(false)
  const location = useLocation()

  const {recentBlogPostsMetadata} = usePluginData("docusaurus-plugin-content-blog") as any

  useEffect(() => {
    setIsBlogPostPage(isBlogPost())
  }, [location.pathname])

  const permalink = recentBlogPostsMetadata?.slice(0, 3).map((item: RecentBlogPostItem) => item.permalink)
  const blogColorMap = assignBgIndices(permalink)

  return isBlogPostPage ? (
    <div className="">
      <div className="mx-[5%] lg:ml-[15%] lg:mr-[17%]">
        <div className="">
          <hr className="h-[1px]" />
          <h1 className="text-[22px] text-tailCall-lightMode---primary-700 dark:text-tailCall-darkMode---primary-400 font-medium">
            Recent Blog Posts
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-3 mb-10 md:mb-20">
            {recentBlogPostsMetadata?.slice(0, 3).map((item: RecentBlogPostItem) => {
              const {permalink, date, title, description, authors, tags} = item
              const bgIndex = blogColorMap[permalink] ?? 0
              return (
                <BlogListItem
                  key={permalink}
                  date={date}
                  title={title}
                  description={description}
                  authors={authors}
                  permalink={permalink}
                  tags={tags}
                  bgIndex={bgIndex}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
