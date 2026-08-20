"use client"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
// import { careersData } from "@/data/careers";
import { CareerInterface } from "@/interfaces/interface";
import Link from "next/link";
import { GetCareers } from "@/api";
import { useEffect,useState } from "react";

const Vacancies =() =>{
    const [career,setCareer] =useState<CareerInterface[]>([]);

    useEffect(()=>{
        const fetchData = async () =>{
                try{
                    const data = await GetCareers()
                    setCareer(data)
                }catch(error){
                    console.log(error)
                }
        }
        fetchData()
    },[])

    if(career.length<1){
        return(
            <div className="heading2">No Vacancy Open</div>
        )
    }
    return(
        <div className="plr maxi space-y-9">
            <p className="heading3">Current Vacancies</p>
            <div className="space-y-6">
                    {
                        career.map((item,index) =>(
                            <div key={index} className="flex flex-col lg:flex-row justify-between p-8 shadow-lg rounded-xl">     
                                <p className="grey text-lg font-bold">{item.position}</p>
                                <p className="inline-flex items-center gap-3 grey"> <CiLocationOn className="grey"/> Dubai, UAE</p>
                                <Link href={`/career/${item._id}`} className="flex items-center gap-3 grey">
                                    <p className="underline underline-offset-8"> View Detail</p>
                                    <MdOutlineArrowOutward className="primary w-6 h-6"/>
                                </Link>  
                            </div>
                        ))
                    }

            </div>
        </div>
    )
}

export default Vacancies