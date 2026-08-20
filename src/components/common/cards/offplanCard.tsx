import BuyCarousel from "../sliders/buyCarousel";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { OffPlanInterface, PropertyInterface } from "@/interfaces/interface";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";
import { PiListPlus } from "react-icons/pi";
import { useBookmarks } from "@/context/bookmarkContext";
import { useCompare } from "@/context/compareContext";
import Brochure from "@/components/Brochure";

interface OffCardProps {
  property: OffPlanInterface;
}

type PriceValue =
  | number
  | string
  | {
      value: number;
      unit: "K" | "M";
    }
  | null
  | undefined;

const OffPlanCard: React.FC<OffCardProps> = ({ property }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const { addCompare, removeCompare, iscompareed } = useCompare();

  const bookmarked = property?._id ? isBookmarked(property._id) : false;
  const compared = property?._id ? iscompareed(property._id) : false;

  const message = `I would like to inquire about ${property.name ?? ""}`;

  /* =========================
     Helpers
  ========================= */
  const formatPrice = (price: PriceValue) => {
    if (price === null || price === undefined || price === 0 || price === "0") {
      return "N/A";
    }

    if (typeof price === "object") {
      if (price.value === 0) return "N/A";
      return `AED ${price.value} ${price.unit}`;
    }

    return `AED ${price}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-11 shadow-md rounded-xl p-2 hover:bg-neutral-100">
      {/* Carousel */}
      <div className="rounded-lg w-full lg:w-1/2 ">
        <BuyCarousel images={property.images ?? []} />
      </div>

      {/* Property Info */}
      <div className="lg:space-y-7 space-y-3 lg:py-7 w-full lg:w-1/2">
        <h2 className="text-[24px] font-bold">
          <Link href={`offplan/${property.slug}`}>
            {property.name ?? "Unnamed Property"}
          </Link>
        </h2>

        <div className="space-y-3 grey">
          <p className="inline-flex items-center gap-2">
            <CiLocationOn />
            {property.location ?? "Location not specified"}
          </p>

          <p>
            Handover:{" "}
            <span className="font-bold">{property.handover ?? "TBD"}</span>
          </p>

          <p>Starting from</p>
        </div>

        {/* ✅ PRICE (0 → N/A FIXED) */}
        <p className="heading2">{formatPrice(property.price)}</p>

        {/* Bookmark / Compare / Brochure */}
        <div className="flex gap-6">
          <div className="w-12 h-12 p-4 rounded-full shadow-lg">
            <FaRegBookmark
              onClick={() => {
                if (bookmarked) {
                  removeBookmark(property._id);
                } else {
                  addBookmark({
                    ...(property as unknown as PropertyInterface),
                    category: "offplan",
                  });
                }
              }}
              className={`cursor-pointer ${bookmarked ? "text-[#D4992D]" : ""}`}
            />
          </div>

          <div className="w-12 h-12 p-4 rounded-full shadow-lg">
            <PiListPlus
              onClick={() => {
                if (compared) {
                  removeCompare(property._id);
                } else {
                  addCompare({
                    ...(property as unknown as PropertyInterface),
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

        {/* Contact Buttons */}
        <div className="flex gap-2 flex-wrap grey">
          <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] hover:bg-blue-400 hover:text-white transition-colors duration-100 py-2.5 px-6 rounded-full">
            <CiMail />
            <Link href="/contact-us">Email</Link>
          </button>

          <button className="hover:bg-[#D4992D] hover:text-white transition-colors duration-100 inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
            <FiPhone />
            <Link href="/contact-us">Call</Link>
          </button>

          <button className="hover:bg-green-400 hover:text-white transition-colors duration-100 inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
            <FaWhatsapp />
            <Link
              href={`https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
              }?text=${encodeURIComponent(message)}`}
            >
              Whatsapp
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffPlanCard;
