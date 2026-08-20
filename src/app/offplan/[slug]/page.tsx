"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Offplanhero from "@/components/offplan/offplanhero";
import LandingContact from "@/components/landing/contact";
import Question from "@/components/landing/question";
import Seller from "@/components/common/seller/seller";
import DescriptionLeft from "@/components/offplan/descriptionLeft";
import DescriptionRight from "@/components/offplan/descriptionRight";
import OffplanGrid from "@/components/offplan/offplanGrid";
import OffplanOverview from "@/components/offplan/offplanOverview";
import LocationMap from "@/components/offplan/location";
import Connect from "@/components/guide/connect";

import { GetOffplanBySlug } from "@/api"; // ← changed to slug version
import { OffPlanInterface } from "@/interfaces/interface";
import Loading from "@/app/loading";

const OffplanDetail = () => {
  const [offplanData, setOffplanData] = useState<OffPlanInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = params?.slug as string | undefined;

  useEffect(() => {
    if (!slug) {
      setError("Invalid property URL");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetOffplanBySlug(slug); // ← now using slug
        setOffplanData(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(
          err?.response?.data?.message || "Failed to load offplan details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]); // depend on slug only

  if (loading) {
    return <Loading />;
  }

  if (error || !offplanData) {
    return (
      <div className="ptb min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Oops!</h2>
          <p className="text-gray-700 mb-6">
            {error || "Offplan property not found"}
          </p>
          <a
            href="/offplan"
            className="inline-block bg-[#D4992D] text-white px-8 py-3 rounded-full hover:bg-[#c08a2a] transition"
          >
            View All Offplan Properties
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="ptb">
      <Offplanhero data={offplanData} />
      <div className="flex flex-col lg:flex-row justify-between plr">
        <DescriptionLeft data={offplanData} />
        <DescriptionRight data={offplanData} />
      </div>
      <OffplanGrid data={offplanData} />
      <div className="plr flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[60%] space-y-8">
          <OffplanOverview data={offplanData} />
          <LocationMap location={offplanData?.location} />
        </div>
        <Connect />
      </div>
      <Question />
      <LandingContact />
      <Seller />
    </div>
  );
};

export default OffplanDetail;

// "use client"
// import Offplanhero from "@/components/offplan/offplanhero"
// import LandingContact from "@/components/landing/contact"
// import Question from "@/components/landing/question"
// import Seller from "@/components/common/seller/seller"
// import DescriptionLeft from "@/components/offplan/descriptionLeft"
// import DescriptionRight from "@/components/offplan/descriptionRight"
// import OffplanGrid from "@/components/offplan/offplanGrid"
// import OffplanOverview from "@/components/offplan/offplanOverview"
// import LocationMap from "@/components/offplan/location"
// import Connect from "@/components/guide/connect"
// import { useParams } from "next/navigation"
// import { GetOffplan } from "@/api"
// import { useEffect, useState } from "react"
// import { OffPlanInterface } from "@/interfaces/interface"
// import Loading from "@/app/loading"

// const OffplanDetail =() =>{
//     const[offplanData,setOffplanData] =useState<OffPlanInterface | null>(null)
//     const [loading,setLoading] =useState(false)
//     const params = useParams()
//     const id = params?.id as string

//     useEffect(() =>{
//         setLoading(true)
//         const fetchData = async () =>{
//             try{
//                 const {data} = await GetOffplan(id)
//                 setOffplanData(data)
//                 setLoading(false)
//             }catch(error){
//                 console.log(error)
//             }
//         }
//         fetchData()
//     },[id])

//     if(loading){
//         return <Loading/>
//     }

//     if(!offplanData){
//         return <div>No data</div>
//     }
//     // const property = ffPlanData.find((item) => item._id == id)

//     return(
//         <div className="ptb">
//             <Offplanhero data={offplanData}/>
//             <div className="flex flex-col lg:flex-row justify-between plr">
//                 <DescriptionLeft data={offplanData}/>
//                 <DescriptionRight data={offplanData}/>
//             </div>
//             <OffplanGrid data={offplanData}/>
//             <div className="plr flex flex-col lg:flex-row justify-between ">
//                 <div className="lg:w-[60%] space-y-8">
//                     <OffplanOverview data={offplanData}/>
//                     <LocationMap location={offplanData?.location}/>
//                 </div>
//                 <Connect/>
//             </div>
//             <Question/>
//             <LandingContact/>
//             <Seller/>
//         </div>
//     )
// }

// export default OffplanDetail
