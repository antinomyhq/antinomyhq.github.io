import React, {useEffect, useRef} from "react"

const VideoCast: React.FC = () => {
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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">See Forge in Action</h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          Watch how Forge helps you code smarter and faster
        </p>
        <div ref={playerRef} className="asciinema-demo-player" />
      </div>
    </div>
  )
}

export default VideoCast
