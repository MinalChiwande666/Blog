import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'
const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
             <div className={styles.imgContainer}>
               <Image fill src={post.Image === "" || !post.Image?("https://images.pexels.com/photos/27308720/pexels-photo-27308720/free-photo-of-a-small-boat-in-the-ocean-with-a-person-in-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"):(post.Image)} alt='' className={styles.img}/>
             </div>
             <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
             <h1 className={styles.title}>{post.title}</h1>
             <p className={styles.desc}>{post.desc}</p>
             <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard