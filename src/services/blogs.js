/* import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

export function getBlogs(){
    const data = fs.readFileSync(filePath);
}

export function saveBlogs(blogHead, blogContent){
    const data = getBlogs();
    data.push({
        id: data.length + 1,
        head: blogHead,
        content: blogContent
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
} */
