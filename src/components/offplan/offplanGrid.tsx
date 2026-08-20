'use client'
import Image from "next/image"
import { OffPlanInterface } from "@/interfaces/interface";
import { useState } from "react";

interface OffplanGridProps {
  data: OffPlanInterface | undefined;
}

const extractYouTubeId = (url: string): string => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/
  );
  return match?.[1] ?? "";
};

const OffplanGrid = ({data}: OffplanGridProps) =>{
    const images = data?.images || [];
    const video = data?.video ?? null;
    const [showVideo, setShowVideo] = useState(false);

    return(
        <div className="plr space-y-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:h-[800px]">
                <div className="flex flex-col gap-6 max-h-[800px] lg:w-[60%]">
                    <div className="lg:h-[49%] h-[340px]">
                        {images[0]?.url && (
                            <Image
                            src={images[0].url}
                            alt="Primary Image"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover rounded-2xl"
                            />
                        )}
                    </div>
                    <div className="lg:h-[48%] h-[340px]">
                        {images[1]?.url && (
                            <Image
                            src={images[1].url}
                            alt="Primary Image"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover rounded-2xl"
                            />
                        )}
                    </div>
                </div>
                <div className="lg:h-full h-[340px] w-[40%]">
                    {images[2]?.url && (
                        <Image
                        src={images[2].url}
                        alt="Primary Image"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                        />
                    )}
                </div>
            </div>
            {/* down  */}
            <div className="flex flex-col lg:flex-row  gap-6 lg:h-[800px]">
                <div className="lg:h-full h-[340px] w-[40%]">
                    {images[3]?.url && (
                        <Image
                        src={images[3].url}
                        alt="Primary Image"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-6 max-h-[800px] lg:w-[60%]">
                    <div className="lg:h-[49%] h-[340px]">
                        {images[4]?.url && (
                            <Image
                            src={images[4].url}
                            alt="Primary Image"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover rounded-2xl"
                            />
                        )}
                    </div>
                    <div className="lg:h-[48%] h-[340px]">
                        {images[5]?.url && (
                            <Image
                            src={images[5].url}
                            alt="Primary Image"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover rounded-2xl"
                            />
                        )}
                    </div>
                </div>
            </div>
            {showVideo && video && (
                <div className="mt-6 w-full flex justify-center">
                    <div className="aspect-video w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${extractYouTubeId(video)}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
                )}

            <div className="flex items-center justify-center gap-4 font-bold  underline underline-offset-4">
                <p className="cursor-pointer" onClick={() => setShowVideo(false)}>Images</p>
                {video && (
                    <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="cursor-pointer hover:text-blue-800 transition underline underline-offset-4"
                    >
                        Video
                    </button>
                    )}

            </div>
        </div>
    )
}

export default OffplanGrid