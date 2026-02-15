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

        {/* Terminal-style wrapper */}
        <div className="relative group">
          {/* Soft pastel glow effect on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/20 via-pink-300/15 to-blue-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-700 blur-lg" />

          <div
            className="relative border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{borderColor: "#4a4a5a"}}
          >
            {/* Terminal Header with dark pastel gradient */}
            <div
              className="border-b-2 px-6 py-2.5 flex items-center"
              style={{
                background: "linear-gradient(135deg, rgb(30 31 32) 0%, rgb(40 40 43) 100%)",
                borderColor: "#4a4a5a",
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
            <div
              className="p-4"
              style={{
                background: "linear-gradient(135deg, rgb(41 42 45) 0%, rgb(54 54 56) 100%)",
              }}
            >
              <div ref={playerRef} className="asciinema-demo-player" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCast
