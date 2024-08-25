import blog from "@/model/blog"

export const getAllBlog = async () => {
    try {

        const blogs = await blog.find().populate('author','designation firstName')
        return blogs.map(blog => ({
            
            id: blog?._id,
            title: blog?.title,
            content: blog?.content,
            AuthorDesignation: blog?.author?.designation,
            AuthorName: blog?.author?.firstName,
        }))

    } catch(e) {
        console.log("Error From getAllBlog Function")
        throw new Error("Error: ", e.message );
    }

}