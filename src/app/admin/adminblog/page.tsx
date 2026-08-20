"use client"

import { useEffect, useState } from "react";
import { DeleteBlog, GetBlogs } from "@/api";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

type Blog = {
  _id: string;
  title: string;
  content: string;
  blogCover: string; 
  createdAt: string;
};

export default function AdminBlogPanel() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await GetBlogs(); 
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this item?");
      if (!confirmed) return;
      await DeleteBlog(id);
      setBlogs(prev => prev.filter(blog => blog._id !== id));
      toast.success("Deleted Successfully")
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

 
  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="plr space-y-8">
        <Link className='back px-7 py-2.5 rounded-lg' href={"/admin/addblog"}>Add blogs</Link>
        <div className="grid grid-cols-1 w-full gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
           
        {blogs.map(blog => (
            <div key={blog._id} className="border rounded-lg p-4 shadow-sm bg-white">
                <div className=" w-full h-48 mb-2 rounded overflow-hidden">
                    <Image
                    src={blog?.blogCover}
                    alt={`Cover for ${blog.title}`}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full "
                    loading="lazy"
                    decoding="async"
                    />
                </div>

            <h2 className="text-lg font-semibold truncate">{blog.title}</h2>
            <p className="text-sm text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</p>
            {/* <BlogContent  html={blog.content.slice(0,50)} /> */}


            <div className="mt-4 flex justify-between">
                <button
                
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    <Link href={`/admin/adminblog/${blog._id}`}>
                        Update
                    </Link>
                </button>
                <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                Delete
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}