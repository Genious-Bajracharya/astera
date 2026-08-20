import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { OffPlanInterface } from "@/interfaces/interface";
import { getPropertyTypeIcon } from "@/utils/getPropertyTypeIcon";

interface DescriptionLeftProps {
  data: OffPlanInterface | null | undefined;
}

const DescriptionLeft: React.FC<DescriptionLeftProps> = ({ data }) => {
  // Guard
  if (!data) return null;

  return (
    <div className="space-y-6 top-11 lg:w-[60%] lg:sticky lg:self-start">
      {/* Breadcrumb & Heading */}
      <div className="space-y-3">
        <p className="grey">
          <span className="font-bold">Home /</span> Buy Off Plan
          {data.propertyType || data.name || data.location ? " / " : ""}
          {data.propertyType ? `${data.propertyType}` : ""}
          {data.name ? `, ${data.name}` : ""}
          {data.location ? `, ${data.location}` : ""}
        </p>

        {data.name && <h1 className="text-[32px] font-bold">{data.name}</h1>}
      </div>

      {/* Property Type & Size */}
      <div className="flex gap-6 flex-wrap items-center">
        {data.propertyType && (
          <div className="flex gap-2 items-center">
            {getPropertyTypeIcon(data.propertyType)}
            <p>{data.propertyType}</p>
          </div>
        )}

        {data.propertyType && data.squareFeet && <span>|</span>}

        {data.squareFeet && (
          <div className="flex gap-2 items-center">
            <BsArrowsFullscreen />
            <p>{data.squareFeet} sqft</p>
          </div>
        )}
      </div>

      {/* Description */}
      {data.description && <p className="grey">{data.description}</p>}

      {/* QR Code */}
      {data.qr?.url && (
        <div className="w-[100px] h-[100px]">
          <Image
            src={data.qr.url}
            alt="QR code"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default DescriptionLeft;
