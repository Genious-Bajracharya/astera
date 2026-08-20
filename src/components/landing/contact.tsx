"use client";
import Image from "next/image";
import { LuPhone } from "react-icons/lu";
import { useWeb3FormSubmit } from "@/hooks/useWeb3Forms";

const LandingContact = () => {
  const { formRef, handleSubmit } = useWeb3FormSubmit({
    subject: `New inquiry for consultant from Astera`,
  });

  return (
    <div className="relative h-fit w-full   grid items-center p-2 lg:p-0  bg-cover bg-center bg-[url(/images/landing/contact.jpg)]">
      <div className="relative z-10 bg-black/70 rounded-3xl   flex flex-col md:flex-row  justify-between p-4 lg:p-11 w-[90%]  lg:max-w-6xl mx-auto text-white">
        {/* Left Section */}
        <div className="mb-10 md:mb-0 md:w-1/2 space-y-4 lg:space-y-11 ">
          <div className="w-[130px] h-[80px]">
            <Image
              src={"/images/common/logowhite.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[24px] font-bold">
            Have a property enquiry? <br /> {`Let's discuss on Call or`} <br />
            WhatsApp!
          </h2>
          <div className="mb-2 font-bold text-lg inline-flex items-center gap-3">
            <div className="border-[#E2E2E2] flex items-center justify-center border-[1px] w-11 h-11 rounded-full">
              <LuPhone />
            </div>
            +971 45526373
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white bg-opacity-90 space-y-8 text-black p-6 rounded-lg shadow-lg md:w-1/2 w-full">
          <div className="text-center sapce-y-2">
            <h3 className="text-[18.72px] font-bold">Free Consultant!</h3>
            <p className="grey">Know more about project</p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="subject"
              value={`New Form For Consultant`}
            />

            <label className="text-xs">
              Your name <span className="primary"> *</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-[#C9C9C9] rounded"
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <div>
                <label className="text-xs" htmlFor="">
                  Phone number<span className="primary"> *</span>
                </label>
                <input
                  type="tel"
                  name="Phone number"
                  placeholder="+971 "
                  className="w-full p-3 border border-[#C9C9C9] rounded"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Email Id<span className="primary"> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email "
                  className="w-full p-3 border border-[#C9C9C9] rounded"
                />
              </div>
            </div>
            <label className="flex flex-wrap lg:items-center   text-xs lg:text-sm">
              <input type="checkbox" className="mr-2 " />I agree to the{" "}
              <a
                href="https://www.asterarealestate.com/privacy-policy"
                className="underline ml-1   primary"
              >
                Privacy Policy{" "}
              </a>{" "}
              and{" "}
              <a
                href="https://www.asterarealestate.com/terms-and-condition"
                className="underline primary ml-1"
              >
                Terms & Conditions
              </a>
            </label>

            <div className="grid justify-center pt-4">
              <button
                type="submit"
                className="w-fit px-5 mx-auto hover:brightness-90 cursor-pointer  back text-white py-3 rounded-full transition"
              >
                Register your interest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
