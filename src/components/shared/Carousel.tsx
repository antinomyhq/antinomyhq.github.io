import React, {useEffect, useRef, useState, ReactNode} from "react"

interface CarouselProps {
  children: ReactNode[]
}

const Carousel: React.FC<CarouselProps> = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [clonedChildren, setClonedChildren] = useState<ReactNode[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)
  const isTransitioningRef = useRef(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setTimeout(() => {
        scrollToIndex(1, false)
      }, 50)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        scrollToIndex(1, false)
      }, 50)
    }
  }, [isMobile])

  useEffect(() => {
    if (!children || children.length === 0) return
    const firstClone = children[0]
    const lastClone = children[children.length - 1]
    setClonedChildren([lastClone, ...children, firstClone])
  }, [children])

  useEffect(() => {
    if (!carouselRef.current || clonedChildren.length === 0) return
    scrollToIndex(currentIndex, false)
  }, [clonedChildren])

  const scrollToIndex = (index: number, smooth = true) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const cardWidth = carousel.children[0].clientWidth + 16
    carousel.style.transition = smooth ? "transform 0.3s ease" : "none"
    carousel.style.transform = `translateX(-${index * cardWidth}px)`
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setCurrentIndex(children.length)
        scrollToIndex(children.length, false)
      } else if (currentIndex === children.length + 1) {
        setCurrentIndex(1)
        scrollToIndex(1, false)
      }
      isTransitioningRef.current = false
    }

    carousel.addEventListener("transitionend", handleTransitionEnd)
    return () => {
      carousel.removeEventListener("transitionend", handleTransitionEnd)
    }
  }, [currentIndex, children.length])

  const next = () => {
    if (isTransitioningRef.current) return
    setCurrentIndex((prev) => prev + 1)
    scrollToIndex(currentIndex + 1)
    isTransitioningRef.current = true
  }

  const prev = () => {
    if (isTransitioningRef.current) return
    setCurrentIndex((prev) => prev - 1)
    scrollToIndex(currentIndex - 1)
    isTransitioningRef.current = true
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let startX = 0

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
      startX = "touches" in e ? e.touches[0].clientX : e.clientX
    }

    const handleTouchEnd = (e: TouchEvent | MouseEvent) => {
      const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
      const diff = endX - startX

      if (Math.abs(diff) < 30 || isTransitioningRef.current) return
      if (diff < 0) next()
      else prev()
    }

    carousel.addEventListener("touchstart", handleTouchStart)
    carousel.addEventListener("touchend", handleTouchEnd)

    carousel.addEventListener("mousedown", handleTouchStart)
    carousel.addEventListener("mouseup", handleTouchEnd)

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart)
      carousel.removeEventListener("touchend", handleTouchEnd)
      carousel.removeEventListener("mousedown", handleTouchStart)
      carousel.removeEventListener("mouseup", handleTouchEnd)
    }
  }, [currentIndex])

  return (
    <div className="overflow-hidden px-[10vw] md:hidden mt-2 pt-1">
      <div ref={carouselRef} className="flex gap-4 transition-transform ease-out duration-300 will-change-transform">
        {clonedChildren.map((child, idx) => (
          <div key={idx} className="flex-shrink-0 w-[80vw] rounded-xl flex items-center justify-center text-2xl">
            {child}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isTransitioningRef.current) return
              setCurrentIndex(idx + 1)
              scrollToIndex(idx + 1)
              isTransitioningRef.current = true
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 border-none ${
              idx + 1 === currentIndex
                ? "bg-tailCall-lightMode---primary-600 dark:bg-tailCall-lightMode---primary-400"
                : "bg-tailCall-darkMode---neutral-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
