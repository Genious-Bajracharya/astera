"use client"
import ContactForm from "@/forms/contactForm"
import Image from "next/image"
import Seller from "@/components/common/seller/seller"
import ContactInfo from "@/components/contact/contactInfo"
import { useParams } from "next/navigation"

const ContactUs = () =>{
    const {slug}=useParams()
    const validType = slug === "buy" || slug === "seller" ? slug : "buy";
    return(
        <div className=" ptb">
            <div className="flex px-5 lg:px-0 lg:pl-[84px] justify-between ">
                <ContactForm type={validType} />
                <div className="w-1/2 hidden lg:block">
                    <Image
                    src={"/images/contact/contact.jpg"}
                    width={600}
                    height={900}
                    alt="contact"
                    className="w-full h-full object-cover"/>
                </div>
            </div>
            <ContactInfo/>
            <Seller/>
        </div>
    )
}

export default ContactUs