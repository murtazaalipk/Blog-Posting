import Form from "@/components/auth/form";
import { useRouter }from "next/router";


export default function SignUp () {
    const router = useRouter();

    const onSubmit = async ( firstName, lastName, email, designation, password) => {

        const userData = {
            firstName,
            lastName,
            email,
            designation,
            password,
          };
        try {
            const response = await fetch('/api/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
              console.log('User registered successfully:', data);
              router.push('/auth/login'); // Redirect to login after successful registration
            } else {
              console.error('Registration failed:', data.message);
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }; 
    return (
    <div>
         <h1 className="good font-bold text-xl pl-40 pt-10 " >SignUp Page</h1>
    <Form signin={false} onFormSubmit={onSubmit} /> </div>
    )
};
