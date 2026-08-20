import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// import Image from "next/image";
import SingleCarousel from "../sliders/singleCardSlider";
import { OffPlanInterface } from "@/interfaces/interface";
import Link from "next/link";

const images = ["/random.webp", "/random.webp", "/random.webp"];

interface OffPlanProps {
  data: OffPlanInterface;
}

const PropertyCard2 = ({ data }: OffPlanProps) => {
  const message = `I would like to inquire about ${data?.name ?? ""}`;

  return (
    <div className="space-y-4 hover:bg-neutral-300 p-2  rounded-md">
      {/* Image container */}
      <div className="md:h-[300px] w-full">
        {/* <Image
          src={"/random.webp"}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        /> */}
        <SingleCarousel images={data?.images ?? images} />
      </div>

      <div className="space-y-2">
        <Link href={`/offplan/${data?.slug}`}>
          <p className="heading truncate">{data?.name ?? "Unnamed Property"}</p>
        </Link>

        <p className="items-center inline-flex gap-2">
          <CiLocationOn /> {data?.location ?? "Location not specified"}
        </p>

        <p className="grey">
          Handover: <span className="font-bold">{data?.handover ?? "TBD"}</span>
        </p>

        <p className="grey">Starting from</p>

        <p className="heading2">
          AED {data?.price ? `${data.price.value} ${data.price.unit}` : "Soon"}
        </p>
      </div>

      <div className="flex gap-2 grey">
        <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full hover:bg-purple-400 hover:text-white transition-colors duration-100">
          <CiMail />
          <Link href={"/contact-us"}>Email</Link>
        </button>

        <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-100">
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

export default PropertyCard2;
