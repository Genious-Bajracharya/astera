'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import InsightsCard from '../common/cards/insightsCard'
import { BlogInterface } from '@/interfaces/interface'
// import { Insight } from '@/interfaces/interface'
interface MobileInsightsCarouselProps {
  data: BlogInterface[];
}


const MobileInsightsCarousel = ({ data }:MobileInsightsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const scrollProgress = emblaApi.scrollProgress()
    setProgress(scrollProgress)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('scroll', onScroll)
    onScroll()
  }, [emblaApi, onScroll])

  return (
    <div className="block sm:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((item, index) => (
            <div key={index} className="min-w-full px-2">
              <InsightsCard {...item} />
            </div>
          ))}
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}

export default MobileInsightsCarousel