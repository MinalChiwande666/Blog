import { User } from "@/lib/models"
import { connectionDb } from "@/lib/utils"
import { NextResponse } from "next/server"


export const GET = async(request)=>{
    try{
      connectionDb()
      const user = await User.find()
      return NextResponse.json(user)
    }catch(e)
    {
        console.log(e)
    }
}

export const POST = async(request)=>{
  try{
    connectionDb()
    const data = await request.json();
    const newUser = await User.findOne(data); // Create a new User instance
    await newUser.save(); // Save the new user to the database

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  }catch(e)
  {
    console.log(e)
  }
}