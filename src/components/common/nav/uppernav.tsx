import { LuPhone } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { PiListPlus } from "react-icons/pi";
import Link from "next/link";
const UpperNav = () => {
  return (
    <div className="plr  flex flex-col md:flex-row text-xs md:text-base  gap-3 justify-between py-4">
      <div className="flex  gap-3 items-center mx-auto md:mx-0 ">
        <LuPhone className="w-4 h-4" />
        <p>+971-4-552-6373 </p>
      </div>

      <div className="flex gap-11 items-center mx-auto md:mx-0">
        <div className="flex gap-3 items-center hover:text-[#D4992D]">
          <FaRegBookmark />
          <p>
            <Link href={"/bookmarks"}>Bookmark</Link>
          </p>
        </div>
        <div className="flex gap-3 items-center hover:text-[#D4992D]">
          <PiListPlus className="w-6 h-6 grey" />
          <p>
            <Link href={"/compareproperty"}>Compare</Link>
          </p>
        </div>
        {/* <div className="flex gap-3 items-center">
                    <CiSettings className="w-5 h-5"/>
                    <p>Prefrence</p>
                </div> */}
      </div>
    </div>
  );
};

export default UpperNav;
