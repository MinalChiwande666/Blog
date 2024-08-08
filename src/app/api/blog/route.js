import { Post } from "@/lib/models"
import { connectionDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const  GET = async(request)=>{
   
    try{
      connectionDb()
      const posts = await Post.find()
      return NextResponse.json(posts)
    }catch(e)
    {
        console.log(e)
    }
}