import LandingContact from "@/components/landing/contact"
import Seller from "@/components/common/seller/seller"
import Compare from "@/components/comparision/compare"
const CompareProperty = () =>{
    return(
        <div className="ptb">
            <Compare/>
            <LandingContact/>
            <Seller/>
        </div>
    )
}

export default CompareProperty