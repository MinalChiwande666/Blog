import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUsers from '@/components/postUsers/postUsers'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
  if (!res.ok) {
    throw new Error('Somethin went wrong!!')
  }

  return res.json()
}
const SinglePostPage = async ({ params }) => {
  const { slug } = params
// FETCH WITH API
  const singleBlog = await getData(slug)

  // FETCH WITHOUT API
  // const singleBlog = await getPost(slug)
  console.log(singleBlog)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={!singleBlog.Image ? ("https://images.pexels.com/photos/27308720/pexels-photo-27308720/free-photo-of-a-small-boat-in-the-ocean-with-a-person-in-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"):(singleBlog.Image)} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singleBlog.title}</h1>
        <div className={styles.details}>
          
          <Suspense fallback={<div>Loading...</div>}>
            <PostUsers userId={singleBlog.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published At</span>
            <span className={styles.detailValue}>{singleBlog.createdAt === null ||!singleBlog.createdAt?"":singleBlog.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.desc}>{singleBlog.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage