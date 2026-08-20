"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselProps {
  images: { url: string }[];
  autoplayInterval?: number;
}

const FALLBACK_IMAGE = "/images/about/about3.jpg";

const SingleCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayInterval = 3000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", onSelect);

      return () => {
        clearInterval(autoplay);
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, autoplayInterval]);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <CarouselImage
              key={index}
              src={image.url}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-full flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`mx-2 w-[6px] h-[6px] rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "scale-150 shadow-md"
                : "hover:bg-gray-400"
            } bg-[#FCFCFC]`}
          />
        ))}
      </div>
    </div>
  );
};

interface CarouselImageProps {
  src?: string;
  index: number;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, index }) => {
  const [imageSrc, setImageSrc] = useState(
    src?.trim() ? src : FALLBACK_IMAGE
  );

  return (
    <div className="flex-shrink-0 rounded-lg md:h-[300px] w-full">
      <Image
        src={imageSrc}
        loading="lazy"
        decoding="async"
        width={500}
        height={500}
        alt={`Slide ${index}`}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
        className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-500 ease-out"
      />
    </div>
  );
};

export default SingleCarousel;
