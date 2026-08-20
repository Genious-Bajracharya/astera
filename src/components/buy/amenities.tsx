import { FaCheck } from "react-icons/fa6";
import { PropertyInterface } from "@/interfaces/interface";

interface AmenitiesI{
    data: PropertyInterface | undefined
}

const Amenities =({data}:AmenitiesI) =>{
    return(
        <div className="space-y-6">
            <p className="heading2 ">Amenities</p>
            <div className="grid grid-cols-3 gap-y-6 justify-between">
                {
                    data?.amenities.map((item,index) =>(
                        <p key={index} className="inline-flex gap-3  items-center"> <FaCheck/> {item}</p>
                    ))
                }   
            </div>
        </div>
    )
}

export default Amenities