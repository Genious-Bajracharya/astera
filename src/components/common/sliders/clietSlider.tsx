'use client'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import ClientCard from "../cards/clientCard";

const testimonials = [
  {
    name: "Kevin MJ",
    time: "4 months ago",
    title: "A Perfect Rental",
    desc: `Even though I'm an experienced investor, trying to invest in Dubai property for the first time was overwhelming. I was lost in a sea of... more`,
    image: "/images/landing/client/client1.jpg",
    alt: "Kevin MJ",
  },
  {
    name: "Sophia L",
    time: "2 months ago",
    title: "Great Experience with Astera",
    desc: `Astera made the whole process smooth and transparent. I felt confident investing in my first property thanks to their guidance.`,
    image: "/images/landing/client/client3.jpg",
    alt: "Sophia L",
  },
  {
    name: "James R",
    time: "1 month ago",
    title: "Highly Recommended!",
    desc: `Professional, friendly, and efficient. They answered all my questions and made my property purchase stress-free.`,
    image: "/images/landing/client/client2.jpeg",
    alt: "James R",
  },
];

const ClientCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative space-y-4">
      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={scrollPrev}
          className="grid items-center cursor-pointer w-11 h-11 rounded-full bg-white border-[1px] border-[#C9C9C9] hover:bg-gray-300"
        >
          <MdOutlineKeyboardArrowLeft className="w-5 h-5 mx-auto"/>
        </button>
        <button
          onClick={scrollNext}
          className="grid items-center cursor-pointer w-11 h-11 rounded-full bg-white border-[1px] border-[#C9C9C9] hover:bg-gray-300"
        >
          <MdOutlineKeyboardArrowRight className="w-5 h-5 mx-auto"/>
        </button>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, index) => (
            <div key={index} className="min-w-full sm:min-w-[50%] md:min-w-[33.3333%] px-2">
              <ClientCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
