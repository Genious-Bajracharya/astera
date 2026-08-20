import Question from "@/components/landing/question"
import LandingContact from "@/components/landing/contact"
import Seller from "@/components/common/seller/seller"
import LocationMap from "@/components/communities/location"
import CommunityOverview from "@/components/communities/comminityOverview"
import Connect from "@/components/guide/connect"
const Communities = () =>{
    return(
        <div className="ptb">
            <div className="plr flex flex-col lg:flex-row justify-between">
                <div className="lg:w-[60%] space-y-8">
                    <CommunityOverview/>
                    <LocationMap/>
                </div>
                <Connect/>
            </div>
            <Question/>
            <LandingContact/>
            <Seller/>
        </div>
    )
}

export default Communities