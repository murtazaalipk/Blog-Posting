import { dbConnect } from "@/lib/db";
import { getAllBlog } from "@/services/blogs";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const blogs = await getAllBlog();
      res.status(200).json({ blogs });
    } catch (e) {
      console.log("Error From getAllBlogs Api");
      res.status(401).json({ message: e.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
