/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import axios from "axios";

const LandingHero = () => {
  const [listingType, setListingType] = useState<"Buy" | "Off Plan">(
    "Off Plan"
  );
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");

  // Featured properties
  const [featuredBuy, setFeaturedBuy] = useState<any>(null);
  const [featuredOffplan, setFeaturedOffplan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      try {
        const [buyData, offplanData] = await Promise.all([
          axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/buy/featured`)
            .then((r) => r.data)
            .catch(() => null),
          axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/offplan/featured`)
            .then((r) => r.data)
            .catch(() => null),
        ]);

        setFeaturedBuy(buyData);
        setFeaturedOffplan(offplanData);
      } catch (err) {
        console.error("Failed to load featured properties", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  // Get the correct featured property based on listing type
  const featured = listingType === "Buy" ? featuredBuy : featuredOffplan;

  // Generate correct link
  const getFeaturedLink = () => {
    if (!featured?._id) {
      return listingType === "Buy" ? "/buy" : "/offplan";
    }
    return listingType === "Buy"
      ? `/buy/${featured.slug}`
      : `/offplan/${featured.slug}`;
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (propertyType) params.set("propertyType", propertyType);
    if (beds && listingType === "Buy") params.set("bedrooms", beds);
    if (search) params.set("name", search);

    const route = listingType === "Buy" ? "/buy" : "/offplan";
    router.push(`${route}?${params.toString()}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-[430px] lg:h-[750px] bg-cover bg-bottom relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source
            src="https://res.cloudinary.com/dswb8domu/video/upload/q_auto,f_auto/DUBAI_SKYLINES_1_hmdtsl.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

        {/* Right hover div - Desktop only */}
        <div className="hidden lg:block p-3 absolute top-[135px] right-[65px] rounded-xl border-[1px] bg-[#FFFFFF24]/20 border-[#FBFBFB4D] backdrop-blur-[6px] space-y-4">
          {loading ? (
            <div className="w-[250px] h-[135px] bg-gray-800 animate-pulse rounded-xl"></div>
          ) : (
            <>
              <div className="w-[250px] h-[135px] relative rounded-xl overflow-hidden">
                <Image
                  src={
                    featured?.images?.[0]?.url || "/images/landing/heroa.jpg"
                  }
                  alt={featured?.name || "Featured property"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                  <p className="heading text-white text-lg font-semibold">
                    {featured?.name || "Featured Property"}
                  </p>
                  <p className="text-gray-300">
                    {featured?.propertyType || "Property"}
                  </p>
                </div>
                <Link
                  href={getFeaturedLink()}
                  className="bg-white rounded-full w-11 h-11 grid place-items-center hover:bg-gray-100 transition"
                >
                  <RxArrowTopRight className="w-6 h-6" />
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Left side content */}
        <div className="flex absolute lg:left-[65px] left-2 bottom-6 lg:bottom-[120px] text-white">
          <div className="space-y-16">
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="heading3">
                Find Iconic & Luxury <br /> Properties in Dubai
              </h1>
              <p>We bring new experience of your dream property</p>
            </div>

            {/* Filters */}
            <div className="space-y-6">
              {/* Radio-style buttons - ADDED BACK */}
              <div className="flex gap-3">
                {["Buy", "Off Plan"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setListingType(type as "Buy" | "Off Plan")}
                    className={`border-[0.5px] md:w-[112px] py-1.5 px-4 rounded-full backdrop-blur-2xl transition ${
                      listingType === type
                        ? "bg-white text-black font-bold"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <form
                onSubmit={handleSearch}
                className="flex gap-0 justify-between md:gap-[100px] items-center rounded-full bg-[#FCFCFC33]/20 border-[1px] border-[#FBFBFB4D] backdrop-blur-[6px] py-2 md:py-2 pl-2 md:pl-8 pr-4"
              >
                {/* Search Icon & Label */}
                <div className="flex gap-2 md:gap-4 items-center">
                  <FaSearch className="shrink-0" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Property"
                    className="
      w-full
      text-xs md:text-base
      focus:outline-none
      bg-transparent
      placeholder-gray-300
      truncate
    "
                  />
                </div>

                <div className="flex gap-2 md:gap-4 items-center">
                  {/* Property Type Dropdown - ADDED BACK */}
                  <div className="relative">
                    <select
                      value={propertyType}
                      onChange={(e) => {
                        if (e.target.value == "all") {
                          setPropertyType(undefined as unknown as string);
                          return;
                        }
                        setPropertyType(e.target.value);
                      }}
                      className="appearance-none rounded-full lg:w-[250px] lg:inline-flex gap-3 items-center border text-xs md:text-base border-[#BBBBBB] py-2.5 px-4 bg-transparent text-white focus:outline-none"
                    >
                      <option value="" disabled hidden>
                        Select Property Type
                      </option>
                      <option className="text-black" value="all">
                        All Types
                      </option>
                      <option className="text-black" value="Apartments">
                        Apartments
                      </option>
                      <option className="text-black" value="Townhouses">
                        Townhouses
                      </option>

                      <option className="text-black" value="Villa">
                        Villa
                      </option>
                      <option className="text-black" value="Commercial">
                        Commercial
                      </option>
                      <option className="text-black" value="Luxury">
                        Luxury/Branded
                      </option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none hidden lg:block" />
                  </div>

                  {/* Beds Dropdown - ADDED BACK */}
                  {listingType === "Buy" && (
                    <div className="relative">
                      <select
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)}
                        className="appearance-none rounded-full hidden lg:w-[135px] lg:inline-flex gap-3 items-center border border-[#BBBBBB] py-2.5 px-4 bg-transparent text-white focus:outline-none"
                      >
                        <option className="text-black" value="">
                          Beds
                        </option>
                        <option className="text-black" value="1">
                          1 Bed
                        </option>
                        <option className="text-black" value="2">
                          2 Beds
                        </option>
                        <option className="text-black" value="3">
                          3 Beds
                        </option>
                        <option className="text-black" value="4">
                          4 Beds
                        </option>
                        <option className="text-black" value="5">
                          5 Beds
                        </option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none hidden lg:block" />
                    </div>
                  )}

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="bg-white cursor-pointer rounded-full px-6 py-2.5  text-xs md:text-base  text-black hover:bg-gray-100 transition"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile featured property */}
      <div className="lg:hidden p-4 bg-white">
        <div className="p-3 rounded-xl border border-gray-200 shadow-sm space-y-4">
          {loading ? (
            <div className="w-full h-[180px] bg-gray-200 animate-pulse rounded-xl"></div>
          ) : (
            <>
              <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
                <Image
                  src={
                    featured?.images?.[0]?.url || "/images/landing/heroa.jpg"
                  }
                  alt={featured?.name || "Featured property"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                  <p className="text-gray-900 text-lg font-semibold">
                    {featured?.name || "Featured Property"}
                  </p>
                  <p className="text-gray-600">
                    {featured?.propertyType || "Property"}
                  </p>
                </div>
                <Link
                  href={getFeaturedLink()}
                  className="bg-gray-900 rounded-full w-11 h-11 grid place-items-center flex-shrink-0 hover:bg-gray-800 transition"
                >
                  <RxArrowTopRight className="w-6 h-6 text-white" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
