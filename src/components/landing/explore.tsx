'use client'

import Image from 'next/image'
import { RxArrowTopRight } from 'react-icons/rx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useEmblaCarousel from 'embla-carousel-react'
import {  useCallback } from 'react'
import Link from 'next/link'

const exploreImages = [
  {
    src: '/images/landing/BUSINESS BAY.png',
    title: 'Business Bay',
  },
   {
    src: '/images/landing/marina.png',
    title: 'Dubai Marina',
  },
  {
    src: '/images/landing/down.jpg', 
    title: 'Downtown Dubai',
  },

  {
    src: '/images/landing/PALM JUMERIAH.png',
    title: 'Palm Jumeirah',
  },
  {
    src: '/images/landing/dubaigarden.jpg',
    title: 'Gardens Dubai',
  },
  {
    src: '/images/landing/jumeriah.jpg',
    title: 'Jumeirah Lake Towers (JLT)',
  },
  {
    src: '/images/landing/dubaicreek.jpg',
    title: 'Dubai Creek Harbour',
  },
  {
    src: '/images/landing/sobhahartland.jpeg',
    title: 'Sobha Hartland',
  },
  {
    src: '/images/landing/dubaihills.jpg',
    title: 'Dubai Hills Estate',
  },
  {
    src: '/images/landing/dubaibeach.jpg',
    title: 'Jumeirah Beach Residence (JBR)',
  },
  {
    src: '/images/landing/JVC.png',
    title: 'Jumeirah Village Circle (JVC))',
  },
  {
    src: '/images/landing/dubai_south.jpg',
    title: 'Dubai South',
  },
  {
    src: '/images/landing/dubaisport.jpg',
    title: 'Dubai Sports City',
  },
]

const Explore = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    // [autoplay.current]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="bg-[#F7F7F7] py-21 space-y-9 plr ">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 max-w-[1440px] mx-auto">
        <p className="heading3">Explore Communities</p>
        <p className="grey lg:w-1/2">
          {`We’ve got you covered! Discover Dubai’s most popular and largest communities. From lavish mansions to modern luxury homes, there are many options to choose from.`}
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-[1440px] mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {exploreImages.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] px-2 relative"
              >
                <div className="relative w-full h-[300px] md:h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover  "
                  />
                  {/* better overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/5"></div>
                  {/* Overlay Button */}
                  <div className="backdrop-blur-[20px] text-white border cursor-pointer absolute top-4 right-4 rounded-full w-11 h-11 grid place-items-center">
                    <Link href={`/communities`}><RxArrowTopRight className="w-6 h-6" /></Link>
                  </div>
                  {/* Title */}
                  <p className="heading absolute bottom-4 left-4 text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 w-11 h-11 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft className='mx-auto cursor-pointer'/>
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 w-11 h-11 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight className='mx-auto cursor-pointer' />
        </button>
      </div>

     
    </div>
  )
}

export default Explore
