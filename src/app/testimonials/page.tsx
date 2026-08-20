import TestimonialsHero from "@/components/testimonials/testimonialsHero";
import Testimonial from "@/components/testimonials/testimonials";
import Seller from "@/components/common/seller/seller";
import { Metadata } from "next";
// app/testimonials/page.tsx
export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Astera Real Estate Dubai",
  description:
    "Read genuine client testimonials and success stories from buyers and investors who chose Astera Real Estate for their Dubai property journey.",
  alternates: {
    canonical: "https://www.asterarealestate.com/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | Astera Real Estate Dubai",
    description:
      "Read genuine client testimonials and success stories from buyers and investors who chose Astera Real Estate for their Dubai property journey.",
    url: `https://www.asterarealestate.com/testimonials`,

    images: ["/og-image.jpg"],
  },
};
const Testimonials = () => {
  return (
    <div className="ptb">
      <TestimonialsHero />
      <Testimonial />
      <Seller />
    </div>
  );
};

export default Testimonials;
