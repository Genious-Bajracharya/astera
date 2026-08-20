import Image from "next/image";
import Link from "next/link";
const ThreeGuides = () => {
  return (
    <div className="space-y-8 plr maxi">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-[32px] font-bold">
          Master The Market With These Guides
        </h1>
        <p className="lg:w-[55%] grey">
          {`Gain expert insights whether you're buying, selling, or seeking the latest Dubai real estate information. Our Dubai Property Guides offer the easiest path to stay ahead in the real estate game, helping you make successful decisions effortlessly.`}{" "}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* card1 */}
        <Link
          href={"/guides/buyerguide"}
          className="space-y-4 group overflow-hidden  lg:w-1/3  rounded-2xl "
        >
          <div className="h-[340px] w-full">
            <Image
              src={"/images/guides/guide1.jpg"}
              alt="vector"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-100 transition-transform ease-in-out"
            />
          </div>
          <div className="space-y-1.5">
            <p className="heading">Buyer Guide</p>
            <p className="grey">
              From moving to handover: Your step-by-step Dubai property buying
              guide & the best areas to buy Property in Dubai
            </p>
          </div>
        </Link>
        {/* card2 */}
        <Link
          href={"/guides/sellerguide"}
          className="space-y-4   lg:w-1/3  rounded-2xl group overflow-hidden"
        >
          <div className="h-[340px] w-full">
            <Image
              src={"/images/guides/guide2.jpg"}
              alt="vector"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-100 transition-transform ease-in-out"
            />
          </div>
          <div className="space-y-1.5">
            <p className="heading">Seller Guide</p>
            <p className="grey">
              Your comprehensive guide to selling Property in Dubai: Learn how
              to sell property in Dubai successfully
            </p>
          </div>
        </Link>
        {/* card3 */}
        <Link
          href={"/guides/areaguide"}
          className="space-y-4   lg:w-1/3  rounded-2xl group overflow-hidden"
        >
          <div className="h-[340px] w-full">
            <Image
              src={"/images/guides/guide3.jpg"}
              alt="vector"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-100 transition-transform ease-in-out"
            />
          </div>
          <div className="space-y-1.5">
            <p className="heading">Area Guide</p>
            <p className="grey">
              A step-by-step area guide for Dubai neighborhoods to find your
              perfect community, from vibrant city life to serene areas.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThreeGuides;
