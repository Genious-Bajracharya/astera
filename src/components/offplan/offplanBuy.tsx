"use client";
import OffPlanCard from "../common/cards/offplanCard";
import PropertyFilter from "@/components/offplan/offplanFilter";
import { GetOffplans } from "@/api";
import { useEffect, useState } from "react";
import { OffPlanInterface } from "@/interfaces/interface";
import { useSearchParams, useRouter } from "next/navigation";
import Loading from "@/app/loading";

const OffPlanBuy = () => {
  const [offplanData, setOffplandata] = useState<OffPlanInterface[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);
  const limit = 9;
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        setIsLoading(true);
        const queryString = searchParams.toString();

        const data = await GetOffplans(`${queryString}`);
        setOffplandata(data.data);
        // console.log(data)
        setTotal(data.total);
        setIsLoading(false);
        // console.log("total :",data.total)
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/offplan?${params.toString()}`);
    setCurrentPage(page);
  };

  if (isloading) return <Loading />;

  return (
    <div className="plr space-y-9">
      <PropertyFilter />
      {/* properties for sale */}
      <div className="space-y-9">
        <div className="sapce-y-3">
          <p className="grey">
            <span className="font-bold">Home /</span> Buy Off Plan
          </p>
          <h1 className="text-[32px] font-bold">Off Plan Dubai Projects</h1>
        </div>
      </div>
      {offplanData.length > 0 ? (
        offplanData.map((property, index) => (
          <OffPlanCard key={index} property={property} />
        ))
      ) : (
        <p className="text-gray-500">No properties match your filters.</p>
      )}
      {/* Pagination */}
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => {
          const pageNum = i + 1;
          const isActive = currentPage === pageNum;
          return (
            <button
              key={i}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 rounded ${
                isActive ? "back text-white" : "bg-gray-200"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OffPlanBuy;
