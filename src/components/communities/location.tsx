const LocationMap = () =>{
    return(
        <div className="spcae-y-6">
            <p className="heading2">Location</p>
            <div className="h-[330px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7263.6723441154145!2d54.37729771090857!3d24.456468637889103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6886e7352251%3A0x5782b26468f334fa!2z2KfZhNil2KrYrdin2K8gLSBFMjIgLSBBYnUgRGhhYmkgLSBVbml0ZWQgQXJhYiBFbWlyYXRlcw!5e0!3m2!1sen!2snp!4v1751970368644!5m2!1sen!2snp"                    className="rounded-[8px] w-full h-full "
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )

}

export default LocationMap