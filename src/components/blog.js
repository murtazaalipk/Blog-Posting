import Image from "next/image";
import Pic from "../pics/profile.png";

export default function Blog() {
  const blogs = [
    {
      Title: "How to make a website Using NextJs",
      Name: "Syed Murtaza Ali",
      designation: "Developer",
      Blog: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      Title: "How to buy StarLink Internet ",
      Name: "Elone Musk",
      designation: "CEO of Tesla Motors",
      Blog: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      Title: "How to buy StarLink Internet",
      Name: "Elone Musk",
      designation: "CEO of Tesla Motors",
      Blog: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <div className="pl-40 pr-40 pb-10 pt-10">
      <div>
        {blogs.map(blog => (
          <div className=" border border-gray-300 m-5 rounded">
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
                <h1 className=" text-xl font-bold">{blog.Title}</h1>
                <p className=" text-gray-600 font-bold">
                  {blog.Name} - {blog.designation}
                </p>
              </div>
            </div>
            <div className="m-5">
              <p className=" p-5 text-justify">{blog.Blog}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
