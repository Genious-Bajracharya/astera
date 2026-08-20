
interface LocationMapProps {
  location: string;
}

const LocationMap = ({ location }: LocationMapProps) =>{
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

    return(
        <div className="spcae-y-6">
            <p className="heading2">Location</p>
            <div className="h-[330px]">
                <iframe
                    src={mapUrl}                   
                    className="rounded-[8px] w-full h-full "
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )

}

export default LocationMap