"use client";
import { useState } from "react";
import PropertyCarousel from "../common/sliders/tripleslider";
import Link from "next/link";
// import PropertyCard from "../common/cards/propertycard";

const Latest = () => {
  const [active, setActive] = useState<"buy" | "offplan">("offplan");
  return (
    <div className="plr py-[20px] md:py-[40px] lg:py-[84px] space-y-[36px] max-w-[1440px] mx-auto">
      <div className="text-center space-y-2">
        <h2 className=" text-[24px] font-bold ">
          Latest Properties for Sale in Dubai
        </h2>
        <p className="text-[#555555]">
          Astera Real Estates help you find a home that suits your budget and
          lifestyle
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActive("buy")}
          className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200 hover:bg-neutral-200 ${
            active === "buy" ? "back text-white" : "border-2 text-black"
          }`}
        >
          For Sale
        </button>
        <button
          onClick={() => setActive("offplan")}
          className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200  ${
            active === "offplan" ? "back text-white" : "border-2 text-black"
          }`}
        >
          Off Plan
        </button>
      </div>

      <div className="">
        <PropertyCarousel type={active} />
      </div>
      <p className="text-center underline underline-offset-8 font-semibold lg:text-lg cursor-pointer">
        <Link href={active === "offplan" ? "/offplan" : "/buy"}>See More</Link>
      </p>
    </div>
  );
};

export default Latest;
