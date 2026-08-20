import { FaChevronDown } from "react-icons/fa";

interface OffplanItem {
  propertyType?: string;
}

interface PropertyTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  offplanData: OffplanItem[];
  className?: string;
}

export const PropertyTypeSelect: React.FC<PropertyTypeSelectProps> = ({
  value,
  onChange,
  offplanData,
  className = "",
}) => {
  // Capitalize first letter of each property type
  const capitalizeFirst = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Get ALL unique property types from offplanData and capitalize first letter
  const propertyTypes: string[] = Array.from(
    new Set(
      offplanData
        .map((item) => {
          const type = item.propertyType?.trim();
          if (!type) return null;
          return capitalizeFirst(type);
        })
        .filter((type): type is string => Boolean(type)) // Remove null/undefined
    )
  ).sort(); 


  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full w-[275px] hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
      >
        <option value="">Property Type</option>
        {propertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
};