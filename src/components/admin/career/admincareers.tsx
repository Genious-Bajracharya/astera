"use client"
import { CiLocationOn } from "react-icons/ci";
// import { careersData } from "@/data/careers";
import { CareerInterface } from "@/interfaces/interface";
import Link from "next/link";
import { GetCareers,DeleteCareer } from "@/api";
import { useEffect,useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const AdminVacancies =() =>{
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

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this career?");
        if (!confirmed) return;

        try {
            await DeleteCareer(id);
            const updated = await GetCareers();
            setCareer(updated);
        } catch (error) {
            console.error("Delete error:", error);
        }
        };

    if(career.length<1){
        return(
            <div className="heading2">No Vacancy Open</div>
        )
    }
    return(
        <div className="plr space-y-9">
            <p><Link href={"/admin/addcareer"}>Add Career</Link></p>
            <p className="heading3">Current Vacancies</p>
            <div className="space-y-6">
                    {
                        career.map((item,index) =>(
                            <div key={index} className="flex flex-col lg:flex-row justify-between gap-2 p-8 shadow-lg rounded-xl">     
                                <p className="grey text-lg font-bold">{item.position}</p>
                                <p className="inline-flex items-center gap-3 grey"> <CiLocationOn className="grey"/> Dubai, UAE</p>
                                <div className="flex justify-between lg:justify-normal gap-3">
                                    <Link href={`/admin/admincareer/${item._id}`} className="flex items-center gap-3 grey">
                                        <p className=""> Edit</p>
                                        <CiEdit className="primary w-6 h-6"/>
                                    </Link>  
                                    <div onClick={()=> handleDelete(item._id)} className="flex items-center gap-3 cursor-pointer grey">
                                        <p className=""> Delete</p>
                                        <AiOutlineDelete className="primary w-6 h-6"/>
                                    </div>  

                                </div>
                            </div>
                        ))
                    }

            </div>
        </div>
    )
}

export default AdminVacancies