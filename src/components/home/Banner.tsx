import React from "react"
import Heading from "@theme/Heading"

import Section from "../shared/Section"
import TerminalWindow from "./TerminalWindow"

const INSTALL_COMMAND = "npx forgecode@latest"

const Banner: React.FC = () => {
  return (
    <main>
      <Section
        className="!pb-0 !pt-8 sm:!pt-12 lg:!pt-16 overflow-hidden !px-0 !max-w-none"
        innerClassName="!max-w-none"
      >
        {/* Two-column layout: Text on left, GIF on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-14 xl:gap-16 items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 animate-fade-in-up text-center lg:text-left items-center lg:items-start w-full">
            <div className="flex flex-col w-full">
              <Heading
                as="h1"
                className="hero-banner-title text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-[1.1] sm:leading-[1.05] font-normal px-2 sm:px-0 font-vt323 tracking-wide"
              >
                <span className="animate-fade-in-up [animation-delay:0.1s] text-tailCall-terminal-text-primary terminal-glow">
                  Token Efficient AI
                </span>{" "}
                <span className=" animate-fade-in-up [animation-delay:0.2s] text-tailCall-terminal-green-primary terminal-glow">
                  in Your Terminal
                </span>
              </Heading>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-tailCall-terminal-text-secondary leading-relaxed sm:leading-relaxed md:leading-loose animate-fade-in-up max-w-xl mx-auto lg:mx-0 px-2 sm:px-0 [animation-delay:0.3s] font-mono">
                Stop context switching. Get AI coding help{" "}
                <span className="font-semibold text-tailCall-terminal-green-primary terminal-glow">directly</span> in
                your terminal without leaving your workflow.
              </p>
            </div>

            {/* Terminal Command - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col gap-2 pt-2 sm:pt-3 md:pt-4 animate-fade-in-up w-full max-w-xl lg:max-w-none [animation-delay:0.4s]">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <TerminalWindow command={INSTALL_COMMAND} showFullTitle={false} />
              </div>
            </div>
          </div>

          {/* Right Column - Demo GIF */}
          <div className="flex items-center justify-center lg:justify-end w-full animate-fade-in-right mt-0 lg:mt-0 [animation-delay:0.5s]">
            <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none relative group">
              {/* Animated terminal green glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tailCall-terminal-green-glow via-transparent to-tailCall-terminal-green-glow opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500"></div>

              <img
                src="https://assets.antinomy.ai/images/forge_demo_2x.gif"
                alt="Forge Code Demo - AI coding assistant in action"
                className="relative w-full h-auto border border-tailCall-terminal-border p-1.5 sm:p-2 bg-tailCall-terminal-bg-primary hover:scale-[1.02] hover:border-tailCall-terminal-green-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(74,222,128,0.1)]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Terminal Command - Shown on mobile below GIF, hidden on desktop */}
        <div className="flex lg:hidden flex-col gap-2 pt-4 animate-fade-in-up w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-8 [animation-delay:0.6s]">
          <TerminalWindow command={INSTALL_COMMAND} showFullTitle={true} />
        </div>
      </Section>
    </main>
  )
}

export default Banner
