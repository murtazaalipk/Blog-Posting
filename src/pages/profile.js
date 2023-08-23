import Blog from "@/components/blog";
import Dashboard from "@/components/dashboard";
import { getSession } from "next-auth/react"
Blog

export default function SignUp() {
  return (<div>
    <Dashboard/>
    <Blog/>
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