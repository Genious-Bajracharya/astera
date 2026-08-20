import Image from "next/image";

const Provide = () => {
  return (
    <div className="space-y-9 plr maxi">
      <h2 className="heading4 text-center">Services we provide</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* card1 */}
        <div className="space-y-4 lg:w-1/3 group overflow-hidden hover:bg-neutral-200 transition-colors duration-150 ease-in-out">
          <div className="w-full h-[330px] lg:h-[490px]">
            <Image
              src={"/images/services/provide1.jpg"}
              alt="provide"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-150 transition-transform ease-in-out"
            />
          </div>
          <div className="space-y-2 p-4 border-x-[1px] border-[#C9C9C9]">
            <h3 className="heading2">Property Management</h3>
            <p className="grey">
              We help you efficiently manage, maintain, and operate residential
              or commercial properties on your behalf.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="space-y-4 flex flex-col-reverse lg:flex-col  lg:w-1/3 overflow-hidden group hover:bg-neutral-200 transition-colors duration-150 ease-in-out">
          <div className="space-y-2 p-4 border-x-[1px] border-[#C9C9C9]">
            <h3 className="heading2">Consulting Services</h3>
            <p className="grey">
              We help clients make informed decisions about property
              investments, development, and management.
            </p>
          </div>
          <div className="w-full h-[330px] lg:h-[490px]">
            <Image
              src={"/images/services/provide2.jpg"}
              alt="provide"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-100 transition-transform ease-in-out"
            />
          </div>
        </div>
        {/* card3 */}
        <div className="space-y-4 lg:w-1/3 overflow-hidden group hover:bg-neutral-200 transition-colors duration-150 ease-in-out">
          <div className="w-full h-[330px] lg:h-[490px]">
            <Image
              src={"/images/about/about3.jpg"}
              alt="provide"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-100 transition-transform ease-in-out"
            />
          </div>
          <div className="space-y-2 p-4 border-x-[1px] border-[#C9C9C9]">
            <h3 className="heading2">Buy and Sell Property</h3>
            <p className="grey">
              We have a dedicated team working round the clock to help you
              easily buy or sell your property in Dubai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
