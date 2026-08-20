"use client"

import Link from "next/link"
import CompareCard from "../common/cards/compareCard"
import { useCompare } from "@/context/compareContext"
import { useState, useEffect } from "react"

const Compare = () => {
  const { compares } = useCompare()
  const [active, setActive] = useState<"buy" | "offplan">("offplan")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  const filteredCompares = compares.filter((item) => item.category === active)

  return (
    <div className="lg:pl-[84px] space-y-16">
      <div className="space-y-6">
        <p className="grey">
          <span className="font-bold">Home /</span> Compare
        </p>
        <p className="heading3">Comparison of Listings</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActive("buy")}
          className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200 ${
            active === "buy" ? "back text-white" : "border-2 text-black"
          }`}
        >
          For Sale
        </button>
        <button
          onClick={() => setActive("offplan")}
          className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200 ${
            active === "offplan" ? "back text-white" : "border-2 text-black"
          }`}
        >
          Off Plan
        </button>
      </div>

      <div className="flex gap-8">
        {/* Left Labels */}
        <div className="space-y-8 self-end pr-16 lg:pb-16 2xl:pb-[5.5%]">
          <p className="text-lg grey">Listing</p>
          <p className="text-lg grey">Price</p>
          {active === "buy" && <p className="text-lg grey">Bedrooms</p>}
          {active === "buy" && <p className="text-lg grey">Bathrooms</p>}
          <p className="text-lg grey">Size</p>
          <p className="text-lg grey">Location</p>
          {active === "buy" && <p className="text-lg grey">Furnished</p>}
          {active === "buy" && <p className="text-lg grey">Amenities</p>}
          {active === "offplan" && <p className="text-lg grey">Handover</p>}
          {active === "offplan" && <p className="text-lg grey">Commission</p>}
        </div>

        {/* Comparison Cards */}
        {filteredCompares.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="heading2">
              No Comparisons in {active === "buy" ? "For Sale" : "Off Plan"}
            </p>
            <Link
              className="underline underline-offset-4"
              href={active === "buy" ? "/buy" : "/offplan"}
            >
              View More
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto pl-8 border-l border-[#C9C9C9] pb-16">
            <div className="flex gap-8 min-w-max">
              {filteredCompares.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[380px]">
                  <CompareCard property={item} category={active} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Compare