// 'use client'

// import { useState } from 'react'
// import { GiSettingsKnobs } from 'react-icons/gi'
// import { FaChevronDown } from 'react-icons/fa6'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// const PropertyFilter = () => {
//   const router = useRouter()
//   const [location, setLocation] = useState('')
//   const [propertyType, setPropertyType] = useState('')
//   const [beds, setBeds] = useState('')
//   const [isModalOpen, setIsModalOpen] = useState(false) // if you want to add modal later

//   // Construct query params string
//   // const queryParams = new URLSearchParams()
//   // if(location) queryParams.append('location', location)
//   // if(propertyType) queryParams.append('propertytype', propertyType)
//   // if(beds) queryParams.append('beds', beds)
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const params = new URLSearchParams();

//     if (location) params.append("location", location);
//     if (propertyType) params.append("propertyType", propertyType);
//     if (beds) params.append("bedrooms", beds); // 👈 match backend field

//     router.push(`/buy?${params.toString()}`);
//   };

//   return (
//     <>
//       <form
//         className="flex justify-between gap-3 py-6 border-y border-[#C9C9C9]"
//         onSubmit={(e) => e.preventDefault()} // prevent form submit reload
//       >
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Location"
//           className="rounded-full w-[355px] border border-[#C9C9C9] px-6 py-2.5"
//         />

//         <div className="relative">
//           <select
//             value={propertyType}
//             onChange={(e) => setPropertyType(e.target.value)}
//             className="appearance-none rounded-full w-[275px] hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
//           >
//             <option value="">Property Type</option>
//             <option value="Apartment">Apartment</option>
//             <option value="Villa">Villa</option>
//           </select>
//           <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//         </div>

//         <div className="relative">
//           <select
//             value={beds}
//             onChange={(e) => setBeds(e.target.value)}
//             className="appearance-none rounded-full w-[205px] hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
//           >
//             <option value="">Beds</option>
//             <option value="Studio">Studio</option>
//             <option value="1">1 Bed</option>
//             <option value="2">2 Beds</option>
//             <option value="3">3 Beds</option>
//           </select>
//           <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//         </div>

//         <div
//           className="rounded-full w-[146px] inline-flex gap-5 items-center border border-[#C9C9C9] py-2 px-4 cursor-pointer"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <GiSettingsKnobs />
//           Filter
//         </div>

//         <button
//           type="button"
//           onClick={() => {
//             setLocation('')
//             setPropertyType('')
//             setBeds('')
//           }}
//           className="bg-[#F4F1EA] hidden lg:block rounded-full py-2.5 px-8"
//         >
//           Reset
//         </button>

//         <button
//         onClick={handleSearch}
//           // href={`/buy?${queryParams.toString()}`}
//           className="back text-white hidden lg:inline-flex items-center justify-center rounded-full py-2.5 px-8 cursor-pointer"
//         >
//           Search
//         </button>
//       </form>

//       {/* If you want the modal later, add it here */}
//     </>
//   )
// }

// export default PropertyFilter
"use client";

import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import FilterModal from "../common/drawer/filterDrawer";

const PropertyFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType") || ""
  );
  const [beds, setBeds] = useState(searchParams.get("bedrooms") || "");
  const [bathrooms, setBathrooms] = useState(
    searchParams.get("bathrooms") || ""
  );
  const [furnishing, setFurnishing] = useState(
    searchParams.get("furnishing") || ""
  );
  const [minSize, setMinSize] = useState(searchParams.get("minSize") || "");
  const [maxSize, setMaxSize] = useState(searchParams.get("maxSize") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [amenities, setAmenities] = useState<string[]>(
    searchParams.get("amenities")?.split(",") || []
  );
  const [features, setFeatures] = useState<string[]>(
    searchParams.get("features")?.split(",") || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) params.set("location", location);
    if (propertyType) params.set("propertyType", propertyType);
    if (beds) params.set("bedrooms", beds);
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (furnishing) params.set("furnishing", furnishing);
    if (minSize) params.set("minSize", minSize);
    if (maxSize) params.set("maxSize", maxSize);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (amenities.length > 0) params.set("amenities", amenities.join(","));
    if (features.length > 0) params.set("features", features.join(","));

    router.push(`/buy?${params.toString()}`);
  };

  const handleReset = () => {
    setLocation("");
    setPropertyType("");
    setBeds("");
    setBathrooms("");
    setFurnishing("");
    setMinSize("");
    setMaxSize("");
    setMinPrice("");
    setMaxPrice("");
    setAmenities([]);
    setFeatures([]);

    router.push("/buy");
  };

  return (
    <>
      <form
        className="flex justify-between gap-3 py-6 border-y border-[#C9C9C9]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="rounded-full w-full lg:w-[355px] border border-[#C9C9C9] px-6 py-2.5"
        />

        <div className="relative hidden lg:inline-flex">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="appearance-none rounded-full w-[275px] hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
          >
            <option hidden value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative hidden lg:inline-flex">
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="appearance-none rounded-full w-[205px] hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
          >
            <option value="">Beds</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
            <option value="3">3 Beds</option>
            <option value="4">4 Beds</option>
            <option value="5">5 Beds</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>

        <div
          className=" text-black hover:bg-blue-400  hover:text-white transition-colors duration-100 ease-in-ou rounded-full w-[146px] inline-flex gap-5 items-center border border-[#C9C9C9] py-2 px-4 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <GiSettingsKnobs />
          Filter
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="bg-[#F4F1EA] hover:bg-red-400 hover:text-white cursor-pointer transition-colors duration-100 ease-in-out hidden lg:block rounded-full py-2.5 px-8"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={handleSearch}
          className="back text-white hidden lg:inline-flex items-center justify-center rounded-full py-2.5 px-8 cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* ✅ Filter Modal */}
      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        furnishing={furnishing}
        setFurnishing={setFurnishing}
        minSize={minSize}
        setMinSize={setMinSize}
        maxSize={maxSize}
        setMaxSize={setMaxSize}
        amenities={amenities}
        setAmenities={setAmenities}
        onApply={handleSearch} // <-- add this
        onReset={handleReset}
        // features={features}
        // setFeatures={setFeatures}
      />
    </>
  );
};

export default PropertyFilter;
