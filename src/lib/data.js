import { Post, User } from "./models"
import { connectionDb } from "./utils"

const posts = [
    {
        id:1,
        title:'Post1',
        body:'.....',
        userId:1
    },
    {
        id:2,
        title:'Post2',
        body:'.....',
        userId:1
    },
    {
        id:3,
        title:'Post3',
        body:'.....',
        userId:2
    },
    {
        id:4,
        title:'Post4',
        body:'.....',
        userId:2
    }
]

const users = [
    {
        id:1,
        name:'Minal Chiwande'
    },
    {
        id:2,
        name:'Hiten Chiwande'
    }
]

export const getPosts = async ()=>{

    try{
      connectionDb()
      const posts = await Post.find()
      return posts
    }catch(e)
    {
        console.log(e)
    }
    // return posts
}

export const getPost = async (slug)=>{
    try{
        connectionDb()
        const posts = await Post.findOne({slug})
        return posts
      }catch(e)
      {
          console.log(e)
      }
}

export const getUsers = async(id)=>{
    try{
        connectionDb()
        const user = await User.findById(id)
        return user
      }catch(e)
      {
          console.log(e)
      }
}

export const getUserss = async()=>{
    try{
        connectionDb()
        const users = await User.find()
        return users
      }catch(e)
      {
          console.log(e)
      }
}