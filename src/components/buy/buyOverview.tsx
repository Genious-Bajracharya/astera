import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowsFullscreen } from "react-icons/bs";
import { PropertyInterface } from "@/interfaces/interface";

interface BuyOverview {
  data: PropertyInterface | undefined;
}

const BuyOverview = ({ data }: BuyOverview) => {
  return (
    <div className="space-y-11 pt-8 ">
      {/* Overview  */}
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold">Overview</h2>
        <div className="flex flex-wrap gap-16">
          {/* 1 */}
          <div className="flex gap-3">
            <div className="w-12 h-12 p-4 rounded-full border-[1px] border-[#C9C9C9CC]">
              <CiLocationOn className="" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#929292] text-xs">Location</p>
              <p className="grey">{data?.location}</p>
            </div>
          </div>
          {/* 1 */}
          <div className="flex gap-3">
            <div className="w-12 h-12 p-4 rounded-full border-[1px] border-[#C9C9C9CC]">
              <CiLocationOn className="" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#929292] text-xs">Property Type</p>
              <p className="grey">{data?.propertyType}</p>
            </div>
          </div>
          {/* 1 */}
          <div className="flex gap-3">
            <div className="w-12 h-12 p-4 rounded-full border-[1px] border-[#C9C9C9CC]">
              <Image
                src="/assets/bed.svg"
                alt="bed"
                className="w-5 h-5"
                width={20}
                height={20}
              />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#929292] text-xs">Bedroom(s)</p>
              <p className="grey">{data?.bedrooms}</p>
            </div>
          </div>
          {/* 1 */}
          <div className="flex gap-3">
            <div className="w-12 h-12 p-4 rounded-full border-[1px] border-[#C9C9C9CC]">
              <Image
                src="/assets/bath.svg"
                alt="bath"
                className="w-4 h-4"
                width={20}
                height={20}
              />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#929292] text-xs">Bathroom(s)</p>
              <p className="grey">{data?.bathrooms}</p>
            </div>
          </div>
          {/* 1 */}
          <div className="flex gap-3">
            <div className="w-12 h-12 p-4 rounded-full border-[1px] border-[#C9C9C9CC]">
              <BsArrowsFullscreen className="" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[#929292] text-xs">Area/Size</p>
              <p className="grey">{data?.squareFeet} sqft</p>
            </div>
          </div>
        </div>
      </div>
      {/* Property Desc  */}
      <div className="space-y-6 grey">
        <h2 className="text-[24px] font-bold text-black">
          Property description
        </h2>
        <p>{data?.description}</p>
        <div>
          <h3 className="text-[18.72px] font-bold">Property Features</h3>
          {data?.propertyFeatures.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
        </div>

        <div>
          <h2 className="text-[24px] font-bold">About Astera Real Estates:</h2>
          <p>
            {`Astera Real Estates is your top-notch destination if you are looking for exceptional Properties for Sale in Dubai such as ready-to-move, off-plan, and rental. We have been serving in India for more than a decade, and now we are introducing our clients worldwide to the most exciting and profitable property developments in Dubai, UAE. We are headquartered in India, with fully operational branch offices in Dubai.`}
          </p>{" "}
          <br />
          <p>{`We have a wide range of homes that offer you a mixed combination of luxury and functionality, making sure that you find and land safely in your perfect living space without any fuss.
                        No matter if you are scouting for a move-in-ready home or a flexible rental property, or an off-plan property, Astera Real Estates is your one-stop destination that simplifies your search funnel. Embark upon on your journey to discover the best home in Dubai with us. Our team’s dedication to professionalism and customer satisfaction ensures a smooth customer experience. Our main priority lies in ensuring that you find your dream residence without any hassle.`}</p>
        </div>

        <div>
          <p className="font-bold">Contact Us:</p>
          <p>
            To book this property or for more details, please feel free to
            contact Astera Real Estates.
          </p>
          <p>
            <span className="font-bold">Company Name:</span>Astera Real Estates
          </p>
          <p>
            <span className="font-bold">License No:</span>1089754
          </p>
          <p>
            <span className="font-bold">Office Contact No:</span>+971 4975812s
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyOverview;
