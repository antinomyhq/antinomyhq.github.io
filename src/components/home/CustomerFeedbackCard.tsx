import React from "react"
import {TestimonialDisplay} from "./Testimonials"

interface CustomerFeedbackCardProps {
  id: number
  name: string
  designation: string
  profilePicture: string
  text: string
  isCenterCard?: boolean
  display: TestimonialDisplay
}

const CustomerFeedbackCard: React.FC<CustomerFeedbackCardProps> = ({
  id,
  name,
  designation,
  profilePicture,
  text,
  isCenterCard = false,
  display,
}) => {
  const shouldShowName = display === TestimonialDisplay.Show
  const displayName = shouldShowName ? name : "Anonymous"
  const displayDesignation = shouldShowName ? designation : "Developer"

  return (
    <div
      className={`
        relative rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl bg-black
        ${isCenterCard ? "transform scale-105" : ""}
        flex flex-col items-center justify-start h-80 w-96 flex-shrink-0
        hover:transform hover:scale-105 border border-gray-800
      `}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-tailCall-yellow opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Profile Picture - Top Center - Black and White */}
      <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-tailCall-yellow to-yellow-600 p-1 flex-shrink-0 shadow-lg mb-4">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-600">
          <img
            src={profilePicture}
            alt={`${displayName} profile`}
            className="w-full h-full object-cover filter grayscale"
            onError={(e) => {
              // Fallback to a default avatar if image fails to load
              const target = e.target as HTMLImageElement
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=374151&color=f59e0b&size=80`
            }}
          />
        </div>
      </div>

      {/* Content Section - Evenly Spaced */}
      <div className="flex flex-col items-center text-center flex-1 space-y-4 w-full">
        {/* Name - Yellow */}
        <h4 className="font-bold text-tailCall-yellow text-lg">{displayName}</h4>

        {/* Designation - Subtle Styling */}
        <p className="text-gray-300 text-sm font-medium">{displayDesignation}</p>

        {/* Testimonial Text - Italic */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-200 text-sm leading-relaxed px-4 text-center italic">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerFeedbackCard
