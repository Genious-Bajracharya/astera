import GuideHero from "@/components/guide/guidehero";
import Seller from "@/components/common/seller/seller";
import ThreeGuides from "@/components/guide/threeGuides";
import { Metadata } from "next";
// app/guides/page.tsx
export const metadata: Metadata = {
  title: "Dubai Real Estate Guides | Buyer & Seller Tips",
  description:
    "Explore expert Dubai property guides covering buying, selling and area insights for smart real estate decisions.",
  alternates: {
    canonical: "https://www.asterarealestate.com/guides",
  },
  openGraph: {
    title: "Dubai Real Estate Guides | Buyer & Seller Tips",
    description:
      "Explore expert Dubai property guides covering buying, selling and area insights for smart real estate decisions.",
    url: "https://www.asterarealestate.com/guides",

    // images: ["/og-image.jpg"],
  },
};
const Guides = () => {
  return (
    <div className="ptb">
      <GuideHero />
      <ThreeGuides />
      <Seller />
    </div>
  );
};

export default Guides;
