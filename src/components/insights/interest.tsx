import Image from "next/image";
import Link from "next/link";
import { GetBlogs } from "@/api";
import { useEffect, useState } from "react";
import { BlogInterface } from "@/interfaces/interface";
import Loading from "@/app/loading";

const Interest = () => {
  const [blogs, setsetblogs] = useState<BlogInterface[]>([]);

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
    <div className="plr space-y-9 py-[84px] ">
      <div className="flex justify-between">
        <p className="heading3">May also interest you</p>
        <p className="font-bold underline underline-offset-4">View More</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {blogs.slice(1, 5).map((item, index) => (
          <div key={index} className="space-y-4  h-[320px] ">
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
                <Link href={`/news&insights/${item?.slug}`}>Read More</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
