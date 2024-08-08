import { addPost, deletePost } from '@/lib/action'
import React from 'react'

const page = () => {
  return (
    <div>
    <form action={addPost}>  
      <input type='text' name='title'/>
      <input type='text' name='desc'/>
      <input type='text' name='slug'/>
      <input type='text' name='userId'/>
      <button>Create Blog</button>
    </form>
    <form action={deletePost}>  
      <input type='text' name='id'/>
      <button>delete Blog</button>
    </form>
    </div>
  )
}

export default page