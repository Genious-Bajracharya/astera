"use client";

import { useState, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterModal from "../common/drawer/filterDrawer";
import { PropertyTypeSelect } from "@/hooks/propertyType";
import { OffplanContext } from "@/context/offplanContext";
import { FaChevronDown } from "react-icons/fa6";

const PROPERTY_TYPES = [
  { value: "", label: "All Types" },
  { value: "Apartments", label: "Apartments" },
  { value: "Townhouses", label: "Townhouses" },
  { value: "Villa", label: "Villa" },
  { value: "Commercial", label: "Commercial" },
  { value: "Luxury", label: "Luxury / Branded" },
];

const PropertyFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");

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

    if (name) params.set("name", name);
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

    router.push(`/offplan?${params.toString()}`);
  };

  const handleReset = () => {
    setName("");
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

    router.push("/offplan");
  };

  const context = useContext(OffplanContext);
  if (!context) return <div>Loading...</div>;

  const { offplanData } = context;

  return (
    <>
      <form
        className="flex justify-between gap-3 py-6 border-y border-[#C9C9C9]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Property Name"
          className="rounded-full w-[300px] border border-[#C9C9C9] px-6 py-2.5"
        />

        {/* Location */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="rounded-full w-[300px] border border-[#C9C9C9] px-6 py-2.5"
        />

        {/* Property Type */}
        {/* <PropertyTypeSelect
          value={propertyType}
          onChange={setPropertyType}
          offplanData={offplanData}
        /> */}
        <div className="relative min-w-[290px]">
          <select
            value={propertyType}
            onChange={(e) => {
              if (e.target.value == "all") {
                setPropertyType(undefined as unknown as string);
                return;
              }
              setPropertyType(e.target.value);
            }}
            className="appearance-none rounded-full lg:w-[250px] lg:inline-flex gap-3 items-center border text-xs md:text-base border-[#BBBBBB] py-2.5 px-4 bg-transparent text-black focus:outline-none"
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
          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#F4F1EA] hidden lg:block rounded-full py-2.5 px-8"
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
        </div>
      </form>

      {/* Filter Modal */}
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
        onApply={handleSearch}
        onReset={handleReset}
      />
    </>
  );
};

export default PropertyFilter;
