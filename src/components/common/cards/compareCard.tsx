/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image"
import { PropertyInterface, OffPlanInterface } from "@/interfaces/interface"
import { RxCross2 } from "react-icons/rx"
import { useCompare } from "@/context/compareContext"

interface CompareProps {
  property: PropertyInterface | OffPlanInterface
  category: "buy" | "offplan"
}


const CompareCard: React.FC<CompareProps> = ({ property, category }) => {
  const { removeCompare } = useCompare()

  const isOffPlan = category === "offplan"

  // Helper: Return value or "-"
  const formatValue = (value: any): string => {
    if (value === null || value === undefined || value === "") return "-"
    if (Array.isArray(value)) return value.length ? value.join(", ") : "-"
    return String(value)
  }

  return (
    <div className="space-y-8 w-[380px]">
      {/* Image */}
      <div className="w-full h-[265px] relative rounded-xl overflow-hidden">
        <Image
          src={property.images?.[0]?.url || "/placeholder.jpg"}
          alt={property.name}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-xl"
        />
        <div
          className="top-3 right-3 grid items-center absolute w-8 h-8 bg-white rounded-md cursor-pointer"
          onClick={() => removeCompare(property._id)}
        >
          <RxCross2 className="w-6 h-6 mx-auto" />
        </div>
      </div>

      {/* Property Name */}
      <p className="heading px-6">{formatValue(property.name)}</p>

      {/* Property Details */}
      <div className="space-y-8 text-lg grey px-6">
        {/* Listing */}
        <p>{isOffPlan ? "Off Plan" : "For Sale"}</p>

        {/* Price */}
        <p>
          {typeof property.price === "number"
            ? `AED ${property.price.toLocaleString()}`
            : "-"}
        </p>

        {category === "buy" && (
          <>
            <p>{formatValue((property as PropertyInterface).bedrooms)}</p>
            <p>{formatValue((property as PropertyInterface).bathrooms)}</p>
          </>
        )}

        <p>{formatValue(property.squareFeet)}</p>
        <p>{formatValue(property.location)}</p>

        {category === "buy" && (
          <>
            <p>{formatValue((property as PropertyInterface).furnishing)}</p>
            <p>{formatValue((property as PropertyInterface).amenities)}</p>
          </>
        )}

        {category === "offplan" && (
          <>
            <p>{formatValue((property as OffPlanInterface).handover)}</p>
            <p>
              {(property as OffPlanInterface).commission != null
                ? `${(property as OffPlanInterface).commission}%`
                : "-"}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default CompareCard