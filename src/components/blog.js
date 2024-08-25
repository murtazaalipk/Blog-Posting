import Image from "next/image";
import Pic from "../pics/profile.png";
import { useState, useEffect } from "react";
export default function Blog() {
  const [Blogs, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/getAllBlogs");
      const blogs = await response.json();
      setBlog(blogs.blogs);
    };
    fetchBlogs();
  }, []);
  console.log(Blogs);

  return (
    <div className="pl-40 pr-40 pb-10 pt-10">
      <div>
        {Blogs.map((blog) => (
          <div key={blog._id} className=" border border-gray-300 m-5 rounded">
            <div className=" flex gap-7 items-center p-5">
              <div className="flex m-5">
                <Image
                  className="justify-center items-center rounded-full"
                  src={Pic}
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="m-5 flex flex-col">
                <h1 className=" text-xl font-bold">{blog.title}</h1>
                <p className=" text-gray-600 font-bold">
                  {blog.AuthorName} - {blog.AuthorDesignation}
                </p>
              </div>
            </div>
            <div className="m-5">
              <p className=" p-5 text-justify">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
