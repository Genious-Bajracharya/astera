import Image from "next/image";
import Link from "next/link";

const Seller = () => {
  return (
    <div className="plr flex flex-col lg:flex-row gap-6 maxi">
      {/* Card 1 - You need a house */}
      <div className="flex-1 bg-gradient-to-b from-[#E6FCFF] via-[#D1F9FF] to-[#CEE6FF] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
          <p className="heading2">You need a house</p>
          <p className="grey mt-2">Looking for a place to call home?</p>
          <button className="mt-6 w-fit outline-[1px] rounded-full px-8 py-3 font-bold hover:bg-white hover:text-black transition">
            <Link href="/contact-us/buy">Contact Seller</Link>
          </button>
        </div>

        <div className="relative w-full lg:w-[55%] h-[280px] lg:h-auto">
          <Image
            src="/images/common/sell1.png"
            alt="Luxury house"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>

      {/* Card 2 - Sell your house */}
      <div className="flex-1 bg-gradient-to-b from-[#EFFFEE] via-[#E1FFDE] to-[#C7FFDD] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
          <p className="heading2">Sell your house</p>
          <p className="grey mt-2">Ready to sell your house?</p>
          <button className="mt-6 w-fit outline-[1px] rounded-full px-8 py-3 font-bold hover:bg-white hover:text-black transition">
            <Link href="/contact-us/seller">Sell Property</Link>
          </button>
        </div>

        <div className="relative w-full lg:w-[45%] h-[280px] lg:h-[240px]">
          <Image
            src="/images/common/sell2.png"
            alt="Modern building"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Seller;
