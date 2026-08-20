'use client'
import { useParams } from 'next/navigation'
import { CiLocationOn } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import ApplyForm from '@/forms/applyForm'
import { GetCareer } from '@/api'
import { CareerInterface } from '@/interfaces/interface'

const CareerDetails = () => {
    const params = useParams();
    const id = params?.id as string;

    const [showForm, setShowForm] = useState(false)
    // const career = careersData.find((job) => job.id === id)
    const [career,setCareer] = useState<CareerInterface | null>(null)

    useEffect(()=>{
        const fetchData = async () =>{
        try{
            const {data} = await GetCareer(id)
            setCareer(data)
            }
        catch(error){
            console.log(error)
        }
        }
        fetchData()

    },[id])

    if (!career) {
        return <p className="text-center text-red-500 mt-10">Career not found.</p>
    }

    return (
        <div className="flex flex-col lg:flex-row plr maxi">
        <div className="pt-11 space-y-11 lg:w-1/2">
            <div className="space-y-3">
            <p>
                <span className="font-bold">Home</span> / Career / {career?.position}
            </p>
            <p className="heading3">{career?.position}</p>
            <p className="inline-flex items-center gap-3 grey">
                <CiLocationOn className="grey" />
                {career?.location}
            </p>
            </div>

            <div className="space-y-8 grey">
            <p className="heading2">Join Our Growing Team!</p>

            <p>
                Do you have experience in luxury goods and a passion for real estate?
                <br /><br />
                Do you thrive in dynamic environments and aspire to be a part of a team that values professionalism and excellence? If so, we have an exciting opportunity for you!
                <br /><br />
                Our prestigious real estate firm is seeking talented individuals to join our team and contribute to our continued success.
            </p>

            <p>
                <span className="font-bold">Position:</span> {career?.position} <br />
                <span className="font-bold">Location:</span> {career?.location} <br />
                <span className="font-bold">Job Type:</span> {career?.jobType}
            </p>

            <div className="space-y-3">
                <p className="text-lg font-bold">Preferred Requirements:</p>
                <ul className="list-disc pl-5">
                {career?.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                ))}
                </ul>
            </div>

            <div className="space-y-3">
                <p className="text-lg font-bold">Responsibilities:</p>
                <ul className="list-disc pl-5">
                {career?.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                ))}
                </ul>
            </div>

            <div className="space-y-3">
                <p className="text-lg font-bold">Benefits:</p>
                <ul className="list-disc pl-5">
                {career?.benefits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                ))}
                </ul>
            </div>

            {/* About Astera  */}
                <div className="space-y-3">
                    <p className="text-lg font-bold">About Astera</p>
                    <p>
                        {` Since its inception in 2008, Astera Real Estate has been a frontrunner in the regional real estate market, holding a commendable reputation as one of the most reliable and top-tier agencies working alongside the world's foremost developers. Now employing over 200+ dedicated professionals, we stand as a testament to excellence and trust in the industry.`}                            
                        <br /><br />
                        {`As we forge ahead, we are inviting ambitious individuals to join our dynamic team where innovation meets understanding, offering 360° real estate solutions tailored to our client's needs. Step into a role at Astera Real Estate, a place where we value lasting relationships with our clients and foster an environment geared towards revolutionary and digitally enhanced solutions. Join us, and be a part of crafting the future of real estate, building enduring relationships grounded in trust and expertise.`}
                    </p>
                </div>
            </div>
        </div>

        <div className="lg:sticky lg:self-start lg:top-16 lg:ml-auto shadow-xl p-5 rounded-3xl">
            <button 
            onClick={() => setShowForm(true)}
            className="back rounded-full py-2.5 px-8 w-full lg:w-[480px] cursor-pointer text-white">
            Apply Now!
            </button>
        </div>
        {showForm && <ApplyForm job={career?.position} onClose={() => setShowForm(false)} />}

        </div>
    )
    }

export default CareerDetails