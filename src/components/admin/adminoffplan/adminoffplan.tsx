"use client";

import AdminOffplanCard from "../cards/offplancard";
import { useContext } from "react";
import { OffplanContext } from "@/context/offplanContext";
import Loading from "@/app/loading";
import Link from "next/link";

const AdminOffplanCom = () => {
  const context = useContext(OffplanContext);
  if (!context) return <Loading />;

  const { offplanData, total, currentPage, setCurrentPage, isLoading } = context;

  if (isLoading && offplanData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="plr space-y-8">
      <Link
        className="px-8 py-2.5 back rounded-lg inline-block"
        href="/admin/addoffplan"
      >
        Add new
      </Link>

      {isLoading && offplanData.length > 0 && (
        <div className="text-center py-4">Refreshing data...</div>
      )}

      <div className="space-y-6">
        {offplanData.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No properties found.</p>
            <Link
              href="/admin/addoffplan"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Create your first property
            </Link>
          </div>
        ) : (
          offplanData.map((item) => {
            const status = item.status;

            return (
              <div key={item._id} className="relative">
                <AdminOffplanCard property={item} />

                {/* <span
                  className={`absolute top-2 left-2 px-2 py-1 text-xs rounded ${
                    status === "draft"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {status}
                </span> */}
                {status === "draft" && (
  <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded bg-yellow-200 text-yellow-800">
    Draft
  </span>
)}

              </div>
            );
          })
        )}
      </div>

      {total > 10 && (
        <div className="flex gap-2 justify-center">
          {Array.from({ length: Math.ceil(total / 10) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={isLoading}
                className={`px-3 py-1 rounded ${
                  page === currentPage 
                    ? "back text-white" 
                    : "bg-gray-200 hover:bg-gray-300"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminOffplanCom;