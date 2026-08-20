import Seller from "@/components/common/seller/seller";
import LandingContact from "@/components/landing/contact";
import PropertiesSale from "@/components/buy/propertiesSale";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Buy Property in Dubai | Luxury Homes for Sale – Astera Real Estate",
  description:
    "Explore luxury villas, apartments and prime properties for sale in Dubai. Find your ideal home with Astera Real Estate today.",
  alternates: {
    canonical: "https://www.asterarealestate.com/buy",
  },
  openGraph: {
    title: "Buy Property in Dubai | Luxury Homes for Sale",
    description:
      "Explore luxury villas, apartments and prime properties for sale in Dubai. Find your ideal home with Astera Real Estate today.",
    url: "https://www.asterarealestate.com/buy",

    // url: "https://asterarealestate.com/buy",
    // images: ["/images/common/og-buy.jpg"],
  },
};
const Buy = () => {
  return (
    <div className="space-y-16">
      <PropertiesSale />
      <LandingContact />
      <Seller />
    </div>
  );
};

export default Buy;
