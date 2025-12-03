import React, {useState} from "react"
import Heading from "@theme/Heading"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies, useCases} from "@site/src/constants"

const WhyChooseForge = (): JSX.Element => {
  const [selectedUseCase, setSelectedUseCase] = useState<number>(1)

  return (
    <Section className="customer-container !bg-tailCall-terminal-bg-primary h-full w-full text-tailCall-terminal-text-primary !bg-contain md:!bg-center md:!bg-top py-16 md:py-20 lg:pt-36 lg:pb-24 border-t border-tailCall-terminal-border terminal-grid-bg">
      <div className="flex flex-row items-center justify-center">
        <Heading
          as="h5"
          className="text-title-large sm:text-display-tiny lg:text-display-medium flex flex-col items-center md:flex-row lg:mb-12 font-mono text-tailCall-terminal-green-primary terminal-glow"
        >
          <span>How Developers Use</span>
          <span className="bg-tailCall-terminal-bg-secondary text-tailCall-terminal-green-primary px-SPACE_01 ml-SPACE_02">Forge</span>
        </Heading>
      </div>

      <p className="text-center text-content-medium lg:text-content-large max-w-3xl mx-auto mb-16 font-mono text-tailCall-terminal-text-secondary">
        From understanding complex codebases to implementing new features, Forge adapts to your workflow.
        <strong className="text-tailCall-terminal-text-primary"> See how developers across the industry use Forge in their daily work.</strong>
      </p>

      {/* Use Case Tabs */}
      <div className="mb-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {useCases.slice(0, 4).map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setSelectedUseCase(useCase.id)}
              className={`group px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 font-mono ${
                selectedUseCase === useCase.id
                  ? "bg-tailCall-terminal-bg-secondary text-tailCall-terminal-green-primary border border-tailCall-terminal-green-primary shadow-lg shadow-tailCall-terminal-green-glow"
                  : "bg-tailCall-terminal-bg-primary text-tailCall-terminal-text-primary hover:bg-tailCall-terminal-bg-secondary border border-tailCall-terminal-border hover:border-tailCall-terminal-green-primary/50"
              }`}
            >
              <span className="flex items-center gap-2">{useCase.title}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {useCases.slice(4, 8).map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setSelectedUseCase(useCase.id)}
              className={`group px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 font-mono ${
                selectedUseCase === useCase.id
                  ? "bg-tailCall-terminal-bg-secondary text-tailCall-terminal-green-primary border border-tailCall-terminal-green-primary shadow-lg shadow-tailCall-terminal-green-glow"
                  : "bg-tailCall-terminal-bg-primary text-tailCall-terminal-text-primary hover:bg-tailCall-terminal-bg-secondary border border-tailCall-terminal-border hover:border-tailCall-terminal-green-primary/50"
              }`}
            >
              <span className="flex items-center gap-2">{useCase.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Use Case Content */}
      {useCases.map(
        (useCase) =>
          selectedUseCase === useCase.id && (
            <div
              key={useCase.id}
              className="bg-tailCall-terminal-bg-secondary p-8 max-w-5xl mx-auto shadow-2xl border border-tailCall-terminal-border"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-grow w-full lg:w-auto">
                  <h3 className="text-3xl font-bold text-tailCall-terminal-green-primary mb-6 text-center lg:text-left font-mono terminal-glow">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-tailCall-terminal-text-secondary mb-8 leading-relaxed text-center lg:text-left font-mono">
                    {useCase.description}
                  </p>
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium text-tailCall-terminal-text-primary font-mono">Common Tasks</h4>
                    <div className="grid gap-4">
                      {useCase.examples.map((example, index) => (
                        <div key={index} className="group hover:scale-[1.01] transition-transform duration-200">
                          <div className="bg-tailCall-terminal-bg-primary p-5 border border-tailCall-terminal-border hover:border-tailCall-terminal-green-primary/50 transition-all duration-300">
                            <p className="text-tailCall-terminal-text-primary text-base leading-relaxed font-medium font-mono">"{example}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
      )}

      <div className="mt-14 text-center">
        <p className="text-lg italic max-w-3xl mx-auto mb-14 font-mono text-tailCall-terminal-text-secondary">
          "From debugging complex issues to implementing new features, Forge understands your developer workflow.
          <span className="font-bold text-tailCall-terminal-text-primary"> Work smarter, not harder.</span>"
        </p>
      </div>

      <TrustedByMarquee title="Used by developers at" logos={companies} />
    </Section>
  )
}

export default WhyChooseForge
