import Seller from "@/components/common/seller/seller";
import CareerDetails from "@/components/careerDetail/careerDetail";
import Vacancies from "@/components/career/vacancies";
const CareerDetail = () =>{
    return(
        <div className="ptb">
            <CareerDetails/>
            <Vacancies/>
            <Seller/>
        </div>
    )
}

export default CareerDetail