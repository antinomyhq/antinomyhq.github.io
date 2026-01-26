import React from "react"
import {Github, MessageCircle, BookOpen} from "lucide-react"

interface CommunityLink {
  name: string
  href: string
  icon: React.ReactNode
  description: string
}

const communityLinks: CommunityLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/antinomyhq/forge",
    icon: <Github size={20} />,
    description: "Star us on GitHub",
  },
  {
    name: "Discord",
    href: "#", // Replace with actual Discord invite
    icon: <MessageCircle size={20} />,
    description: "Join our community",
  },
  {
    name: "Docs",
    href: "/docs",
    icon: <BookOpen size={20} />,
    description: "Read the documentation",
  },
]

const CommunityLinks = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      {communityLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-2 px-3 py-2 text-sm text-tailCall-terminal-text-secondary hover:text-tailCall-terminal-green-primary hover:bg-tailCall-terminal-bg-secondary transition-colors duration-200 font-mono border border-tailCall-terminal-border"
          title={link.description}
        >
          {link.icon}
          <span className="hidden sm:inline">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default CommunityLinks
