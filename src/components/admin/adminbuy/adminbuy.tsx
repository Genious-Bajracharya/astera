"use client"
import AdminBuyCard from "../cards/buycard"
import { useContext } from "react"
import { BuyContext } from "@/context/buycontext"
import Loading from "@/app/loading"
import Link from "next/link"

const AdminBuyCom = () =>{
    const context = useContext(BuyContext)
    if(!context) return <div><Loading/></div>
    const { buyData } = context;
    
    return(
        <div className="plr space-y-8">
            <div>
                <Link className="px-8 py-2.5 back rounded-lg" href={"/admin/addbuy"}>Add new</Link>
            </div>
            {
                buyData.map((item,index) =>(
                    <AdminBuyCard key={index} property={item}/>
                ))
            }
        </div>
    )
}

export default AdminBuyCom