// import BuyCarousel from '../sliders/buyCarousel'
"use client";
import { CiLocationOn } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import { OffPlanInterface } from "@/interfaces/interface";
import Link from "next/link";
import { useContext } from "react";
import { OffplanContext } from "@/context/offplanContext";
import Loading from "@/app/loading";
import toast from "react-hot-toast";

interface BuyCardProps {
  property: OffPlanInterface;
}

const AdminOffplanCard: React.FC<BuyCardProps> = ({ property }) => {
  const context = useContext(OffplanContext);

  if (!context) return <Loading></Loading>;

  const { deleteProduct, isLoading } = context;

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmed) return;

    toast.promise(deleteProduct(id), {
      loading: "Deleting...",
      success: "Deleted successfully!",
      error: "Delete failed. Please try again.",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-11 shadow-md rounded-xl p-2">
      {/* Carousel */}
      <div className="rounded-lg  h-[150px]  lg:w-[300px]">
        <Image
          src={property?.images?.[0]?.url ?? "/images/offplan/offplanhero.jpg"}
          alt={property?.name ?? "Offplan property"}
          width={500}
          height={200}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Property Info */}
      <div className="lg:space-y-7 space-y-3  w-full ">
        <p className="heading2">
          <Link href={`/offplan/${property.slug}`}>{property.name}</Link>
        </p>

        <div className="space-y-3 grey">
          <p className="inline-flex items-center gap-2">
            <CiLocationOn />
            {property.location}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap grey">
          <button className="inline-flex gap-1.5 items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full">
            <CiEdit />
            <Link href={`/admin/adminoffplan/${property._id}`}>Update</Link>
          </button>
          <button
            onClick={() => handleDelete(property._id)}
            className="inline-flex gap-1.5 cursor-pointer items-center bg-[#F0F0F0] py-2.5 px-6 rounded-full"
          >
            <AiOutlineDelete />

            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOffplanCard;
