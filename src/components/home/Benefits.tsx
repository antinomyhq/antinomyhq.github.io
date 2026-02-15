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
              Invisible When You Don’t. Powerful When You Do.
            </Heading>
          </div>
        </div>

        {/* Terminal-style wrapper */}
        <div className="ml-0 mt-8">
          <div className="relative group">
            {/* Soft pastel glow effect on hover */}
            <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition duration-700 blur-lg" />

            <div
              className="relative border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{border: "1px dashed #f5f5f02d"}}
            >
              {/* Terminal Header with dark pastel gradient */}
              <div
                className="border-b-2 px-6 py-4 flex items-center"
                style={{
                  borderBottom: "1px dashed #f5f5f02d",
                }}
              >
                <div className="flex items-center gap-2">
                  {/* Pastel control dots */}
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#ff9999"}} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#ffdb99"}} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: "#b4f8c8"}} />
                </div>
              </div>

              {/* Terminal Body with dark pastel background */}
              <div className="p-4" style={{background: "#0000001a"}}>
                <div ref={playerRef} className="asciinema-demo-player" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Benefits
