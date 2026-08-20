"use client"
import CareerForm from "@/forms/careerForm"
import { useAuth } from "@/hooks/authContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const AddCareer = () =>{
    const Router= useRouter()
    const isAuthenticated = useAuth(); // ✅ invoke the hoo

   useEffect(() => {
    if (isAuthenticated === false) {
        Router.push("/");
    }
    }, [isAuthenticated,Router]);

    if (isAuthenticated === null) return null; 


    return(
        <>
            <CareerForm/>
        </>
    )
}

export default AddCareer