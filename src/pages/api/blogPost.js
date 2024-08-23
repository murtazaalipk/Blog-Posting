import { dbConnect } from "@/lib/db"
import Blog from "@/model/blog";
//import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

//  const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ message: 'You must be logged in to post a blog.' });
//   }

  if (req.method === 'POST') {
    try {
      const { title, content } = req.body;

      const newBlog = new Blog({
        title,
        content,
       // author: session.user.id,  
      });

      await newBlog.save();

      res.status(201).json({ message: 'Blog post created successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
