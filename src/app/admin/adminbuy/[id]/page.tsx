// app/admin/adminbuy/[id]/page.tsx

"use client"; // 👈 Make this a client component

import UpdateBuyPropertyForm from "@/components/admin/forms/buyUpdateform";
import { useEffect, useState } from "react";
import { PropertyInterface } from "@/interfaces/interface";
import { useParams } from "next/navigation";
import { GetBuy } from "@/api";
import Loading from "@/app/loading";

export default function Page() {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof id !== "string") return;
    const fetchProperty = async () => {
      try {
        const {data} = await GetBuy(id);
        setProperty(data);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProperty();
  }, [id]);

  if (loading) return <div className="p-6"><Loading/></div>;
  if (!property) return <p className="p-6 text-red-500">Property not found</p>;

  return (
    <div className="p-6">
      <UpdateBuyPropertyForm initialData={property} />
    </div>
  );
}