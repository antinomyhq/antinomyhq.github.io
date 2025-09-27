"use client"
import React, {useEffect} from "react"
import styles from "./ElevenLabsAudioPlayer.module.css"

export type ElevenLabsAudioPlayerProps = {
  publicUserId: string
  projectId?: string // Keep this for project-specific content
  textColorRgba?: string
  backgroundColorRgba?: string
  size?: "small" | "large"
  className?: string
  children?: React.ReactNode
}

export const ElevenLabsAudioPlayer = ({
  publicUserId,
  projectId,
  size = "small",
  textColorRgba,
  backgroundColorRgba,
  className = "",
  children,
}: ElevenLabsAudioPlayerProps) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://elevenlabs.io/player/audioNativeHelper.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Only remove if script still exists to avoid errors
      try {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      } catch (error) {
        // Silently handle removal errors
        console.warn("Script removal failed:", error)
      }
    }
  }, [])

  return (
    <div className={`${styles.elevenLabsAudioPlayer} ${className}`}>
      <div
        id="elevenlabs-audionative-widget"
        data-height={size === "small" ? "90" : "120"}
        data-width="100%"
        data-frameborder="no"
        data-scrolling="no"
        data-publicuserid={publicUserId}
        data-playerurl="https://elevenlabs.io/player/index.html"
        data-small={size === "small" ? "True" : "False"}
        data-textcolor={textColorRgba ?? "rgba(0, 0, 0, 1.0)"}
        data-backgroundcolor={backgroundColorRgba ?? "#f5f3eb"}
        {...(projectId && {"data-projectid": projectId})} // Add projectId if provided
      >
        {children ? children : "Elevenlabs AudioNative Player"}
      </div>
    </div>
  )
}

export default ElevenLabsAudioPlayer
