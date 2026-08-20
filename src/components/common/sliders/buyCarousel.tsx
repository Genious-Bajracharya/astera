"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselProps {
  images: { url: string }[];
  autoplayInterval?: number;
}

const BuyCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayInterval = 3000,
}) => {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "keepSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!mainApi) return;
    const autoplay = setInterval(() => {
      mainApi.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(autoplay);
  }, [mainApi, autoplayInterval]);

  // Sync selected index
  useEffect(() => {
    if (!mainApi) return;

    const onSelect = () => {
      const index = mainApi.selectedScrollSnap();
      setSelectedIndex(index);
      thumbApi?.scrollTo(index);
    };

    mainApi.on("select", onSelect);
    onSelect();

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  // Click thumbnail to scroll main
  const scrollTo = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );

  return (
    <div className="flex flex-row-reverse gap-3">
      {/* Vertical Thumbnails */}
      <div
        className="w-[164px] h-[360px] hidden lg:block overflow-hidden rounded-lg"
        ref={thumbRef}
      >
        <div className="flex flex-col gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`overflow-hidden rounded-md border-2 ${
                selectedIndex === index ? "border-black" : "border-transparent"
              }`}
            >
              <Image
                src={img.url}
                alt={`Thumb ${index}`}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-[113px] hover:scale-110 transition-transform duration-500 ease-out"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Carousel */}
      <div className="relative lg:w-[500px] lg:h-[360px]">
        <div className="overflow-hidden h-full" ref={mainRef}>
          <div className="flex h-full">
            {images.map((image, index) => (
              <div
                className="flex-shrink-0 w-full h-[300px] lg:h-full rounded-lg"
                key={index}
              >
                <Image
                  src={image.url}
                  width={500}
                  height={500}
                  alt={`Slide ${index}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex">
          {images.map((_, index) => (
            <div
              key={index}
              className={`mx-1 w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "scale-150 shadow-md bg-white"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCarousel;
