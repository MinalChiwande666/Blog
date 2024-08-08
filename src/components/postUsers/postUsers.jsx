import React from 'react'
import styles from './postUsers.module.css'
import { getUsers } from '@/lib/data'
import Image from 'next/image'
// const getData = async(uid)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`, {cache:'no-store'})

//     if(!res.ok)
//     {
//         throw new Error('Something went wrong')
//     }

//     return res.json()
// }

const PostUsers = async ({ userId }) => {

    // const userDetail = await getData(userId)
    // console.log(userId)
    console.log(userId)
    const userDetail = await getUsers(userId)
    console.log(userDetail)
    return (
        <div className={styles.container}>
     
            
            <span className={styles.title}>Author</span>
            <div className={styles.userDetail}>
            <Image className={styles.avatar} src={'/noavatar.png'} alt='' width={20} height={20} />
            <span className={styles.username}>{userDetail.username}</span>
            </div>
        </div>
    )
}

export default PostUsers