import Partners from "@/components/landing/partners";
import Latest from "@/components/landing/latest";
import Seller from "@/components/common/seller/seller";
import Question from "@/components/landing/question";
import LandingAbout from "@/components/landing/about";
import LandingContact from "@/components/landing/contact";
import Insights from "@/components/landing/insights";
import LandingHero from "@/components/landing/hero";
import Explore from "@/components/landing/explore";
import Client from "@/components/landing/client";
import Residence from "@/components/landing/recidence";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Real Estate Agency | Astera Luxury Villas & Apartments",
  description:
    "Discover luxury villas, apartments & off-plan properties in Dubai. Buy, sell or invest with Astera Real Estate – your trusted Dubai property experts.",
  alternates: {
    canonical: "https://www.asterarealestate.com",
  },
  openGraph: {
    title: "Dubai Real Estate Agency | Astera Luxury Villas & Apartments",
    description:
      "Discover luxury villas, apartments & off-plan properties in Dubai. Buy, sell or invest with Astera Real Estate – your trusted Dubai property experts.",
    url: "https://www.asterarealestate.com",
    siteName: "Astera Real Estate",
    images: [
      {
        url: "https://www.asterarealestate.com/images/common/og-home.jpg", // add a real OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate Agency | Astera Luxury Villas & Apartments",
    description:
      "Discover luxury villas, apartments & off-plan properties in Dubai. Buy, sell or invest with Astera Real Estate – your trusted Dubai property experts.",
    // images: ["https://asterarealestate.com/images/common/og-home.jpg"],
  },
};
export default function Home() {
  return (
    <>
      <LandingHero />
      <Partners />
      <div className="space-y-[84px]">
        <Latest />
        <Explore />
        <Residence />
        <LandingAbout />
        <Client />
        <Insights />
        <Question />
        <LandingContact />
        <Seller />
      </div>
    </>
  );
}
