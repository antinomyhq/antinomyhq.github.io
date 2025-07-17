import React from "react"
import {Tweet} from "react-tweet"

interface TweetEmbedProps {
  tweetId: string
  theme?: "light" | "dark" | "auto"
  className?: string
}

/**
 * TweetEmbed component for embedding Twitter/X tweets in blog posts
 * Uses react-tweet by Vercel for better performance and modern features
 *
 * @param tweetId - The tweet ID extracted from the tweet URL
 * @param theme - Theme preference: 'light', 'dark', or 'auto' (default: 'auto')
 * @param className - Additional CSS classes
 */
export const TweetEmbed: React.FC<TweetEmbedProps> = ({tweetId, theme = "auto", className = ""}) => {
  return (
    <div className={`my-6 flex justify-center ${className}`} data-theme={theme !== "auto" ? theme : undefined}>
      <div className="w-full max-w-xl">
        <Tweet id={tweetId} />
      </div>
    </div>
  )
}

export default TweetEmbed
