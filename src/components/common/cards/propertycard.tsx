import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import SingleCarousel from "../sliders/singleCardSlider";
import { BsArrowsFullscreen } from "react-icons/bs";
import { PropertyInterface } from "@/interfaces/interface";
import Link from "next/link";

interface BuyCardProps {
  property: PropertyInterface;
}

const PropertyCard: React.FC<BuyCardProps> = ({ property }) => {
  const message = " I would like to inquire about " + property?.name;
  const basePath = property?.category === "offplan" ? "/offplan" : "/buy";

  return (
    <div className="space-y-4">
      <div className="md:h-[300px] w-full">
        <SingleCarousel images={property?.images} />
      </div>
      <div className="space-y-4">
        <Link href={`${basePath}/${property.slug}`}>
          <p className="heading truncate">{property?.name}</p>
        </Link>
      </div>
      <div className="space-y-3 grey">
        <p className="items-center inline-flex gap-2">
          <CiLocationOn /> {property?.location}
        </p>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/bed.svg"
              alt="bed"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <p>{property?.bedrooms}</p>
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
            <p>{property?.bathrooms}</p>
          </div>
          <p>|</p>
          <div className="flex gap-2 items-center">
            <BsArrowsFullscreen />
            <p>{property?.squareFeet} sqft</p>
          </div>
        </div>
      </div>
      <p className="heading2">AED {property?.price} M</p>
      <div className="flex gap-2 grey">
        <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
          <CiMail />
          <Link href={"/contact-us"}>Email</Link>
        </button>
        <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
          <FiPhone />
          <Link href={"/contact-us"}>Call</Link>
        </button>
        <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full hover:bg-green-400 hover:text-white transition-colors duration-100">
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
  );
};

export default PropertyCard;
