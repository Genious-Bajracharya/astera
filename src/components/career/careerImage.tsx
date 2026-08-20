'use client'

import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const images = [
  '/images/career/career1.jpg',
  '/images/career/career2.jpg',
  '/images/career/career33.jpg',
  '/images/career/career4.jpg',
  '/images/career/career1.jpg',
  '/images/career/career2.jpg',
]

const CareerImage = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [autoplay.current]
  )

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex ">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_25%] px-2">
            <div className="lg:w-[425px] w-[300px] h-[400px] lg:h-[530px] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={530}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerImage