import Image from "next/image";

const Choose = () => {
  return (
    <div className="space-y-8 plr maxi">
      <div className="flex flex-col  lg:flex-row text-center lg:text-left justify-between">
        <h2 className="lg:text-[54px] text-3xl ">Why Choose Us</h2>
        <p className="lg:w-[55%]  grey">
          Working round the clock to provide hassle-free personalized
          consultancy and advices is always the cynosure of our business. Today,
          we not only help you buy or take a property on rent, but also manage
          your property and provide consultancy services like no other.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        {/* card1 */}
        <div className="space-y-6 text-center py-11 px-8 lg:w-1/3  rounded-2xl bg-[#FFEFEF]">
          <div className="h-16 w-16 mx-auto">
            <Image
              src={"/images/services/vector1.png"}
              alt="vector"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="heading">Associated with 25+ Developers</h3>
          <p className="grey">
            We take pride in associating with some of the renowned real estate
            developers in Dubai such as Emaar, Damac, Sobha Realty, Danube,
            Vincitore, and many others.
          </p>
        </div>
        {/* card3 */}
        <div className="space-y-6 text-center py-11 px-8 lg:w-1/3  rounded-2xl bg-[#EEFDFF]">
          <div className="h-16 w-16 mx-auto">
            <Image
              src={"/images/services/vector2.png"}
              alt="vector"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="heading">Customized Approach</h3>
          <p className="grey">
            We are committed towards understanding your preferences, budget, and
            purpose. No matter if you are buying, selling, or renting, we follow
            a customized approach that best aligns with your priorities.
          </p>
        </div>
        {/* card2 */}
        <div className="space-y-6 text-center py-11 px-8 lg:w-1/3  rounded-2xl bg-[#EDFFF3]">
          <div className="h-16 w-16 mx-auto">
            <Image
              src={"/images/services/vector3.png"}
              alt="vector"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="heading">Diverse Range of Properties</h3>
          <p className="grey">
            When you choose us, you get nothing but an easy access to an
            extensive range of properties, making your real estate search more
            efficient and comprehensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
