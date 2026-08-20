import Image from "next/image";
import { IoIosStar } from "react-icons/io";

interface ClientCardProps {
  name: string;
  time: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
}

const ClientCard = ({ name, time, title, desc, image, alt }: ClientCardProps) => {
  return (
    <div className="bg-white p-8 space-y-6 hover:bg-neutral-200 transition-colors duration-150 ease-in-out">
      <div className="flex gap-6 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={alt}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="space-y-0.5">
          <p className="heading">{name}</p>
          <p className="text-[#929292]">{time}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <IoIosStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <p className="heading">{title}</p>
        <p className="grey">{desc}</p>
      </div>
    </div>
  );
};

export default ClientCard;
