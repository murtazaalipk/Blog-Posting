import { save } from "@/services/users";

export default function handler(req, res) {
    if(req.method !== "POST"){
     return  res.status(404).send();
    }
    const { email, password ,fname ,lname } = req.body;
   
    try{
      save(email, password, fname, lname)
      res.status(201).send();
    } 
    catch(err){
      res.status(400).json({message:err})
    }
    
  }
  