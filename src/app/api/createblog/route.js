import { Post } from "@/lib/models"
import { connectionDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const  POST = async(request)=>{
   
    try{
        connectionDb()
        const data = await request.json()
        const post = Post(data)
        await post.save();
  
        return NextResponse.json({ message: "Blog created successfully", blog: post }, { status: 201 });
    }catch(e)
    {
        console.log(e)
    }
}