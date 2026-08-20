import Link from "next/link";
import ClientCarousel from "../common/sliders/clietSlider";

const Client = () => {
  return (
    <div className="bg-[#F7F7F7] py-21 space-y-9 plr   ">
      <div className="flex gap-3  flex-col lg:flex-row justify-between text-center lg:text-left maxi ">
        <h2 className="text-[24px] font-bold">Why Our Clients Trust Us</h2>
        <p className="grey lg:w-1/2 t">{`What our valued clients say about their journey with us real stories of trust, satisfaction, and exceptional results in Astera Real Estate.`}</p>
      </div>
      {/* Client reviews  */}

      <div className="maxi">
        <ClientCarousel />
      </div>

      <p className="font-bold hover:scale-110  underline-offset-6 underline text-center cursor-pointer">
        <Link href={"/testimonials"}>View More</Link>
      </p>
    </div>
  );
};

export default Client;
