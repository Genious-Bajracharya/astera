"use client";
import Image from "next/image";
import { GetBlogs } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { BlogInterface } from "@/interfaces/interface";

const InsightsGrid = () => {
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

  if (!blogs) return <Loading />;
  return (
    <div className="plr maxi space-y-6 ">
      {/* UpperSection  */}
      <div className="lg:flex h-[350px] hidden  ">
        <div className="md:w-1/2">
          <Image
            src={blogs[0]?.blogCover ?? fallback}
            loading="lazy"
            decoding="async"
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
            <h1 className="text-[32px] font-bold ">{blogs[0]?.title}</h1>
            <p className="grey md:w-[99%]">{blogs[0]?.desc}</p>
          </div>
          <p className="font-bold grey">
            <Link href={`/news&insights/${blogs[0]?.slug}`}>Read More</Link>
          </p>
        </div>
      </div>

      {/* BottomSection  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {blogs.slice(1).map((item, index) => (
          <div key={index} className="space-y-4 h-[400px] lg:h-[320px] ">
            <div className="lg:h-[180px] h-[250px]">
              <Image
                src={item?.blogCover}
                loading="lazy"
                decoding="async"
                alt="blog1"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="space-y-8">
              <div className="sapce-y-2">
                <p className="grey">
                  {new Date(blogs[0]?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="font-bold">{item?.title}</p>
              </div>
              <p className="grey font-bold">
                <Link href={`/news&insights/${item?.slug}`}>Read More</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsGrid;
