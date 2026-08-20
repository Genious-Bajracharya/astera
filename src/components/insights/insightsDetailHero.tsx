"use client";

import Image from "next/image";
import { GetBlog, GetBlogBySlug } from "@/api";
import { useEffect, useState } from "react";
import { BlogInterface } from "@/interfaces/interface";
import Loading from "@/app/loading";

type InsightsDetailHeroProps = {
  blogId: string;
};

const InsightsDetailHero = ({ blogId }: InsightsDetailHeroProps) => {
  const [blog, setblog] = useState<BlogInterface | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetBlogBySlug(blogId);

        setblog(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [blogId]);

  if (!blog) return <Loading />;

  return (
    <div className="flex flex-col lg:flex-row lg:h-[350px] plr pt-3">
      <div className="lg:w-1/2 w-full">
        <Image
          src={blog?.blogCover}
          alt="blog1"
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="lg:w-1/2 space-y-16 grid lg:pl-[60px] items-center">
        <div className="space-y-3">
          <p className="grey">
            {new Date(blog?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-[32px] font-bold pt-1">{blog?.title}</h1>
          <p className="grey ">{blog?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightsDetailHero;
