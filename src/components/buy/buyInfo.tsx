import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { PiListPlus } from "react-icons/pi";
import { PropertyInterface } from "@/interfaces/interface";
import { useBookmarks } from "@/context/bookmarkContext";
import { useCompare } from "@/context/compareContext";

interface BuyDetail {
  data: PropertyInterface | undefined;
}

const BuyInfo = ({ data }: BuyDetail) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const { addCompare, removeCompare, iscompareed } = useCompare();
  const bookmarked = data?._id ? isBookmarked(data._id) : false;
  const compared = data?._id ? iscompareed(data._id) : false;

  return (
    <div className="plr flex justify-between">
      <div className="space-y-6">
        <h1 className="text-[32px] font-bold">{data?.name}</h1>
        <div className="space-y-3 grey">
          <p className="inline-flex items-center gap-2">
            <CiLocationOn />
            {data?.location}
          </p>

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/bed.svg"
                alt="bed"
                className="w-5 h-5"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
              />
              <p>{data?.bedrooms}</p>
            </div>
            <p>|</p>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/bath.svg"
                alt="bath"
                className="w-4 h-4"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
              />
              <p>{data?.bathrooms}</p>
            </div>
            <p>|</p>
            <div className="flex gap-2 items-center">
              <BsArrowsFullscreen />
              <p>{data?.squareFeet} sqft</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex gap-6">
          <div className="w-12 h-12 p-4 rounded-full shadow-lg">
            <FaRegBookmark
              onClick={() => {
                if (!data) return;
                if (bookmarked) {
                  removeBookmark(data._id);
                } else {
                  addBookmark({ ...data, category: "buy" });
                }
              }}
              className={` cursor-pointer  ${
                bookmarked ? "text-blue-600 outline-blue-600" : ""
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
                  addCompare({ ...data, category: "buy" });
                }
              }}
              className={`w-5 mx-auto h-5  cursor-pointer ${
                compared && "text-blue-600 outline-blue-600"
              }`}
            />
          </div>
        </div>
        <p className="heading2"> AED {data?.price}</p>
      </div>
    </div>
  );
};

export default BuyInfo;
