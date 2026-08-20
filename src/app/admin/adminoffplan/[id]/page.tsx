"use client"
import UpdateOffplanPropertyForm from "@/components/admin/forms/ofplanUpdateForm";
import { useEffect, useState } from "react";
import { OffPlanInterface } from "@/interfaces/interface";
import { useParams } from "next/navigation";
import { GetOffplan } from "@/api";
import Loading from "@/app/loading";


export default function Page() {
  const { id } = useParams();
  const [property, setProperty] = useState<OffPlanInterface | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      if (typeof id !== "string") return;
      const fetchProperty = async () => {
        try {
          const {data} = await GetOffplan(id);
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
      <UpdateOffplanPropertyForm initialData={property} />
    </div>
  );
};
