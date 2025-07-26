import React from "react"
import type {Props} from "@theme/BlogListPage"
import BlogListItem from "@site/src/components/blog/BlogListItem"

function EmptyState(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">No blog posts yet</h3>
      <p className="text-gray-600 max-w-md mb-6">
        We're working on creating valuable content for you. Check back soon for our latest articles, insights, and
        updates.
      </p>
      <a
        href="/docs"
        className="px-4 py-2 bg-blue-600 text-tailCall-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Explore our documentation
      </a>
    </div>
  )
}

function BlogPostList({items}: {items: Props["items"]}): JSX.Element {
  if (!items.length) {
    return <EmptyState />
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-3 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const {permalink, date, title, description, authors, tags} = item.content.metadata
        const randomNumber = Math.floor(Math.random() * 6)

        return (
          <BlogListItem
            key={permalink}
            date={date}
            title={title}
            description={description}
            authors={authors}
            permalink={permalink}
            tags={tags}
            bgIndex={randomNumber}
          />
        )
      })}
    </div>
  )
}

export default BlogPostList
