import { OffPlanInterface } from "@/interfaces/interface";

interface Offplan{
    data: OffPlanInterface | undefined
}

const OffplanOverview = ({data}:Offplan) =>{
    
    return(
        <div className="space-y-9 top-8 ">
            <p className="heading3">Overview</p>
            <p className="heading2">{data?.name} at {data?.location}</p>

            {/* Key Highlights */}
            <div className="space-y-6">
                <p className="heading2">Key Highlights:</p>
                <div className="spcae-y-4">
                    {
                        data?.keyHighlight.map((item,index) =>(
                            <li key={index} className="grey list-disc">{item}</li>
                        ))
                    }   
                </div>
            </div>

            {/* Apartment Types Table */}
                {data?.apartmentTypes && data.apartmentTypes.length > 0 && (
                <div className="space-y-6">
                    <p className="heading2">Available Apartment Types</p>
                    <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-md">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Property Type</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Size</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Price (AED)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.apartmentTypes.map((apt, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b text-sm text-gray-600">{apt.propertyType}</td>
                            <td className="px-4 py-2 border-b text-sm text-gray-600">{apt.size}</td>
                            <td className="px-4 py-2 border-b text-sm text-gray-600">AED {apt.price.toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                )}


            {/* Binghatti - Developer Overview */}
            {
               data?.overview && data.overview.length > 0 &&(

                <div className="space-y-6">
                    <p className="heading2">{data?.name} - Developer Overview</p>
                    <div className="spcae-y-4">   
                        {
                            data?.overview.map((item,index) =>(
                                <li key={index} className="grey list-none">{item}</li>
                            ))
                        }   
                    </div>
                </div>
               ) 
            }

            {/* Why invest in Binghatti Hillviews?*/}
            {
                data?.invest && data.invest.length > 0 &&(
                    <div className="space-y-6">
                        <p className="heading2">Why invest in {data?.name}?</p>
                        <div className="spcae-y-4">   
                            {
                                data?.invest.map((item,index) =>(
                                    <li key={index} className="grey list-disc">{item}</li>
                                ))
                            }
                        </div>
                    </div>
                )
            }

            {/* Dubai Science Park Community*/}
            {
                data?.community && data.community.length > 0 &&(
                    <div className="space-y-6">
                        <p className="heading2">Dubai Science Park Community</p>
                        <div className="spcae-y-4">   
                            {
                                data?.community.map((item,index) =>(
                                    <li key={index} className="grey list-none">{item}</li>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OffplanOverview