
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import LandingContact from "@/components/landing/contact";
import Seller from "@/components/common/seller/seller";
import BuyGrid from "@/components/buy/buygrid";
import BuyInfo from "@/components/buy/buyInfo";
import BuyOverview from "@/components/buy/buyOverview";
import Amenities from "@/components/buy/amenities";
import Mortgage from "@/components/buy/mortgage";
import Connect from "@/components/guide/connect";
import LocationMap from "@/components/buy/location";

import { GetBuyBySlug } from "@/api";
import { PropertyInterface } from "@/interfaces/interface";

const BuyDetail = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const [buyData, setBuyData] = useState<PropertyInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("Invalid property URL");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetBuyBySlug(slug);
        setBuyData(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(
          err?.response?.data?.message || "Failed to load property details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className="ptb min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#D4992D] mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">
            Loading property details...
          </p>
        </div>
      </div>
    );
  }

  // Error / not found state
  if (error || !buyData) {
    return (
      <div className="ptb min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Oops!</h2>
          <p className="text-lg text-gray-700 mb-8">
            {error ||
              "We couldn't find this property. It may have been removed or the link is invalid."}
          </p>
          <a
            href="/buy"
            className="inline-block bg-[#D4992D] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#c08a2a] transition shadow-md"
          >
            Browse All Properties
          </a>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <div className="ptb">
      <BuyGrid data={buyData} />
      <BuyInfo data={buyData} />
      <div className="flex flex-col lg:flex-row justify-between plr">
        <div className="lg:w-[60%] ptb">
          <BuyOverview data={buyData} />
          <Amenities data={buyData} />
          <Mortgage />
          <LocationMap location={buyData?.location} />
        </div>
        <Connect />
      </div>
      <LandingContact />
      <Seller />
    </div>
  );
};

export default BuyDetail;
