import Blog from "@/components/blog";
import Dashboard from "@/components/dashboard";
import { getSession } from "next-auth/react"
import data from '@/data/blogs.json';

export default function SignUp() {
  return (
  <div>
    <Dashboard/>
    <div className='flex flex-col items-center ' >
    <Blog/>
    </div>
  </div>
  )
};
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
      destination: "/auth/login",
      permanent: false
    }
  }
}
return {
    props: {
      session
  }
}
}