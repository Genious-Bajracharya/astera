// import Image from "next/image"


// const InsightsCard = () =>{
//     return(
//         <div className="sapce-y-4">
//             <div className="h-1/2">
//                 <Image
//                     src={"/images/landing/insights/insight5.jpg"}
//                     alt="blog1"
//                     width={300}
//                     height={300}
//                     className="w-full h-full object-cover rounded-md"/>
//             </div>
//             <div className="space-y-8">
//                 <div className="sapce-y-2">
//                     <p className="grey">April 14, 2025</p>
//                     <p className="font-bold">New Communities in Dubai You Should Know About in 2025</p>
//                 </div>
//                 <p className="grey font-bold">Read More</p>
//             </div>
//         </div>
//     )
// }

// export default InsightsCard

import Image from 'next/image'
import { BlogInterface } from '@/interfaces/interface'

const InsightsCard = ({ title, createdAt, blogCover, desc }: BlogInterface) => {
  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <Image
          src={blogCover}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="grey text-sm">{createdAt}</p>
          <p className="font-bold text-base">{title}</p>
          <p className="text-sm grey">{desc}</p>
        </div>
        <p className="grey font-bold text-sm cursor-pointer">Read More</p>
      </div>
    </div>
  )
}

export default InsightsCard