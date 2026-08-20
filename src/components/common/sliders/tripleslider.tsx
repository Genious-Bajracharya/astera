// components/PropertyCarousel.tsx
"use client";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from "react";
import PropertyCard from "../cards/propertycard";
import PropertyCard2 from "../cards/propertycard2";
// import { OffPlanData } from "@/data/offplan";
// import propertiesData from "@/data/property";
import { useContext } from "react";
import { BuyContext } from "@/context/buycontext";
import { OffplanContext } from "@/context/offplanContext";
// import Loading from "@/app/loading";

interface PropertyCarouselProps {
  type: "buy" | "offplan";
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ type }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const context = useContext(BuyContext);
  const offContext = useContext(OffplanContext);
  if (!context) return <div>Loading ...</div>;
  if (!offContext) return <div>Loading ...</div>;

  const { offplanData } = offContext;
  const { buyData } = context;

  // if (isLoading) return <Loading />;
  return (
    <div className="relative space-y-4">
      {/* External Buttons */}
      <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={scrollPrev}
          className="p-2 border-[1px] cursor-pointer  rounded-full hover:bg-gray-300"
        >
          <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 border-[1px] cursor-pointer rounded-full hover:bg-gray-300"
        >
          <MdOutlineKeyboardArrowRight className="w-5 h-5" />
        </button>
      </div>
      {/* Carousel viewport */}

      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={`flex ${
            (type === "buy" && buyData.length < 2) ||
            (type === "offplan" && offplanData.length < 2)
              ? "justify-center mx-auto w-1/3"
              : ""
          }`}
        >
          {type === "buy"
            ? buyData?.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] md:min-w-[33.3333%] px-2"
                >
                  <PropertyCard property={item} />
                </div>
              ))
            : offplanData.map((item, index) => (
                <div
                  key={index}
                  className={`min-w-full sm:min-w-[50%] md:min-w-[33.3333%] px-2`}
                >
                  <PropertyCard2 data={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
