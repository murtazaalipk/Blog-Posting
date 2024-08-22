import { dbConnect } from "@/lib/db";
import User from "@/model/user";
import bcrypt from 'bcryptjs';
export default async function handler(req , res) {
    const { method } = req;
    await dbConnect();

    if ( method == "POST") {
        try {
            const { firstName , lastName , email , designation , password } = req.body;
            
            // check if user exists
            const userExists = await User.findOne({email});
            if(userExists){
                return res.status(400).json({message:"user already Exists"})
            }

            //hash Password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // create a new User
            const user =  new User({
                firstName,
                lastName,
                email,
                designation,
                password: hashedPassword
            });

            await user.save();
            res.status(201).json({success: true , data:user});

        } catch(error){
            res.status(500).json({success: false , error: error.message });
        }
    }
    else{
        res.status(500).json({message:"Method Not Allowed"})
    }
}