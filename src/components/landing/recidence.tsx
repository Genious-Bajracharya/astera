"use client";

import React, { useEffect, useState, useCallback, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { OffplanContext } from "@/context/offplanContext";
import Loading from "@/app/loading";

export default function Residence() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const context = useContext(OffplanContext);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!context)
    return (
      <div>
        <Loading />
      </div>
    );

  const { offplanData } = context;
  if (!offplanData || offplanData.length === 0)
    return (
      <div>
        <Loading />
      </div>
    );

  const slicedData = offplanData.slice(0, 4);
  const activeSlide = slicedData[selectedIndex];

  // Helper inline to render price
  const renderPrice = (price?: number | { value: number; unit: string }) => {
    if (!price) return "Soon";
    if (typeof price === "number") return `AED ${price} M`;
    return `AED ${price.value} ${price.unit}`;
  };

  return (
    <div className="relative w-full h-[530px] lg:h-[750px] overflow-hidden plr">
      {/* Big Active Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={activeSlide.images[0]?.url ?? "/images/about/dubai.jpg"}
          alt="Active"
          fill
          className="object-cover w-full h-full transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Info Panel */}
      <div className="absolute top-[65px] left-4 lg:left-[65px] space-y-4 lg:space-y-8 z-10 text-white">
        <div className="lg:space-y-6 space-y-4">
          <h2 className="text-[24px] font-bold">{activeSlide?.name}</h2>
          <p className="mt-2 text-lg max-w-lg">
            {activeSlide?.description?.slice(0, 300)}...
          </p>
        </div>
        <p className="mt-2 text-xl font-semibold">
          {renderPrice(activeSlide?.price)}
        </p>
        <button className="mt-4 px-5 py-2 bg-white/10 rounded-full border-[1px] border-white">
          Learn More
        </button>
      </div>

      {/* Vertical line indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        {slicedData.map((_, idx) => (
          <div
            key={idx}
            className={`lg:w-[4px] w-[2px] h-[60px] lg:h-[120px] rounded-sm ${
              idx === selectedIndex ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-4 lg:left-[65px] z-20 flex gap-3">
        {slicedData.map((img, idx) => (
          <div
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`relative lg:w-[180px] w-[80px] h-[64px] lg:h-[130px] rounded overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
              idx === selectedIndex
                ? "border-white scale-110"
                : "border-transparent opacity-70"
            }`}
          >
            <Image
              src={img.images[0]?.url || "/images/about/dubai.jpg"}
              alt={`Thumb ${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Hidden carousel for auto-scroll */}
      <div className="hidden" ref={emblaRef}>
        <div className="flex">
          {slicedData.map((img, idx) => (
            <div key={idx} className="flex-[0_0_100%]">
              <img
                src={img.images[0]?.url || "/images/about/dubai.jpg"}
                alt=""
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
