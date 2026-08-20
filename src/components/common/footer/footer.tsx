import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
const Footer = () => {
  return (
    // <div className=" plr bg-[url(/images/footer/footer.png)] relative  bg-no-repeat bg-cover space-y-9  py-6">
    <div className=" plr bg-black relative  bg-no-repeat bg-cover space-y-9 mt-20  py-6">
      {/* better overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/70"></div> */}
      {/* Logo socials */}
      <div className="flex gap-3 lg:gap-0 flex-col lg:flex-row lg:justify-between border-b-[1px] pb-9   border-[#525252] ">
        <div>
          <Link
            href={'/'}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[110px] h-[70px] mx-auto lg:mx-0">
              <Image
                src={'/images/common/logowhite.png'}
                alt="logo"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
        <div className="flex gap-4 mx-auto lg:mx-0">
          <Link
            href={'https://www.facebook.com/asterarealestate'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="rounded-full bg-[#1B1B1B] text-white w-10 h-10 p-2 cursor-pointer hover:text-[#D4992D] " />
          </Link>
          <Link
            href={'https://www.instagram.com/astera.realestate/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="rounded-full bg-[#1B1B1B] text-white w-10 h-10 p-2 cursor-pointer hover:text-[#D4992D] " />
          </Link>
          <Link
            href={'https://www.tiktok.com/@astera.realestate'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="rounded-full bg-[#1B1B1B] text-white w-10 h-10 p-2 cursor-pointer hover:text-[#D4992D] " />
          </Link>
          <Link
            href={'https://www.linkedin.com/company/asterarealestate/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="rounded-full bg-[#1B1B1B] text-white w-10 h-10 p-2 cursor-pointer hover:text-[#D4992D] " />
          </Link>
          <Link
            href={'https://www.youtube.com/@AsteraRealEstate'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="rounded-full bg-[#1B1B1B] text-white w-10 h-10 p-2 cursor-pointer hover:text-[#D4992D] " />
          </Link>
        </div>
      </div>

      {/* footer navs */}
      <div className="flex flex-col xl:flex-row gap-11 lg:gap-0 justify-between px-6">
        {/* sec1 */}
        <div className="space-y-6 mr-6 my-3">
          <p className="heading2 text-white">Sign up for Exclusive Offers</p>
          <div className="relative flex">
            <input
              type="text"
              placeholder={`Enter email address `}
              className="rounded-full py-3 px-6 w-full outline-none bg-white"
            />
            <FaPaperPlane className="rounded-full absolute right-2 bottom-1 bg-[#1B1B1B] text-white w-10 h-10 p-2 " />
          </div>
        </div>
        {/* sec2 */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6 justify-center w-full  ">
          <div className="space-y-3 text-[#D8D8D8]">
            <p className="font-bold text-lg text-white">Our Company</p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/about-us'}>About Us</Link>
            </p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/career'}>Career</Link>
            </p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/services'}>Services</Link>
            </p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/guides'}>Guides</Link>
            </p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/contact-us'}>Contact Us</Link>
            </p>
            <p className="hover:text-[#D4992D]">
              <Link href={'/news&insights'}>Events & News</Link>
            </p>
          </div>
          {/* sec3 */}
          <div className="space-y-8 text-[#D8D8D8]">
            <div className="space-y-3">
              <p className="font-bold text-lg text-white">Properties</p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/buy'}>Property for Sale</Link>
              </p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/offplan'}>Off Plan Property</Link>
              </p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/contact-us'}>Sell with Us</Link>
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-lg text-white">Legal</p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
              </p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/terms-and-condition'}>Terms & Conditions</Link>
              </p>
              <p className="hover:text-[#D4992D]">
                <Link href={'/cookie-policy'}>Cookie Policy</Link>
              </p>
            </div>
          </div>
          {/* sec4 */}
          <div className="flex flex-col gap-3 text-[#D8D8D8]">
            <p className="font-bold text-lg text-white">Get in Touch</p>
            <Link
              href={
                'https://www.google.com/maps?q=Office+964,+Tamani+Arts+Offices,+Business+Bay+-+Dubai'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex gap-1.5 items-center hover:text-[#D4992D]">
                <CiLocationOn className="w-5 h-5" />
                Office 964, Tamani Arts offices, <br /> Business Bay - Dubai
              </p>
            </Link>
            <Link href={'mailto:company@gmail.com'}>
              <p className="flex gap-1.5 items-center hover:text-[#D4992D]">
                <CiMail className="w-5 h-5" />
                info@asterarealestate.com
              </p>
            </Link>
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            >
              <p className="flex gap-1.5 items-center hover:text-[#D4992D]">
                <LuPhone className="w-5 h-5" />
                +971 45526373
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
