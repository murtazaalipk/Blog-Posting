import Form from "@/components/auth/form";
import { data } from "autoprefixer";
import { getSession } from "next-auth/react"
import { signIn } from "next-auth/react";
export default function SignIn() {
    const onSubmit = (email, password ) => {
        const data = signIn('credentials', { redirect: true, email, password })
        console.log(data)
    };
    return ( <div>
        <h1 className="good font-bold text-xl pl-40 pt-10 " >SignIn Page</h1>
    <Form signin={true} onFormSubmit={onSubmit}/>
    </div>)
};
export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (!session) {
        return {
            props: {
                session
            }
        }
    }
    return {
        redirect: {
            destination: "/profile",
            permanent: false
        }
    }
}