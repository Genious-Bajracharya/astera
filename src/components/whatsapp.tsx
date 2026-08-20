// import { FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
const Whatsapp = () =>{
    const message = "Hello! I'm interested in your products."

    return(
        <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="">
            <div  className=" fixed bottom-4 right-4 p-3 z-[1000] bg-black/30 backdrop-blur-2xl rounded-full text-white  items-center cursor-pointer shadow-lg hover:scale-110 transition-transform duration-300">
                <RiWhatsappFill  className="w-6 h-6  text-white" />
            </div>
        </a>
    )
}

export default Whatsapp