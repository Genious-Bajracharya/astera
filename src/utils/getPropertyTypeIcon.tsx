import { MdApartment, MdOutlineVilla } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsBuildings, BsShop, BsFillHouseDoorFill } from "react-icons/bs";
import { GiGroundSprout } from "react-icons/gi";

export const getPropertyTypeIcon = (propertyType?: string) => {
  if (!propertyType) return <BsBuildings className="w-5 h-5" />;

  const value = propertyType.toLowerCase();

  if (value.includes("land") || value.includes("plot")) {
    return <GiGroundSprout className="w-5 h-5" />;
  }

  if (value.includes("villa")) {
    return <MdOutlineVilla className="w-5 h-5" />;
  }

  if (
    value.includes("apartment") ||
    value.includes("flat") ||
    value.includes("residence") ||
    value.includes("tower")
  ) {
    return <MdApartment className="w-5 h-5" />;
  }

  if (value.includes("office") || value.includes("commercial")) {
    return <HiOutlineOfficeBuilding className="w-5 h-5" />;
  }

  if (value.includes("shop") || value.includes("retail")) {
    return <BsShop className="w-5 h-5" />;
  }

  if (value.includes("house") || value.includes("home")) {
    return <BsFillHouseDoorFill className="w-5 h-5" />;
  }

  return <BsBuildings className="w-5 h-5" />;
};
