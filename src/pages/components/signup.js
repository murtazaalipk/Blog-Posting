import Form from "./auth/form"
export default function signup() {
    const onSubmit = async (email, password) => {
        try{
             const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers:{
                    "Content-Type":"application/json" 
                } 
         }); 
     if (response.ok){
            alert("singup Succesfull");
         } 
        }catch(err){
            console.log(err)
        }
            }; 
    return (
        <>
            <div>
                <h1 className=" font-bold text-xl pl-40 pt-10 " >SignUp Page</h1>
                <Form onFormSubmit={onSubmit} />

            </div>
        </>
    )
}