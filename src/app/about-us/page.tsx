import AboutHero from "@/components/about/abouthero";
import AboutContent from "@/components/about/aboutContetc";
import Mission from "@/components/about/missions";
import Team from "@/components/about/teams";
import LandingContact from "@/components/landing/contact";
import Seller from "@/components/common/seller/seller";
import { Metadata } from "next";
// app/about-us/page.tsx (or metadata.tsx)
export const metadata: Metadata = {
  title: "About Astera Real Estate | Luxury Property Experts in Dubai",
  description:
    "Learn about Astera Real Estate, a trusted Dubai property agency specializing in luxury homes, off-plan projects and strategic investment advisory.",
  alternates: {
    canonical: "https://www.asterarealestate.com/about-us",
  },
  openGraph: {
    title: "About Astera Real Estate | Luxury Property Experts in Dubai",
    description:
      "Learn about Astera Real Estate, a trusted Dubai property agency specializing in luxury homes, off-plan projects and strategic investment advisory.",
    url: "https://www.asterarealestate.com/about-us",
    // images: ["/og-image.jpg"],
  },
};
const AboutUs = () => {
  return (
    <div className="space-y-[84px]">
      <AboutHero />
      <AboutContent />
      <Mission />
      {/* <Team /> */}
      <LandingContact />
      <Seller />
    </div>
  );
};

export default AboutUs;
