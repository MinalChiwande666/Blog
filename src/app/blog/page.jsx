"use client";

import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { useRouter } from 'next/navigation';
import React from 'react';
// import { getPosts } from '@/lib/data'


const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog')
  if (!res.ok) {
    throw new Error('Somethin went wrong!!')
  }

  return res.json()
}
// eslint-disable-next-line @next/next/no-async-client-component
const BlogPage = async () => {
  const [User] = React.useState(JSON.parse(localStorage.getItem('Userdetail')))
  // console.log(params)
  // console.log(searchParams)
  // FETCH WITH API
  const Route = useRouter()
  const posts = await getData()
  // console.log(posts)
  // FETCH WITHOUT API
  // const posts = await getPosts()
  console.log(posts)
  console.log(User)
  return (
    <div className={styles.container}>
      {
        Object.keys(User).length === 0?null:
        <button onClick={()=>{
        Route.push('/addblog')
      }} className={styles.addbtn}>Add Blog</button>}
      {
        posts.map((post, index) => {
          return (
            <div className={styles.post} key={index}>
              <PostCard post={post}/>
            </div>

          )
        })
      }

    </div>
  )
}

export default BlogPage