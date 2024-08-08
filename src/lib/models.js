import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique: true,
        min:3,
        max:20
    },
    password:{
        type:String,
        required:true,
        unique: true,
        min:3,
        max:20
    },
    Image:{
        type:String
    },
    isActive:{
     type:Boolean,
     default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
)

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
      
    },
    
    Image:{
        type:String
    },
    userId:{
        type:String
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})


export const User = mongoose.models.Users || mongoose.model('Users',userSchema)
export const Post = mongoose.models.Posts || mongoose.model('Posts',postSchema)