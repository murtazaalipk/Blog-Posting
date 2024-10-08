import mongoose , {Schema , models} from "mongoose";
const userSchema = new Schema(
{
    firstName : {
        type : String,
        required: true,

    },
    lastName : {
        type : String,
        required: true,

    },
    email : {
        type : String,
        required: true,

    },
    designation : {
        type : String,
        required: true,

    },
    password : {
        type : String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    
}
) 

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;