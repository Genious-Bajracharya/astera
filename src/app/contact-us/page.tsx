import ContactForm from "@/forms/contactForm";
import Image from "next/image";
import Seller from "@/components/common/seller/seller";
import ContactInfo from "@/components/contact/contactInfo";
import { Metadata } from "next";
// app/contact-us/page.tsx
export const metadata: Metadata = {
  title: "Contact Astera Real Estate | Dubai Property Experts",
  description:
    "Get in touch with Astera Real Estate for expert guidance on buying, selling or investing in Dubai property. Call us or send a message today.",
  alternates: {
    canonical: "https://www.asterarealestate.com/contact-us",
  },
  openGraph: {
    title: "Contact Astera Real Estate | Dubai Property Experts",
    description:
      "Get in touch with Astera Real Estate for expert guidance on buying, selling or investing in Dubai property. Call us or send a message today.",
    url: "https://www.asterarealestate.com/contact-us",

    // images: ["/og-image.jpg"],
  },
};
const ContactUs = () => {
  return (
    <div className=" ptb">
      <div className="flex px-5 lg:px-0 lg:pl-[84px] justify-between ">
        <ContactForm type="buy" />
        <div className="w-1/2 hidden lg:block">
          <Image
            src={"/images/contact/contact.jpg"}
            width={600}
            height={900}
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ContactInfo />
      <Seller />
    </div>
  );
};

export default ContactUs;
