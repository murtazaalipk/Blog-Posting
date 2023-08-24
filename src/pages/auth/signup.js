import Form from "@/components/auth/form";


export default function SignUp () {
    const onSubmit = async ( email, password ,fname , lname) => {
    try{
         const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({email, password ,fname , lname}),
            headers:{
                "Content-Type":"application/json" 
            } 
     }); 
 if (response.ok){
         alert("sigup successfull")
     } 
    }catch(err){
        console.log(err)
    }
        }; 
    return (
    <div>
         <h1 className="good font-bold text-xl pl-40 pt-10 " >SignUp Page</h1>
    <Form signin={false} onFormSubmit={onSubmit} /> </div>
    )
};
