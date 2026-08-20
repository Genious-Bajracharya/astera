"use client";
import { useParams } from "next/navigation";
import InsightsDetailHero from "@/components/insights/insightsDetailHero";
import Interest from "@/components/insights/interest";
import Seller from "@/components/common/seller/seller";
import InsightsContent from "@/components/insights/insightscontext";

const InsightsDetail = () => {
  const params = useParams();
  const id = params?.id;

  if (typeof id !== "string") {
    return <div>Invalid blog ID</div>;
  }

  return (
    <div className="ptb">
      <InsightsDetailHero blogId={id} />
      <InsightsContent blogId={id} />
      <Interest />
      <Seller />
    </div>
  );
};

export default InsightsDetail;
