import InsightsHero from "@/components/insights/insightsHero";
import Seller from "@/components/common/seller/seller";
import InsightsGrid from "@/components/insights/insigthsGrid";
import { Metadata } from "next";
// app/news&sights/page.tsx
export const metadata: Metadata = {
  title: "Dubai Real Estate News & Market Insights",
  description:
    "Stay updated with the latest Dubai real estate news, investment trends and market reports from Astera experts.",
  alternates: {
    canonical: "https://www.asterarealestate.com/news&insights",
  },
  openGraph: {
    title: "Dubai Real Estate News & Market Insights",
    description:
      "Stay updated with the latest Dubai real estate news, investment trends and market reports from Astera experts.",
    url: "https://www.asterarealestate.com/news&insights",

    // images: ["/og-image.jpg"],
  },
};
const NewsInsihgts = () => {
  return (
    <div className="ptb">
      <InsightsHero />
      <InsightsGrid />
      <Seller />
    </div>
  );
};

export default NewsInsihgts;
