import React from "react"
import clsx from "clsx"

interface SocialLink {
  platform: "twitter" | "github" | "linkedin" | "website"
  url: string
}

interface AuthorDisplayProps {
  author: {
    name?: string
    title?: string
    imageURL?: string
    url?: string
    social?: SocialLink[]
  }
  containerClassName?: string
  textClassName?: string
  disableLinks?: boolean // New prop to disable links when inside clickable containers
}

// Social media icons as SVG components
const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const WebsiteIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "twitter":
      return <TwitterIcon />
    case "github":
      return <GitHubIcon />
    case "linkedin":
      return <LinkedInIcon />
    case "website":
      return <WebsiteIcon />
    default:
      return <WebsiteIcon />
  }
}

// Function to render title with markdown-style links
const renderTitleWithLinks = (title: string) => {
  // Match markdown-style links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(title)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(title.slice(lastIndex, match.index))
    }

    // Add the link
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {match[1]}
      </a>,
    )

    lastIndex = linkRegex.lastIndex
  }

  // Add remaining text
  if (lastIndex < title.length) {
    parts.push(title.slice(lastIndex))
  }

  return parts.length > 1 ? parts : title
}

export const BlogAuthor: React.FC<AuthorDisplayProps> = ({
  author,
  containerClassName,
  textClassName,
  disableLinks = false,
}) => (
  <div className={clsx("flex items-center gap-3", containerClassName)}>
    {/* Author Avatar - Centered vertically to content height */}
    <div className="flex-shrink-0">
      <img
        src={author.imageURL}
        alt={author.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-sm"
      />
    </div>

    {/* Author Info */}
    <div className="flex-1 min-w-0">
      {/* Author Name */}
      <div className="mb-1">
        {author.url && !disableLinks ? (
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "font-semibold text-gray-900 hover:text-blue-600 transition-colors no-underline",
              textClassName,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {author.name}
          </a>
        ) : (
          <span className={clsx("font-semibold text-gray-900", textClassName)}>{author.name}</span>
        )}
      </div>

      {/* Author Title */}
      {author.title && (
        <div className="text-sm text-gray-600 leading-relaxed mb-1">{renderTitleWithLinks(author.title)}</div>
      )}

      {/* Social Links */}
      {author.social && author.social.length > 0 && !disableLinks && (
        <div className="flex items-center gap-1.5">
          {author.social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors p-0.5 hover:bg-gray-100 rounded"
              aria-label={`${author.name} on ${social.platform}`}
              onClick={(e) => e.stopPropagation()}
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
)
