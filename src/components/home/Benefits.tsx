import React, {useEffect, useRef} from "react"
import Heading from "@theme/Heading"
import SectionTitle from "../shared/SectionTitle"
import Section from "../shared/Section"

const Benefits = (): JSX.Element => {
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import the player to avoid SSR issues
    import("asciinema-player").then((AsciinemaPlayer) => {
      if (playerRef.current) {
        AsciinemaPlayer.create("/react-demo.cast", playerRef.current, {
          autoPlay: true,
          loop: true,
          speed: 2,
          controls: false,
          theme: "nord",
          fit: "width",
          terminalFontFamily: "'JetBrainsMono Nerd Font', 'JetBrains Mono', monospace",
          terminalFontSize: "medium",
        })
      }
    })
  }, [])

  return (
    <div className="bg-[#1C1D1F] grid-background text-tailCall-white">
      <Section>
        <div>
          <SectionTitle title="Why Forge?" />
          <div className="h-fit sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20 mb-8">
            <Heading as="h3" className="text-title-large sm:text-display-tiny lg:text-display-small">
              Native <b>zsh</b> integration. Run directly from the terminal.
            </Heading>
          </div>
        </div>
        <div className="ml-0 mt-8">
          <div ref={playerRef} className="asciinema-demo-player" />
        </div>
      </Section>
    </div>
  )
}

export default Benefits
