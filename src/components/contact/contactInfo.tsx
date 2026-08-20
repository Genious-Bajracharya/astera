import { CiLocationOn, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const ContactInfo =() =>{
    return (
      <div className="flex flex-col lg:flex-row gap-6  plr maxi">
        {/* card1 */}
        <div className="border-[1px] py-7 px-11 hover:bg-neutral-200 transition-colors duration-150 ease-in-out  w-full border-[#C9C9C9] rounded-2xl space-y-6">
          <LuPhone className="w-8 h-8 grey" />
          <div className="space-y-1">
            <p className="text-[#929292] text-sm">Phone Number</p>
            <p className="grey">+971-4-552-6373</p>
          </div>
        </div>
        {/* card1 */}
        <div className="border-[1px] py-7 px-11 w-full hover:bg-neutral-200 transition-colors duration-150 ease-in-out border-[#C9C9C9] rounded-2xl space-y-6">
          <CiMail className="w-8 h-8 grey" />
          <div className="space-y-1">
            <p className="text-[#929292] text-sm">Email Address</p>
            <p className="grey">info@asterarealestate.com</p>
          </div>
        </div>
        {/* card1 */}
        <div className="border-[1px] py-7 px-11 w-full hover:bg-neutral-200 transition-colors duration-150 ease-in-out border-[#C9C9C9] rounded-2xl space-y-6">
          <CiLocationOn className="w-8 h-8 grey" />
          <div className="space-y-1">
            <p className="text-[#929292] text-sm">Location</p>
            <p className="grey">Office 964,Tamani Arts officers </p>
            <p className="grey">Business Bay - Dubai</p>
          </div>
        </div>
      </div>
    );
}

export default ContactInfo