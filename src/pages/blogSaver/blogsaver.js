import Dashboard from "@/components/dashboard";


export default function blogs () {
async function onSubmit(){


          const response = await fetch("/api/auth/signup", {
           method: "POST",
            body: JSON.stringify({blogHead, blogcontent}),
            headers:{
                "Content-Type":"application/json" 
            } 
     }); 
 if (response.ok){
         alert("blog save successfull")
     } 
    }  
    return (
    <div>
        <Dashboard onFormSubmit={onSubmit}/>
    </div>
    )
};

