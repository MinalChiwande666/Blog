"use client";

import React from 'react'
import { convertToBase64 } from '@/lib/convertimg'
import styles from './addblog.module.css'
const AddBlogForm = () => {
  const [title, settitle] = React.useState('')
  const [desc, setdesc] = React.useState('')
  const [img, setimg] = React.useState(null)
  const [slug, setslug] = React.useState('')

  const handleFile = async(e)=>{
    // console.log(e?.target?.files[0])
    const file = e?.target?.files[0]
    const conimg = await convertToBase64(file)
    // console.log(conimg)
    if(conimg.length > 0)
    {
      // console.log('hello image')
      setimg(conimg)
    }
    // 
  }


  const handleSubmit = async() => {
    const userdetail = localStorage.getItem('Userdetail')
    const conjson = JSON.parse(userdetail)
    // alert(conjson?.id)
    let blog_data = {
      title:title,
      desc:desc,
      Image:img,
      userId:conjson?.id,
      slug:slug
    }

   try{
    const resp = await fetch('http://localhost:3000/api/createblog',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog_data)
     })
   console.log(resp)
     if (!resp.ok) {
      throw new Error('Failed to create user');
    }

    const result = await resp.json();
    alert('Successfully added');
    Route.push('/blog')

    
   
   }catch(e)
   {
    console.log(e)
   }
  }
  return (
    <div className={styles.form} >
      <input value={title} onChange={(e) => {
        settitle(e?.target?.value)
      }} type="text" placeholder="title" name="title" />
      <input
        value={desc}
        onChange={(e) => {
          setdesc(e?.target?.value)
        }}
        type="text" placeholder="desc" name="desc" />
      <input
        value={slug}
        onChange={(e) => {
          setslug(e?.target?.value)
        }}
        type="text" placeholder="slug" name="slug" />

    
     <input type="file" onChange={handleFile} />
      <button onClick={handleSubmit}>AddBlog</button> 
      {/* {state?.error} */}
    </div>
  )
}

export default AddBlogForm