import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const LandingAbout = () => {
  return (
    <div className="plr space-y-6 maxi">
      <h2 className="text-[24px] font-bold text-center">
        About Astera Real Estate
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="lg:w-[25%]">
          <div className="space-y-8">
            <p>
              Astera Real Estate is a leading real channel partner with a
              profound knowledge of Dubai Real Estate market.
            </p>
            <div className="space-y-4 flex flex-col">
              <div className="inline-flex gap-3">
                <div className="rounded-full back h-6 w-6 grid items-center justify-center">
                  <FaCheck className="w-3 h-4 text-white" />
                </div>
                <p className="grey1">Decades of Expertise</p>
              </div>
              <div className="inline-flex gap-3">
                <div className="rounded-full back h-6 w-6 grid items-center justify-center">
                  <FaCheck className="w-3 h-4 text-white" />
                </div>
                <p className="grey">Quality You Can Rely On</p>
              </div>
              <div className="inline-flex gap-3">
                <div className="rounded-full back h-6 w-6 grid items-center justify-center">
                  <FaCheck className="w-3 h-4 text-white" />
                </div>
                <p className="grey">Comprehensive Services</p>
              </div>
              <div className="inline-flex gap-3">
                <div className="rounded-full back h-6 w-6 grid items-center justify-center">
                  <FaCheck className="w-3 h-4 text-white" />
                </div>
                <p className="grey">Client-Centered Approach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="h-full w-full lg:w-[630px] xl:w-[700px]">
          <Image
            // src={"/images/landing/new.png"}
            src={"/images/landing/edit.png"}
            alt="about"
            width={500}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 lg:grid-cols-1 space-x-8 gap-y-8 lg:space-y-8">
          <div className="border-b-[1px] pb-8">
            <p className="heading3 ">15+</p>
            <p className="grey2">Years of experience</p>
          </div>
          <div className="border-b-[1px] pb-8">
            <p className="heading3 ">130+</p>
            <p className="grey2">Projects completed</p>
          </div>
          <div className="border-b-[1px] pb-8">
            <p className="heading3 ">10K+</p>
            <p className="grey2">Facebook followers</p>
          </div>
          <div className="border-b-[1px] pb-8">
            <p className="heading3 ">7+</p>
            <p className="grey2">Achievement awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
