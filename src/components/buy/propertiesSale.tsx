// "use client"
// import BuyCard from "../common/cards/buyCard";
// // import propertiesData from '@/data/property'
// import PropertyFilter from '@/components/buy/buyFilter'
// import { PropertyInterface } from "@/interfaces/interface";
// import { useEffect, useState } from "react";
// import { GetBuys } from "@/api";
// const PropertiesSale = () =>{
//     const[buyData,setBuyData] =useState<PropertyInterface[]>([])

//     useEffect(()=>{
//         const fetchData = async () =>{
//             try{
//                 const data =await GetBuys()
//                 setBuyData(data.data)
//             }catch(error){
//                 console.log(error)
//             }
//         }
//         fetchData()
//     },[])

//     // console.log(buyData)

//     const [propertyType, setPropertyType] = useState('')
//     const [beds, setBeds] = useState('')
//     const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
//     const [selectedFurnishing, setSelectedFurnishing] = useState('ALL')
//     const [minSize, setMinSize] = useState(0)
//     const [maxSize, setMaxSize] = useState(10000)
//     const [location, setLocation] = useState('')
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     const resetFilters = () => {
//         setLocation('')
//         setPropertyType('')
//         setBeds('')
//         setSelectedAmenities([])
//         setSelectedFurnishing('ALL')
//         setMinSize(0)
//         setMaxSize(10000)
//     }

//     const filteredProperties = buyData?.filter((property) => {
//         const matchesLocation = location === '' || property.location.toLowerCase().includes(location.toLowerCase())
//         const matchesType = propertyType === '' || property.propertyType === propertyType
//         const matchesBeds = beds === '' || String(property.bedrooms) === beds || beds === 'Studio'
//         const matchesFurnishing = selectedFurnishing === 'ALL' || property.furnishing === selectedFurnishing
//         const matchesSize = property.squareFeet >= minSize && property.squareFeet <= maxSize
//         const matchesAmenities = selectedAmenities.every((a) => property.amenities.includes(a))

//         return (
//         matchesLocation &&
//         matchesType &&
//         matchesBeds &&
//         matchesFurnishing &&
//         matchesSize &&
//         matchesAmenities
//         )
//     })

//     return(
//         <div className="plr space-y-9">
//             <PropertyFilter
//                 location={location}
//                 setLocation={setLocation}
//                 propertyType={propertyType}
//                 setPropertyType={setPropertyType}
//                 beds={beds}
//                 setBeds={setBeds}
//                 openModal={() => setIsModalOpen(true)}
//                 onReset={resetFilters}
//                 onSearch={() => {}}
//                 selectedAmenities={selectedAmenities}
//                 setSelectedAmenities={setSelectedAmenities}
//                 selectedFurnishing={selectedFurnishing}
//                 setSelectedFurnishing={setSelectedFurnishing}
//                 minSize={minSize}
//                 setMinSize={setMinSize}
//                 maxSize={maxSize}
//                 setMaxSize={setMaxSize}
//             />

//             {/* properties for sale */}
//             <div className="space-y-9">
//                 <div className="sapce-y-3">
//                     <p className="grey"><span className="font-bold">Home /</span> Buy Property</p>
//                     <p className="heading3">Properties for Sale in Dubai</p>
//                 </div>
//             </div>
//             {filteredProperties.length > 0 ? (
//                 filteredProperties.map((property, index) => (
//                     <BuyCard key={index} property={property} />
//                 ))
//                 ) : (
//                 <p className="text-gray-500">No properties match your filters.</p>
//                 )}
//         </div>
//     )
// }

// export default PropertiesSale;

// "use client";

// import { useEffect, useState, useCallback } from "react";
// import BuyCard from "../common/cards/buyCard";
// import PropertyFilter from "@/components/buy/buyFilter";
// import { PropertyInterface } from "@/interfaces/interface";
// import { useSearchParams } from 'next/navigation';
// import { GetBuys } from "@/api";

// const PropertiesSale = () => {
//   const [buyData, setBuyData] = useState<PropertyInterface[]>([]);
//   const [total, setTotal] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [location, setLocation] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [beds, setBeds] = useState('');
//   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
//   const [selectedFurnishing, setSelectedFurnishing] = useState('ALL');
//   const [minSize, setMinSize] = useState(0);
//   const [maxSize, setMaxSize] = useState(10000);
//   const searchParams = useSearchParams();

//   const limit = 9;

//   useEffect(() => {
//     const fetchFilteredProperties = async () => {
//       const queryString = searchParams.toString();
//       const res = await GetBuys(`/api/buy?${queryString}`);
//       setBuyData(res.data);
//     };

//     fetchFilteredProperties();
//   }, [searchParams]);

//   // const fetchData = useCallback(async () => {
//   //   const queryParams = new URLSearchParams({
//   //     ...(location && { location }),
//   //     ...(propertyType && { propertyType }),
//   //     ...(beds && { bedrooms: beds }),
//   //     ...(selectedFurnishing !== "ALL" && { furnishing: selectedFurnishing }),
//   //     minSize: minSize.toString(),
//   //     maxSize: maxSize.toString(),
//   //     page: currentPage.toString(),
//   //     limit: limit.toString(),
//   //   });

//   //   selectedAmenities.forEach((a) => queryParams.append("amenities", a));

//   //   const { data, total } = await GetBuys(queryParams.toString());
//   //   setBuyData(data);
//   //   setTotal(total);
//   // }, [location, propertyType, beds, selectedFurnishing, selectedAmenities, minSize, maxSize, currentPage]);

//   // useEffect(() => {
//   //   fetchData();
//   // }, [fetchData]);

//   // const resetFilters = () => {
//   //   setLocation('');
//   //   setPropertyType('');
//   //   setBeds('');
//   //   setSelectedAmenities([]);
//   //   setSelectedFurnishing('ALL');
//   //   setMinSize(0);
//   //   setMaxSize(10000);
//   //   setCurrentPage(1);
//   // };

//   return (
//     <div className="plr space-y-9">
//       <PropertyFilter
//         // location={location}
//         // setLocation={setLocation}
//         // propertyType={propertyType}
//         // setPropertyType={setPropertyType}
//         // beds={beds}
//         // setBeds={setBeds}
//         // openModal={() => {}} // for now it's just a placeholder
//         // onReset={resetFilters}
//         // onSearch={fetchData}
//         // selectedAmenities={selectedAmenities}
//         // setSelectedAmenities={setSelectedAmenities}
//         // selectedFurnishing={selectedFurnishing}
//         // setSelectedFurnishing={setSelectedFurnishing}
//         // minSize={minSize}
//         // setMinSize={setMinSize}
//         // maxSize={maxSize}
//         // setMaxSize={setMaxSize}
//       />

//       <div className="space-y-9">
//         <div>
//           <p className="grey"><span className="font-bold">Home /</span> Buy Property</p>
//           <p className="heading3">Properties for Sale in Dubai</p>
//         </div>
//         {buyData.length > 0 ? (
//           buyData.map((property, index) => (
//             <BuyCard key={index} property={property} />
//           ))
//         ) : (
//           <p className="text-gray-500">No properties match your filters.</p>
//         )}

//         {/* Pagination */}
//         <div className="flex gap-2 justify-center mt-4">
//           {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertiesSale;

"use client";

import { useEffect, useState } from "react";
import BuyCard from "../common/cards/buyCard";
import PropertyFilter from "@/components/buy/buyFilter";
import { PropertyInterface } from "@/interfaces/interface";
import { useSearchParams, useRouter } from "next/navigation";
import { GetBuys } from "@/api";

const PropertiesSale = () => {
  const [buyData, setBuyData] = useState<PropertyInterface[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      const queryString = searchParams.toString();

      const res = await GetBuys(`${queryString}`);
      setBuyData(res.data);

      setTotal(res.total);
      console.log(res.total);
    };

    fetchFilteredProperties();
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/buy?${params.toString()}`);
    setCurrentPage(page);
  };

  return (
    <div className="plr space-y-9">
      <PropertyFilter />

      <div className="space-y-9">
        <div>
          <p className="grey">
            <span className="font-bold">Home /</span> Buy Property
          </p>
          <h1 className="text-[32px] font-bold">
            Properties for Sale in Dubai
          </h1>
        </div>

        {buyData.length > 0 ? (
          buyData.map((property, index) => (
            <BuyCard key={index} property={property} />
          ))
        ) : (
          <p className="text-gray-500">No properties match your filters.</p>
        )}

        {/* Pagination */}
        <div className="flex gap-2 justify-center mt-4">
          {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "back text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesSale;
