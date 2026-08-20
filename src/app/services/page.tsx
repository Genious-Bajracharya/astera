import ServiceHero from "@/components/services/serviceHero";
import LandingContact from "@/components/landing/contact";
import Seller from "@/components/common/seller/seller";
import Choose from "@/components/services/choose";
import Provide from "@/components/services/provide";
import Partners from "@/components/services/partners";
import { Metadata } from "next";
// app/services/page.tsx
export const metadata: Metadata = {
  title: "Real Estate Services in Dubai | Astera Buying, Selling & Investment",
  description:
    "Discover Astera’s full range of real estate services in Dubai — buying, selling, off-plan investment advisory, property valuation and management support.",
  alternates: {
    canonical: "https://www.asterarealestate.com/services",
  },
  openGraph: {
    title:
      "Real Estate Services in Dubai | Astera Buying, Selling & Investment",
    description:
      "Discover Astera’s full range of real estate services in Dubai — buying, selling, off-plan investment advisory, property valuation and management support.",
    url: `https://www.asterarealestate.com/services`,

    // images: ["/og-image.jpg"],
  },
};
const Services = () => {
  return (
    <div className="space-y-[84px]">
      <ServiceHero />
      <Choose />
      <Provide />
      <Partners />
      <LandingContact />
      <Seller />
    </div>
  );
};

export default Services;
