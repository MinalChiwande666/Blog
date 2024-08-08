import { User } from "@/lib/models"
import { connectionDb } from "@/lib/utils"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try{
        connectionDb()
        const data = await request.json();
        const newUser = User(data); // Create a new User instance
        await newUser.save(); // Save the new user to the database
    
        return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
      }catch(e)
      {
        console.log(e)
      }
}