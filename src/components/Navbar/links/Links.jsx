"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLinks from '../navLinks/navLinks'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Links = () => {
    const [User,setUser] = React.useState(localStorage.getItem('Userdetail'))
    const [open,setOpen] = useState(false)
    const Route = useRouter()
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blogs",
            path: "/blog"
        }
    ]

    // const session = true
    // const isAdmin = false
    const handleLogout = ()=>{
        localStorage.setItem('Userdetail',JSON.stringify({}))
        setUser({})
    }

    React.useEffect(()=>{
       console.log(User)
    },[User])
    
    // console.log('dsdsd',JSON.parse(User))
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                {
                    links.map((item, index) => {
                        return (
                            <NavLinks items={item} key={index} />
                        )
                    })
                }
                {
                
                        <>{Object.keys(User).length === 0 ? <button onClick={()=>{
                            Route.push('/login')
                           }} className={styles.logout}>Login</button>:<button onClick={handleLogout} className={styles.logout}>Logout</button>} 
                        </>
                    // : (
                    //     <NavLinks items={{ title: 'Login', path: '/login' }} />
                    // )
                }
            </div>
         {/* <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>Menu</button> */}
         <Image src={'/menu.png'} className={styles.menuButton} alt='' onClick={()=>setOpen(prev=>!prev)} width={30} height={30}/>
         {
            open && (
                <div className={styles.mobileLinks}>
                    {
                        links.map((item,index)=>{
                            return(
                                <NavLinks items={item} key={index} />
                            )
                        })
                    }
                </div>
            )
         }
        </div>
    )
}

export default Links