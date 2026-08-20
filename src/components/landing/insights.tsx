"use client";
import Image from "next/image";
import MobileInsightsCarousel from "./mobileInsights";
import Link from "next/link";
import { GetBlogs } from "@/api";
import { useEffect, useState } from "react";
import { BlogInterface } from "@/interfaces/interface";
import Loading from "@/app/loading";

const Insights = () => {
  const [blogs, setsetblogs] = useState<BlogInterface[]>([]);
  const fallback = "/images/landing/insights/insight1.jpg";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await GetBlogs();
        console.log(data);
        setsetblogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (blogs.length === 0) return <Loading />;

  return (
    <>
      <div className="plr space-y-6 max-w-[1440px] mx-auto ">
        <div className="flex justify-between ">
          <p className="heading3">Latest News & Insights</p>
          <p className="border-b-[1px] font-bold pb-1.5">
            <Link href={"/news&insights"}>View More</Link>
          </p>
        </div>
        <div className=" space-y-6 hidden sm:block">
          {/* UpperSection  */}
          <div className="flex h-[350px]  pt-3">
            <div className="md:w-1/2">
              <Image
                src={blogs[0]?.blogCover ?? fallback}
                alt="blog1"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-1/2 space-y-16 grid pl-[60px] items-center">
              <div className="space-y-3">
                <p className="grey">
                  {new Date(blogs[0]?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="heading2 pt-1">{blogs[0]?.title}</p>
                <p className="grey md:w-[50%]">{blogs[0]?.desc}</p>
              </div>
              <p className="font-bold grey">
                <Link href={`/news&insights/${blogs[0]?._id}`}>Read More</Link>
              </p>
            </div>
          </div>

          {/* BottomSection  */}
          <div className="flex gap-4 ">
            {blogs &&
              blogs.slice(1, 5).map((item, index) => (
                <div key={index} className="space-y-4  h-[320px] w-1/4">
                  <div className="h-[180px]">
                    <Image
                      src={item?.blogCover}
                      alt="blog1"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="sapce-y-2">
                      <p className="grey">
                        {new Date(item?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="font-bold">{item.title}</p>
                    </div>
                    <p className="grey font-bold">
                      <Link href={`/news&insights/${item?.slug}`}>
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <MobileInsightsCarousel data={blogs} />
        </div>
      </div>
    </>
  );
};

export default Insights;
