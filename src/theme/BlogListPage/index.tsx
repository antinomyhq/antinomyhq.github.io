import React, {useEffect} from "react"
import clsx from "clsx"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import type {Props} from "@theme/BlogListPage"
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData"
import BlogFeaturedPosts from "../BlogFeaturedPosts"
import BlogPostList from "../BlogPostList"
import {BlogCategories} from "../BlogCategories"
import {useBlogPosts} from "@site/src/utils/hooks/useBlogPosts"
import {FrontMatter} from "@theme/BlogPostPage"
import {useLocation} from "@docusaurus/router"
import ReactGA from "react-ga4"
import SpotlightSpan from "@site/src/components/home/SpotlightCursor"

function BlogListPageMetadata(props: Props): JSX.Element {
  const {metadata} = props
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext()
  const {blogDescription, blogTitle, permalink} = metadata
  const isBlogOnlyMode = permalink === "/"
  const title = isBlogOnlyMode ? siteTitle : blogTitle
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  )
}

function LoadMoreButton({handleLoadMore}: {handleLoadMore: () => void}): JSX.Element {
  return (
    <div className="flex justify-center">
      <button
        onClick={handleLoadMore}
        className={`
          mt-10
          rounded-[12px]
          px-4 py-3 sm:px-6 lg:px-8 sm:py-5 lg:py-6
          cursor-pointer
          transition-all duration-300
          text-[18px]
          border border-solid border-tailCall-lightMode---primary-700 dark:border-tailCall-lightMode---primary-400
          text-tailCall-lightMode---primary-700 dark:text-tailCall-lightMode---primary-400 hover:text-white hover:dark:text-black
          bg-transparent hover:bg-tailCall-lightMode---primary-700 hover:dark:bg-tailCall-lightMode---primary-400 
        `
        } 
        >
        Load More Blogs
      </button>
    </div>
  )
}

function BlogListPageContent({metadata, items, sidebar}: Props): JSX.Element {
  const {activeCategory, visibleItems, filteredItems, handleCategoryClick, handleLoadMore} = useBlogPosts(items)
  const featuredItems = items.filter((post) => (post.content.frontMatter as FrontMatter & {featured: boolean}).featured)

  return (
    <BlogLayout sidebar={sidebar}>
      <div className="flex flex-col md:flex-row items-start w-full">
        <div className={clsx("w-full md:w-9/12 md:pr-5", featuredItems.length == 0 ? "md:w-full" : "border-right")}>
          <div className="flex flex-col lg:gap-0 items-start xl:items-center xl:flex-row justify-between w-full py-5 px-2 md:px-0 mt-12">
            <div className="flex flex-col mt-2">
              <SpotlightSpan
                className="font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
                text="From the Terminal"
                showHighlighted
              />
              <SpotlightSpan
                className="-mt-8 md:-mt-5 lg:-mt-4 xl:-mt-8 font-bebas !font-normal text-[45px] md:text-display-small lg:text-display-medium xl:text-display-large-semi tracking-normal"
                text="to the World"
                showHighlighted
              />
            </div>
            <span className="block -mt-5 md:mt-0 max-w-[500px] xl:mt-20 font-kanit !font-normal lg:leading-8 xl:leading-[32px] text-[16px] md:text-title-small lg:text-[24px] xl:text-[26px] text-tailCall-darkMode---neutral-500 tracking-normal">
              Insights, updates, and thoughts on building faster with AI in the CLI
            </span>
          </div>
          <BlogCategories items={items} onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
          <BlogPostList items={filteredItems.slice(0, visibleItems)} />
          {visibleItems < filteredItems.length && <LoadMoreButton handleLoadMore={handleLoadMore} />}
          <BlogListPaginator metadata={metadata} />
        </div>
        {featuredItems.length > 0 ? (
          <div className="w-full md:w-3/12 hidden md:block md:pl-5 featured-posts-container bg-white dark:bg-black">
            <BlogFeaturedPosts items={featuredItems} />
          </div>
        ) : null}
      </div>
    </BlogLayout>
  )
}

export default function BlogListPage(props: Props): JSX.Element {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname, title: "Blog Page"})
  }, [])

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
