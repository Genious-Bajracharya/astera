"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Question = () => {
  const faqList = [
    {
      id: 1,
      title: "Is Dubai a good place to invest in property?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 2,
      title: "Are there any taxes on buying or owning property in Dubai?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 3,
      title: "What is the current situation of the property market in Dubai?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 4,
      title: "Can Astera Real Estates help me with real estate investments?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 5,
      title:
        "What are the projected trends for Dubai's real estate market in 2025?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 6,
      title: "Who is the best real estate companies in dubai?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
    {
      id: 7,
      title: "How do I find a trusted real estate agent in Dubai?",
      description:
        "The tax-free environment, clear legal framework, transparent Dubai real estate market, booming economy, and the safety and security make Dubai a good place to invest in property. Interested buyers or homeowners can explore the latest Dubai properties and off-plan projects to invest in the real estate market and experience a high return on investment. On the other hand, if you are a newbie, you can connect with the best real estate companies in Dubai to help you easily navigate the Dubai real estate market journey.",
    },
  ];

  const [showAns, setShowAns] = useState(-1);

  return (
    <div className="maxi">
      <div className="text-center space-y-1.5 ">
        <h2 className="text-[24px] font-bold">Have a question?</h2>
        <p className="grey">
          Discover what our customers are saying about their experiences
        </p>
      </div>
      <div
        id="faq"
        className="  plr mx-auto max-sm:pb-12 overflow-x-clip flex flex-col md:flex-row gap-8 justify-center"
      >
        {/* <div className="space-y-[48px] max-h-[700px] hidden lg:block rounded-2xl py-8 md:py-[60px] md:w-[40%] md:px-[60px]"> */}
        <div className="mt-12 hidden xl:block md:px-[60px] md:w-[45%]">
          <Image
            // src={"/images/landing/house.png"}
            src={"/images/landing/aframe.png"}
            alt="quesion building"
            width={600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container  md:px-0 py-8 md:py-[20px] w-full xl:w-[60%]">
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col gap-3 mt-6 sm:mt-12    ">
                {faqList.map((faq, index) => (
                  <div
                    key={faq.title}
                    className="border rounded-lg border-[#C9C9C9] p-5   "
                    onClick={() => {
                      if (index == showAns) {
                        setShowAns(-1);
                      } else {
                        setShowAns(index);
                      }
                    }}
                  >
                    <div className="flex justify-between  cursor-pointer ">
                      <h3 className="text-base  sm:text-[18.72px]">
                        {faq.title}
                      </h3>
                      {index == showAns ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div
                      className={`${
                        showAns == index
                          ? " transition-all ease-in-out duration-500 overflow-auto  opacity-100 translate-x-1 "
                          : "h-0 overflow-hidden opacity-0"
                      } `}
                    >
                      <p className=" text-[#828282] max-sm:text-sm mt-1 sm:mt-3 ">
                        {faq.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
