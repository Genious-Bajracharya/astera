import Image from "next/image"
import { PropertyInterface } from "@/interfaces/interface"

interface BuyGridProps {
  data: PropertyInterface | undefined;
}

const extractYouTubeId = (url: string): string => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/
  );
  return match?.[1] ?? "";
};

const BuyGrid =  ({data}: BuyGridProps) =>{
    const images = data?.images || [];
    const video = data?.video ?? null;
    console.log(data)

    return(
        <div className="plr space-y-4">
            <p className="grey "> <span className="font-bold">Home /</span> Buy Property / {data?.name} </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:h-[580px]">
                <div className="lg:w-1/2">
                    {images[0]?.url && (
                        <Image
                        src={images[0].url}
                        alt="Primary Image"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                        decoding="async"
                        />
                    )}
                </div>
                <div className="lg:w-1/2 flex flex-col gap-4">
                {
                    video ? 
                    (
                        <div className="lg:h-1/2">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${extractYouTubeId(video)}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full object-cover rounded-2xl"
                                allowFullScreen>
                            </iframe>
                        </div>
                    ):(
                        <div className="lg:h-1/2">
                            {images[1]?.url && (
                                <Image
                                    src={images[1].url}
                                    alt="Secondary Image"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                                )}
                        </div>
                    )
                }
                    <div className="lg:h-1/2 flex gap-4">
                        <div className="lg:w-1/2">
                            {images[2]?.url && (
                                <Image
                                    src={images[2].url}
                                    alt="Secondary Image"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                                )}
                        </div>
                        <div className="lg:w-1/2">
                            {images[3]?.url && (
                                <Image
                                    src={images[3].url}
                                    alt="Secondary Image"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyGrid