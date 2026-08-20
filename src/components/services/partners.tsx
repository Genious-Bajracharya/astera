import Image from "next/image"

const PartnerImages = [
    '/images/landing/partners/partner1.png',
    '/images/landing/partners/omniyat.webp',
    '/images/landing/partners/partner2.png',
    '/images/landing/partners/partner4.png',
    '/images/landing/partners/partner5.png',
    '/images/landing/partners/sobha.webp',
    '/images/landing/partners/partner3.png',
    '/images/landing/partners/select.webp',
    '/images/landing/partners/binghatti.webp',
    '/images/landing/partners/danube.webp',
    '/images/landing/partners/imitaz.webp',
    '/images/landing/partners/aldar.webp',
    '/images/landing/partners/arada.webp',
    '/images/landing/partners/ellington.png',
    '/images/landing/partners/mag.webp',
    '/images/landing/partners/majid1.webp',
]
const Partners = () =>{
    return(
        <div className="space-y-9 plr maxi">
            <p className="heading4 text-center">{`Partners With Dubai’s Leading Developers`}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1000px] mx-auto">
                {
                    PartnerImages.map((partner,index)=>(
                        <div key={index} className="bg-white p-2 shadow-xl rounded-xl lg:h-[123px] h-[90px] w-[180px] lg:w-[240px]">
                            <Image
                            src={partner}
                            alt="partner"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners


