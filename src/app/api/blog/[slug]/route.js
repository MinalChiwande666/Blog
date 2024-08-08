

import { Post } from "@/lib/models"
import { connectionDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const  GET = async(request,{params})=>{
    const {slug} = params

    try{
      connectionDb()
      const post = await Post.findOne({slug})
      return NextResponse.json(post)
    }catch(e)
    {
        console.log(e)
    }
}


export const  DELETE = async(request,{params})=>{
  const {slug} = params

  try{
    connectionDb()
    const post = await Post.deleteOne({slug})
    return NextResponse.json('Delete post')
  }catch(e)
  {
      console.log(e)
  }
}