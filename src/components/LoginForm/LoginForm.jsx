"use client";
import React from 'react'
import { login } from '@/lib/action';
import styles from './loginform.module.css'
import Link from 'next/link'
import { useFormState } from "react-dom";
import { useRouter } from 'next/navigation';

// const getUsers = async()=>{
//   const users = await fetch('http://localhost:3000/api/user')
//   return users.json()
// }

// eslint-disable-next-line @next/next/no-async-client-component
const LoginForm = async () => {
    const [state, formAction] = useFormState(login, undefined);
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    // console.log(state)
    const Route = useRouter()
  //  const users = await getUsers()

    const handleLogin = async()=>{
       const resp = await fetch('http://localhost:3000/api/user',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:username
        })
       })
     console.log(resp)
       if (!resp.ok) {
        throw new Error('Failed to create user');
      }
  
      const result = await resp.json();
      alert('Successfully Login');
      Route.push('/')

      console.log(result?.user)
      const udetail = {
        id:result?.user?._id,
        username:result?.user?.username,
        email:result?.user?.email
      }
      console.log(udetail)
      localStorage.setItem('Userdetail',JSON.stringify(udetail))
    }
  return (
    <div className={styles.form} >
    <input value={username} onChange={(e)=>{
      setUsername(e?.target?.value)
    }} type="text" placeholder="username" />

    <input value={password} onChange={(e)=>{
      setPassword(e?.target?.value)
    }} type="password" placeholder="password"/>

    <button onClick={handleLogin}>Login</button>
    {/* {state?.error} */}
    <Link href="/register">
      {"Don't have an account?"} <b>Register</b>
    </Link>
  </div>
  )
}

export default LoginForm