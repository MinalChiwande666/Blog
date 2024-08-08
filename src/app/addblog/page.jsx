"use client";
import AddBlogForm from '@/components/AddBlog/AddBlogForm';
import styles from './addblog.module.css'
import React,{useState} from 'react'
const AddBlog = () => {
   const [title, settitle] = useState('')
   const [desc, setdesc] = useState('')
   const [img, setimg] = useState('')
   const [slug, setslug] = useState('')
   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
        
            <AddBlogForm/>
         </div>
      </div>
   )
}

export default AddBlog