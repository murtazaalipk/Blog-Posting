import { saveBlogs } from "@/services/users";

export default function handler(req, res) {
    const { blogHead, blogContent } = req.body;    
    saveBlogs(blogHead, blogContent)
    res.status(201).send();
  }
  