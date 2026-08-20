import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { OffPlanInterface } from "@/interfaces/interface";
import Link from "next/link";

interface Offplan{
    data: OffPlanInterface | undefined
}

const Offplanhero = ({data}:Offplan) =>{
    // const image = data?.images[0].url ?? "/images/offplan/offplanhero.jpg"
    const image = data?.images?.[0]?.url ?? "/images/offplan/offplanhero.jpg"
    return(
        <div className="bg-top h-[430px] lg:h-[750px] bg-cover  relative "
                style={{ backgroundImage: `url(${image})` }}>
            {/* better overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            
            {/* Right hover div */}
            <div className="hidden lg:block p-3 absolute top-[135px] right-[65px] rounded-xl border-[1px] bg-[#FFFFFF24]/20  border-[#FBFBFB4D] backdrop-blur-[6px] space-y-3">
                <div className="md:[250px] h-[135px] ">
                    <Image
                        src={"/images/landing/heroa.jpg"}
                        alt="hero aprtment"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="flex gap-2.5">
                    <div className="space-y-1.5">
                        <p className="heading text-[#FCFCFC]">Vistula Residences</p>
                        <p className="text-[#E2E2E2]">Apartment</p>
                    </div>
                    <div className="bg-white rounded-full w-11 h-11 grid items-center justify-center">
                        <RxArrowTopRight className="w-6 h-6"/>
                    </div>
                </div>
            </div>

            {/*left sidee  */}
            <div className="flex absolute lg:left-[65px] left-2 bottom-6 lg:bottom-[120px] text-white">
                <div className="space-y-16">
                    <div className="space-y-2">
                        <p className="heading5 lg:w-[80%]">{data?.name}</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <Link href={"/contact-us"}>
                                <button className="bg-white/10 border-[#FCFCFC] border-[0.5px] md:w-fit backdrop-blur-2xl py-2.5 px-4 rounded-full">Register Your Interest</button>
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offplanhero;

