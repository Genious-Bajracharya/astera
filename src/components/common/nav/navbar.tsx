"use client";
import Image from "next/image";
import UpperNav from "./uppernav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [sticky, setSticky] = useState(false);
  const isTransparent =
    pathname === "/" ||
    pathname === "/about-us" ||
    pathname === "/career" ||
    pathname === "/services" ||
    pathname === "/testimonials" ||
    pathname === "/news&insights" ||
    pathname === "/guides" ||
    /^\/offplan\/\d+$/.test(pathname) ||
    /^\/offplan\/[^\/]+$/.test(pathname) ||
    /^\/guides\/[^\/]+$/.test(pathname);

  useEffect(() => {
    const stickyHandler = () => {
      if (window.scrollY > 30) {
        console.log("sticky");
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", stickyHandler);

    return () => {
      window.removeEventListener("scroll", stickyHandler);
    };
  }, []);

  return (
    <div>
      {/* <header className="fixed top-0 left-0 right-0 z-[1000] bg-white shadow-sm"> */}
      <UpperNav />
      <div
        className={`
    plr py-6 pt-2 md:pt-6
    flex justify-between items-center
    
    transition-all duration-300
    w-full
    border-b border-white/20
    ${isTransparent ? "absolute z-50 bg-white/40 backdrop-blur-md" : ""}
    ${
      sticky
        ? "fixed top-0 bg-[#FCFCFC33]/20 backdrop-blur-lg shadow-md z-50"
        : "bg-[#FCFCFC33]/20 backdrop-blur-lg shadow-xl"
    }
  `}
      >
        <Link href={"/"}>
          <div className="md:w-[110px] w-[84px]  md:h-[70px]">
            <Image
              src={`${
                isTransparent
                  ? `/images/common/logoblack.png`
                  : `/images/common/logoblack.png`
              }`}
              alt="logo"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        {/* Navs  */}
        <div className="flex gap-8 items-center ">
          <div className="hidden lg:flex gap-8 items-center">
            <p className={pathname === "/buy" ? "primary" : ""}>
              <Link href={"/buy"} className=" bg-grey hover:text-[#D4992D]">
                {" "}
                Buy
              </Link>
            </p>
            <p className={pathname === "/offplan" ? "primary" : ""}>
              <Link href={"/offplan"} className="hover:text-[#D4992D]">
                Off Plan
              </Link>
            </p>
            <p className={pathname === "/about-us" ? "primary" : ""}>
              <Link href={"/about-us"} className="hover:text-[#D4992D]">
                {" "}
                About Us
              </Link>
            </p>
            <p className={pathname === "/services" ? "primary" : ""}>
              <Link href={"/services"} className="hover:text-[#D4992D]">
                Services
              </Link>
            </p>
            <p className={pathname === "/contact-us" ? "primary" : ""}>
              <Link href={"/contact-us"} className="hover:text-[#D4992D]">
                Contact Us
              </Link>
            </p>
            <p
              className={
                pathname === "/career" || pathname === "/career/[id]"
                  ? "primary"
                  : ""
              }
            >
              <Link href={"/career"} className="hover:text-[#D4992D]">
                Careers
              </Link>
            </p>
            <div className="relative group">
              <p className="cursor-pointer flex gap-4 items-center hover:text-[#D4992D]">
                Explore More <FaAngleDown />
              </p>

              {/* First Dropdown */}
              <div className="absolute left-0 pt-4 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#D4992D]"
                >
                  Testimonials{" "}
                </Link>

                {/* Nested Submenu for Testimonials */}
                <div className="relative group/testimonials">
                  <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#D4992D]">
                    <Link href={"/guides"}>Guides ▸</Link>
                  </p>

                  {/* Second Dropdown */}
                  <div className="absolute left-full top-0 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover/testimonials:opacity-100 transform -translate-y-2 group-hover/testimonials:translate-y-0 transition-all duration-200 z-50 pointer-events-none group-hover/testimonials:pointer-events-auto">
                    <Link
                      href="/guides/buyerguide"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#D4992D]"
                    >
                      Buyer Guides
                    </Link>
                    <Link
                      href="/guides/sellerguide"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#D4992D]"
                    >
                      Seller Guides
                    </Link>
                    <Link
                      href="/guides/areaguide"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#D4992D]"
                    >
                      Area Guides
                    </Link>
                  </div>
                </div>

                <Link
                  href="/news&insights"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#D4992D]"
                >
                  News & Insight
                </Link>
              </div>
            </div>
          </div>
          <div
            onClick={() => setDrawer(!drawer)}
            className="lg:hidden w-6 h-6 cursor-pointer"
          >
            {/* <Image
                        src={"/assets/hamburger.svg"}
                        width={100}
                        height={100}
                        alt="menu"
                        className="w-full h-full object-cover text-black"/> */}
            <svg
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="#none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H27"
                stroke={isTransparent ? `#FCFCFC` : `#0D0D0D`}
                strokeWidth="2"
              />
              <path
                d="M9 9H27"
                stroke={isTransparent ? `#FCFCFC` : `#0D0D0D`}
                strokeWidth="2"
              />
              <path
                d="M1 17H27"
                stroke={isTransparent ? `#FCFCFC` : `#0D0D0D`}
                strokeWidth="2"
              />
            </svg>
          </div>
          <button
            className={`rounded-full border-[1px]   cursor-pointer  py-2.5 px-3 md:px-8 bg-[#D4992D] text-white hover:bg-transparent transition-colors duration-100 ease-in-out  ${
              isTransparent
                ? "hover:text-white hover:border-white"
                : "hover:text-[#D4992D] hover:border-[#D4992D]"
            }`}
          >
            <Link href={"/contact-us"}>List your property</Link>
          </button>
        </div>
      </div>
      {drawer && (
        <div className="fixed top-16 left-0 h-screen w-screen z-[1000] bg-white px-5">
          <RxCross2
            onClick={() => setDrawer(!drawer)}
            className="ml-auto w-6 h-6"
          />
          <div className="space-y-4">
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/buy"}>Buy</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/offplan"}>Off Plan</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/about-us"}>About Us</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/services"}>Services</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/contact-us"}>Contact Us</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/career"}>Careers</Link>
            </p>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/testimonials"}>Testimonials</Link>
            </p>
            <div className="border-b-[1px] pb-4">
              <p
                className="grey flex justify-between items-center cursor-pointer"
                onClick={() => setShowGuides(!showGuides)}
              >
                <Link href={"/guides"}>Guides</Link>
                <span
                  className={`transform transition-transform duration-300 ${
                    showGuides ? "rotate-180" : ""
                  }`}
                >
                  <FaAngleDown />
                </span>
              </p>

              {showGuides && (
                <div className=" pt-2 space-y-2 text-sm text-gray-600">
                  <p onClick={() => setDrawer(!drawer)} className="pb-2">
                    <Link href={"/guides/buyerguide"}>Buyers Guide</Link>
                  </p>
                  <p onClick={() => setDrawer(!drawer)} className=" pb-2">
                    <Link href={"/guides/sellerguide"}>Sellers Guide</Link>
                  </p>
                  <p onClick={() => setDrawer(!drawer)} className=" pb-2">
                    <Link href={"/guides/areaguide"}>Area Advice</Link>
                  </p>
                </div>
              )}
            </div>
            <p
              onClick={() => setDrawer(!drawer)}
              className="grey border-b-[1px] pb-4"
            >
              <Link href={"/news&insights"}>News & Insights</Link>
            </p>{" "}
          </div>
        </div>
      )}
      {/* </header> */}
    </div>
  );
};

export default Navbar;
