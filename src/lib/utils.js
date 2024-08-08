const {default:mongoose} = require('mongoose')


const connection = {};

export const connectionDb = async()=>{
     try{
     if(connection.isConnected)
     {
        console.log("using existing db")
     }

     const db = await mongoose.connect('mongodb://localhost:27017/Blogs')
     connection.isConnected = db.connections[0].readyState;
     }catch(e)
     {
        console.log(e)
        throw new Error(e)
     }
}