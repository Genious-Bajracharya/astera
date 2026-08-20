import { OffPlanInterface, PropertyInterface } from "@/interfaces/interface";
import { FaRegBookmark } from "react-icons/fa6";
import { PiListPlus } from "react-icons/pi";
import { useBookmarks } from "@/context/bookmarkContext";
import { useCompare } from "@/context/compareContext";
import Brochure from "../Brochure";

interface Offplan {
  data: OffPlanInterface | undefined;
}

type PriceValue =
  | number
  | string
  | {
      value: number;
      unit: "K" | "M";
    }
  | undefined
  | null;

const DescriptionRight = ({ data }: Offplan) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const { addCompare, removeCompare, iscompareed } = useCompare();

  const bookmarked = data?._id ? isBookmarked(data._id) : false;
  const compared = data?._id ? iscompareed(data._id) : false;

  /* =========================
     Helpers
  ========================= */
  // const formatValue = (value: PriceValue) => {
  //   if (value === null || value === undefined || value === 0 || value === "0") {
  //     return "N/A";
  //   }

  //   // ✅ NEW: handle { value, unit }
  //   if (typeof value === "object" && "value" in value && "unit" in value) {
  //     return `${value.value} ${value.unit}`;
  //   }

  //   return value;
  // };
  const formatValue = (value: PriceValue) => {
  
  if (
    value === null ||
    value === undefined ||
    value === 0 ||
    value === "0"
  ) {
    return "N/A";
  }

  if (typeof value === "object" && "value" in value && "unit" in value) {
    if (value.value === 0) return "N/A";
    return `${value.value} ${value.unit}`;
  }

  return value;
};


  return (
    <div className="space-y-6 lg:w-[30%]">
      {/* Actions */}
      <div className="flex gap-6">
        <div className="w-12 h-12 p-4 rounded-full shadow-lg">
          <FaRegBookmark
            onClick={() => {
              if (!data) return;
              if (bookmarked) {
                removeBookmark(data._id);
              } else {
                addBookmark({
                  ...(data as unknown as PropertyInterface),
                  category: "offplan",
                });
              }
            }}
            className={`cursor-pointer ${
              bookmarked ? "text-[#D4992D]" : ""
            }`}
          />
        </div>

        <div className="w-12 h-12 p-4 rounded-full shadow-lg">
          <PiListPlus
            onClick={() => {
              if (!data) return;
              if (compared) {
                removeCompare(data._id);
              } else {
                addCompare({
                  ...(data as unknown as PropertyInterface),
                  category: "offplan",
                });
              }
            }}
            className={`w-5 mx-auto h-5 cursor-pointer ${
              compared ? "text-[#D4992D]" : ""
            }`}
          />
        </div>

        <Brochure />
      </div>

      {/* Top */}
      <div className="border border-[#C9C9C9] p-8 rounded-2xl space-y-6">
        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="text-[#929292]">STARTING PRICE</p>
          <p className="heading3">
            {formatValue(data?.price) === "N/A"
              ? "N/A"
              : `AED ${formatValue(data?.price)}`}
          </p>
        </div>

        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="text-[#929292]">BOOKING AMOUNT</p>
          <p className="heading3">
            {formatValue(data?.bookingAmount) === "N/A"
              ? "N/A"
              : `${data?.bookingAmount}%`}
          </p>
        </div>

        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="text-[#929292]">HANDOVER</p>
          <p className="heading3">{formatValue(data?.handover)}</p>
        </div>

        <div className="space-y-4 border-b flex gap-8 items-center border-[#C9C9C9] pb-6">
          <p className="heading4 primary">
            {formatValue(data?.commission) === "N/A"
              ? "N/A"
              : `${data?.commission}%`}
          </p>
          <div>
            <p className="text-[#929292]">DIRECT SALE</p>
            <p className="heading3">Commission</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border border-[#C9C9C9] p-8 rounded-2xl space-y-6">
        <p className="heading3 text-[#929292]">Payment Plan</p>

        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="heading3">
            {formatValue(data?.onBooking) === "N/A"
              ? "N/A"
              : `${data?.onBooking}%`}
          </p>
          <p className="text-[#929292]">ON BOOKING</p>
        </div>

        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="heading3">
            {formatValue(data?.construction) === "N/A"
              ? "N/A"
              : `${data?.construction}%`}
          </p>
          <p className="text-[#929292]">DURING CONSTRUCTION</p>
        </div>

        <div className="space-y-4 border-b border-[#C9C9C9] pb-6">
          <p className="heading3">
            {formatValue(data?.onHandover) === "N/A"
              ? "N/A"
              : `${data?.onHandover}%`}
          </p>
          <p className="text-[#929292]">ON HANDOVER</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionRight;
