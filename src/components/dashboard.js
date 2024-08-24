import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  console.log(title, content)
  
  const {data: session , status } = useSession();
  
  if (status === "loading") {
    return <div>loading...</div>;
  }

 const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
    const response = await fetch('/api/blogPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for sending cookies
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      console.log('Blog posted successfully');
    } else {
      console.error('Failed to post blog');
    }
  }catch(error){
    console.error('An error occurred:', error);
  }
 }

  return (
    <>
    {}
      <div>
        <h1 className=" font-bold text-xl pl-40 pt-10 fontdash ">Dashboard</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center"
          >
            <div className=" border border-gray-300 rounded-md w-3/4 mt-20 justify-center items-center flex-col ">
              <div className=" mt-10 flex justify-center">
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder=" Blog"
                  value={title}
                  maxLength={30}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                 
                  className="block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className=" mt-10 flex justify-center">
                <textarea
                  id="content"
                  name="content"
                  type="text"
                  placeholder=" What is in your mind"
                  maxLength={200}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="block w-4/5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className=" mt-10 flex justify-center">
                <button
                  type="submit"
                  className=" mt-10 mb-10 flex items-center justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold  text-white shadow-sm "
                >
                  Publish Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
