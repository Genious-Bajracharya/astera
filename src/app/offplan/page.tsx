import Seller from "@/components/common/seller/seller";
import LandingContact from "@/components/landing/contact";
import PropertiesSale from "@/components/offplan/offplanBuy";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Off-Plan Properties Dubai | New Project Launches 2026 – Astera",
  description:
    "Secure high ROI with Dubai’s latest off-plan projects. Explore new launches from top developers with exclusive payment plans at Astera Real Estate.",
  alternates: {
    canonical: "https://www.asterarealestate.com/offplan",
  },
  openGraph: {
    title: "Off-Plan Properties Dubai | New Project Launches 2026",
    description:
      "Secure high ROI with Dubai’s latest off-plan projects. Explore new launches from top developers with exclusive payment plans at Astera Real Estate.",
    url: `https://www.asterarealestate.com/offplan`,

    // url: "https://asterarealestate.com/offplan",
    // images: ["/images/common/og-offplan.jpg"],
  },
};
const Buy = () => {
  return (
    <div className="space-y-[64px]">
      <PropertiesSale />
      <LandingContact />
      <Seller />
    </div>
  );
};

export default Buy;
