import React, {useState, useEffect} from "react"
import Heading from "@theme/Heading"
import CustomerFeedbackCard from "./CustomerFeedbackCard"
import Section from "../shared/Section"
import testimonialsData from "@site/src/data/testimonials.json"

export enum TestimonialDisplay {
  Hide = "Hide",
  Show = "Show",
  Anon = "Anon",
}

interface AppConfig {
  testimonials: TestimonialDisplay
}

interface TestimonialData {
  id: number
  name: string
  designation: string
  profilePicture: string
  text: string
}

const config: AppConfig = {
  testimonials: TestimonialDisplay.Show, // Changed to Show to display names and profile pictures
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  if (config.testimonials === TestimonialDisplay.Hide) {
    return null
  }

  const testimonials: TestimonialData[] = testimonialsData

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3) // xl screens - 3 wider cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // md screens - 2 cards
      } else {
        setCardsPerView(1) // sm screens - 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - cardsPerView)
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, cardsPerView, testimonials.length])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const nextSlide = () => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentIndex(Math.min(index, maxIndex))
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const cardWidth = 384 // w-96 = 384px
  const gap = 40 // gap-10 = 40px
  const translateX = currentIndex * (cardWidth + gap)

  return (
    <Section className="customer-container !bg-tailCall-dark-600 h-full w-full text-tailCall-light-100 !bg-contain md:!bg-center md:!bg-top py-16 md:py-20 lg:pt-48 lg:pb-24">
      <div className="flex flex-row items-center justify-center">
        <Heading
          as="h5"
          className="text-title-large sm:text-display-tiny lg:text-display-medium flex flex-col items-center md:flex-row lg:mb-20"
        >
          <span>WHY THEY LOVE</span>
          <span className="bg-tailCall-yellow rounded-lg text-black px-SPACE_01 ml-SPACE_02">FORGE CODE</span>
        </Heading>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto mt-SPACE_18 px-4">
        {/* Carousel Wrapper */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-10 items-start"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <CustomerFeedbackCard
                key={testimonial.id}
                id={testimonial.id}
                name={testimonial.name}
                designation={testimonial.designation}
                profilePicture={testimonial.profilePicture}
                text={testimonial.text}
                isCenterCard={false}
                display={config.testimonials}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {maxIndex > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 border border-gray-600 z-10"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 border border-gray-600 z-10"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({length: maxIndex + 1}, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-tailCall-yellow" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

export default Testimonials
