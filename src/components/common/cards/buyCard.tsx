import BuyCarousel from "../sliders/buyCarousel";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import { PropertyInterface } from "@/interfaces/interface";
import Link from "next/link";

interface BuyCardProps {
  property: PropertyInterface;
}

const BuyCard: React.FC<BuyCardProps> = ({ property }) => {
  const message = " I would like to inquire about" + property?.name;
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-11 shadow-md rounded-xl p-2 hover:bg-neutral-100">
      {/* Carousel */}
      <div className="rounded-lg w-full lg:w-1/2">
        <BuyCarousel images={property.images} />
      </div>

      {/* Property Info */}
      <div className="lg:space-y-7 space-y-3 lg:py-7 w-full lg:w-1/2">
        <h2 className="text-[24px] font-bold">
          <Link href={`/buy/${property.slug}`}>{property.name}</Link>
        </h2>

        <div className="space-y-3 grey">
          <p className="inline-flex items-center gap-2">
            <CiLocationOn />
            {property.location}
          </p>

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/bed.svg"
                alt="bed"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              <p>{property.bedrooms}</p>
            </div>
            <p>|</p>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/bath.svg"
                alt="bath"
                className="w-4 h-4"
                width={20}
                height={20}
              />
              <p>{property.bathrooms}</p>
            </div>
            <p>|</p>
            <div className="flex gap-2 items-center">
              <BsArrowsFullscreen />
              <p>{property.squareFeet} sqft</p>
            </div>
          </div>
        </div>

        <p className="heading2">AED {property.price}</p>

        <div className="flex gap-2 flex-wrap grey">
          <button className="inline-flex hover:bg-blue-400 hover:text-white transition-colors duration-100 gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
            <CiMail />
            <Link href={"/contact-us"}>Email</Link>
          </button>
          <button className="hover:bg-[#D4992D] hover:text-white transition-colors duration-100 inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
            <FiPhone />
            <Link href={"/contact-us"}>Call</Link>
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

export default BuyCard;
