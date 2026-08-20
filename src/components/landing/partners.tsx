// import Image from "next/image";

// const PartnerImages =[
//     "/images/landing/partners/partner1.png",
//     "/images/landing/partners/partner2.png",
//     "/images/landing/partners/partner3.png",
//     "/images/landing/partners/partner4.png",
//     "/images/landing/partners/partner5.png",
// ]
// const Partners = () =>{
//     return(
//         <div className="plr bg-[#F7F7F7] flex justify-between py-3 items-center">
//             <div className="text-[#555555] text-base font-medium">
//                 {`Partners with Dubai’s`} <br /> {`leading developers`}
//             </div>
//             <div className="flex gap-14 overflow-clip">
//                 {
//                     PartnerImages.map((item,index) =>(
//                     <div key={index} className="w-[140px] h-[80px]">
//                         <Image

//                             src={item}
//                             width={200}
//                             height={200}
//                             alt="partner"
//                             className="w-full h-full object-cover"/>
//                     </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Partners;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PartnerImages = [
  "/images/landing/partners/partner1.png",
  "/images/landing/partners/omniyat.webp",
  "/images/landing/partners/partner2.png",
  "/images/landing/partners/partner4.png",
  "/images/landing/partners/partner5.png",
  "/images/landing/partners/sobha.webp",
  "/images/landing/partners/partner3.png",
  "/images/landing/partners/select.jpg",
  "/images/landing/partners/binghatti.jpg",
  "/images/landing/partners/danube.jpg",
  "/images/landing/partners/imitaz.jpg",
  "/images/landing/partners/aldar.jpg",
  "/images/landing/partners/arada.webp",
  "/images/landing/partners/ellington.png",
  "/images/landing/partners/mag.jpg",
  "/images/landing/partners/majid1.jpg",
];

const Partners = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  // const imagesPerGroup = 4;
  const [imagesPerGroup, setImagesPerGroup] = useState(4);

  // Update images per group on mount and resize
  useEffect(() => {
    const updateGroupSize = () => {
      setImagesPerGroup(window.innerWidth < 768 ? 2 : 4);
      // Reset index to avoid out-of-bounds
      setCurrentGroupIndex(0);
    };

    updateGroupSize(); // initial check
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);
  const totalGroups = Math.ceil(PartnerImages.length / imagesPerGroup);

  const imageGroups = Array.from({ length: totalGroups }, (_, groupIndex) => {
    const startIndex = groupIndex * imagesPerGroup;
    return PartnerImages.slice(startIndex, startIndex + imagesPerGroup);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
        setIsVisible(true);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  return (
    <div className="plr bg-white flex flex-col md:flex-row justify-between py-6 md:py-3 items-center gap-6 md:gap-0 shadow-md">
      <div className="text-[#555555] w-full md:w-auto text-center md:text-left text-lg md:text-base font-medium">
        {`Partners with Dubai's`} <br /> {`leading developers`}
      </div>

      <div className="relative w-full md:w-auto ">
        <div className="flex justify-center items-center min-h-[80px]">
          <div
            className={`flex gap-6 md:gap-8 transition-transform duration-700 ease-in-out ${
              isVisible ? "translate-y-0" : "translate-y-2"
            }`}
          >
            {imageGroups[currentGroupIndex].map((item, index) => {
              // Make sobha.webp ~20–30% smaller
              const isSobha = item.includes("sobha.webp");
              const imgStyle = isSobha
                ? { maxWidth: "80%", maxHeight: "80%" }
                : {};

              return (
                <div
                  key={`${currentGroupIndex}-${index}`}
                  className="w-[140px] h-[60px] flex items-center justify-center isolate"
                >
                  <Image
                    src={item}
                    width={140}
                    height={80}
                    alt="Partner logo"
                    className="object-contain w-full h-full mix-blend-multiply"
                    style={imgStyle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
