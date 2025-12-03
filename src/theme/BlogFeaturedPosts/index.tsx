import React from "react"
import Link from "@docusaurus/Link"
import type {Props} from "@theme/BlogListPage"
import {BlogAuthor} from "../BlogAuthor"

function BlogFeaturedPosts({items}: {items: Props["items"]}): JSX.Element {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl mb-5 font-bold text-terminal-green-primary terminal-glow font-mono">Featured Posts</h2>
      <div className="flex flex-col gap-8">
        {items.map((post, index) => (
          <Link
            to={post.content.metadata.permalink}
            key={index}
            className="flex flex-col gap-3 text-terminal-text-primary !no-underline hover:text-terminal-green-primary transition-colors"
          >
            <div className="flex items-center gap-2">
              {post.content.metadata.authors[0] && (
                <BlogAuthor author={post.content.metadata.authors[0]} textClassName="text-content-tiny" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-title-tiny text-terminal-text-primary font-mono">{post.content.metadata.title}</span>
              <span className="text-content-small text-terminal-text-secondary line-clamp-1 font-mono">
                {post.content.metadata.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogFeaturedPosts
