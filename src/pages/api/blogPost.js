import { dbConnect } from "@/lib/db";
import Blog from "@/model/blog";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { title, content, userId } = req.body;

      const newBlog = new Blog({
        title,
        content,
        author: userId,
      });

      await newBlog.save();

      res.status(201).json({ message: "Blog post created successfully!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server error, please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
