import React, {useState} from "react"
import Heading from "@theme/Heading"
import Section from "../shared/Section"
import TrustedByMarquee from "./TrustedByMarquee"
import {companies, useCases} from "@site/src/constants"

const WhyChooseForge = (): JSX.Element => {
  const [selectedUseCase, setSelectedUseCase] = useState<number>(1)

  return (
    <Section className="customer-container !bg-tailCall-dark-600 h-full w-full text-tailCall-light-100 !bg-contain md:!bg-center md:!bg-top py-16 md:py-20 lg:pt-36 lg:pb-24">
      <div className="flex flex-row items-center justify-center">
        <Heading
          as="h5"
          className="text-title-large sm:text-display-tiny lg:text-display-medium flex flex-col items-center md:flex-row lg:mb-12"
        >
          <span>How Developers Use</span>
          <span className="bg-tailCall-yellow rounded-lg text-black px-SPACE_01 ml-SPACE_02">Forge</span>
        </Heading>
      </div>

      <p className="text-center text-content-medium lg:text-content-large max-w-3xl mx-auto mb-16">
        From understanding complex codebases to implementing new features, Forge adapts to your workflow.
        <strong> See how developers across the industry use Forge in their daily work.</strong>
      </p>

      {/* Use Case Tabs */}
      <div className="mb-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {useCases.slice(0, 4).map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setSelectedUseCase(useCase.id)}
              className={`group px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedUseCase === useCase.id
                  ? "bg-tailCall-yellow text-black shadow-lg shadow-yellow-500/25"
                  : "bg-tailCall-dark-500 text-tailCall-white hover:bg-tailCall-dark-400 border border-tailCall-dark-300 hover:border-tailCall-yellow/50"
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
              className={`group px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedUseCase === useCase.id
                  ? "bg-tailCall-yellow text-black shadow-lg shadow-yellow-500/25"
                  : "bg-tailCall-dark-500 text-tailCall-white hover:bg-tailCall-dark-400 border border-tailCall-dark-300 hover:border-tailCall-yellow/50"
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
              className="bg-gradient-to-br from-tailCall-dark-500 to-tailCall-dark-600 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl border border-tailCall-dark-400"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-grow w-full lg:w-auto">
                  <h3 className="text-3xl font-bold text-tailCall-white mb-6 text-center lg:text-left">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-tailCall-light-500 mb-8 leading-relaxed text-center lg:text-left">
                    {useCase.description}
                  </p>
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium text-white">Common Tasks</h4>
                    <div className="grid gap-4">
                      {useCase.examples.map((example, index) => (
                        <div key={index} className="group hover:scale-[1.01] transition-transform duration-200">
                          <div className="bg-gradient-to-r from-tailCall-dark-700 via-tailCall-dark-600 to-tailCall-dark-700 rounded-xl p-5 border border-tailCall-dark-400 hover:border-tailCall-yellow/30 transition-all duration-300">
                            <p className="text-tailCall-white text-base leading-relaxed font-medium">"{example}"</p>
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
        <p className="text-lg italic max-w-3xl mx-auto mb-14">
          "From debugging complex issues to implementing new features, Forge understands your developer workflow.
          <span className="font-bold"> Work smarter, not harder.</span>"
        </p>
      </div>

      <TrustedByMarquee title="Used by developers at" logos={companies} />
    </Section>
  )
}

export default WhyChooseForge
