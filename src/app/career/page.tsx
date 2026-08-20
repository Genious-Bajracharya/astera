import Careerhero from "@/components/career/careerhero";
import Difference from "@/components/career/difference";
import Seller from "@/components/common/seller/seller";
import CareerImage from "@/components/career/careerImage";
import Vacancies from "@/components/career/vacancies";
import { Metadata } from "next";
// app/career/page.tsx
export const metadata: Metadata = {
  title: "Careers at Astera Real Estate | Join Our Dubai Property Team",
  description:
    "Explore career opportunities at Astera Real Estate in Dubai. Join a dynamic team specializing in luxury homes, off-plan projects and investment properties.",
  alternates: {
    canonical: "https://www.asterarealestate.com/career",
  },
  openGraph: {
    title: "Careers at Astera Real Estate | Join Our Dubai Property Team",
    description:
      "Explore career opportunities at Astera Real Estate in Dubai. Join a dynamic team specializing in luxury homes, off-plan projects and investment properties.",
    url: "https://www.asterarealestate.com/career",

    // images: ["/og-image.jpg"],
  },
};
const Career = () => {
  return (
    <div className="ptb">
      <Careerhero />
      <Difference />
      <CareerImage />
      <Vacancies />
      <Seller />
    </div>
  );
};

export default Career;
