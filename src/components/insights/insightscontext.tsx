"use client";

import { GetBlog, GetBlogBySlug } from "@/api";
import { useEffect, useState } from "react";
import { BlogInterface } from "@/interfaces/interface";
import Loading from "@/app/loading";

type InsightsContentProps = {
  blogId: string;
};

const InsightsContent = ({ blogId }: InsightsContentProps) => {
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
    <div className="md:px-[50px] px-4 lg:px-[290px] space-y-8 pt-3">
      <h2 className="text-[24px] font-bold">{blog?.desc}</h2>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default InsightsContent;
