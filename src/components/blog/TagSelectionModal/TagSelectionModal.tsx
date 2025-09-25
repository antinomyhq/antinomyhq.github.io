import React, {useEffect, useMemo, useState, ChangeEvent} from "react"
import clsx from "clsx"
import {X, Search} from "lucide-react"
import styles from "./styles.module.css"
import Chip from "../../shared/Chip"
import {useHistory} from "@docusaurus/router"
import {usePluginData} from "@docusaurus/useGlobalData"

// --- Types ---
interface TagSelectionModalProps {
  open: boolean
  onClose?: () => void
}

interface BlogTag {
  label: string
  permalink: string
  inline: boolean
  items: string[]
}

// --- Helper Functions ---
const getTopTags = (tags: BlogTag[], count: number): BlogTag[] =>
  [...tags].sort((a, b) => b.items.length - a.items.length).slice(0, count)

const filterTags = (tags: BlogTag[], query: string): BlogTag[] => {
  const lowerQuery = query.toLowerCase()
  return tags.filter((tag) => tag.label.toLowerCase().startsWith(lowerQuery))
}

// --- Component ---
const TagSelectionModal: React.FC<TagSelectionModalProps> = ({open, onClose}) => {
  const [query, setQuery] = useState("")
  const history = useHistory()

  // Type the plugin data
  const {blogTags} = usePluginData("docusaurus-plugin-content-blog") as {
    blogTags: Record<string, BlogTag>
  }

  const allTags = useMemo(() => Object.values(blogTags), [blogTags])
  const mostTalkedAbout = useMemo(() => getTopTags(allTags, 5), [allTags])
  const searchResults = useMemo(() => (query ? filterTags(allTags, query) : []), [query, allTags])

  // Lock scroll on open
  useEffect(() => {
    if (typeof window === "undefined") return
    document.body.style.overflow = open ? "hidden" : "visible"
  }, [open])

  const handleClose = () => {
    setQuery("")
    onClose?.()
  }

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleChipClick = (permalink: string) => {
    handleClose()
    history.push(permalink)
  }

  return open ? (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "block lg:hidden fixed inset-0 bg-black dark:bg-white bg-opacity-50 dark:bg-opacity-50",
          styles.modalOverlay,
        )}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={clsx(
          "absolute w-full lg:w-4/12 h-full right-0 bg-tailCall-light-1200 dark:bg-black rounded-xl lg:rounded-none lg:border lg:border-solid border-t-transparent dark:lg:border-tailCall-lightMode---neutral-600 lg:border-tailCall-lightMode---neutral-300 px-4 py-8 lg:px-10 lg:py-8 flex flex-col gap-8",
          styles.modalContainer,
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-title-medium !font-normal font-kanit lg:text-title-large text-black dark:text-white">
            Explore All Tags
          </span>
          <X width={24} height={24} className="cursor-pointer" onClick={handleClose} />
        </div>

        <div className="flex flex-col gap-5 pb-36">
          {/* Search Bar */}
          <div className="flex items-center gap-3 border border-solid border-tailCall-border-light-500 rounded-lg py-2 px-6">
            <Search width={20} height={20} className="text-tailCall-light-500" />
            <input
              name="tag"
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search Tags"
              className="text-black dark:text-white placeholder:text-tailCall-light-500 bg-transparent border-none outline-none font-kanit text-content-small"
            />
          </div>

          {/* Tag Results */}
          <div className="overflow-scroll max-h-[70vh]">
            <div className="flex flex-wrap gap-2 font-kanit">
              {query.length === 0 ? (
                <div className="flex flex-col gap-2">
                  <p>Most talked about</p>
                  <div className="flex flex-wrap gap-2">
                    {mostTalkedAbout.map((tag) => (
                      <Chip key={tag.label} label={tag.label} onClick={() => handleChipClick(tag.permalink)} />
                    ))}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <p>No tags found</p>
              ) : (
                searchResults.map((tag) => (
                  <Chip key={tag.label} label={tag.label} onClick={() => handleChipClick(tag.permalink)} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null
}

export default TagSelectionModal
