"use client";

import { register } from "@/lib/action";
import styles from "./registerform.module.css";
import { useFormState } from "react-dom";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { convertToBase64 } from "@/lib/convertimg";
const RegisterFoem = () => {

    const [state, formAction] = useFormState(register, undefined);
    const [username,setUsername] = React.useState('')
    const [Email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [cpassword,setcPassword] = React.useState('')
    const [File,setFile] = React.useState('')
    const router = useRouter();

    const handleFile = async(e)=>{
      console.log(e?.target?.files[0])
      const file = e?.target?.files[0]
      const conimg = await convertToBase64(file)
      setFile(conimg)
    }
  
    const handleSubmit = async()=>{
      const resp = await fetch('http://localhost:3000/api/createuser',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:username,
          email:Email,
          password:password,
          Image:File,
          // isActive:false,
          // isAdmin:false
        })
       })
    console.log(resp)
       if (!resp.ok) {
        throw new Error('Failed to create user');
      }
     
      const result = await resp.json();
      console.log(result)
      alert('Successfully register');
    }
    
    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);
  return (
    <div className={styles.form} >
    <input value={username} onChange={(e)=>{
      setUsername(e?.target?.value)
    }} type="text" placeholder="username" name="username" />
    <input
    value={Email}
    onChange={(e)=>{
      setEmail(e?.target?.value)
    }}
    type="email" placeholder="email" name="email" />
    <input 
    value={password}
    onChange={(e)=>{
      setPassword(e?.target?.value)
    }}
    type="password" placeholder="password" name="password" />

    <input
      value={cpassword}
      onChange={(e)=>{
        setcPassword(e?.target?.value)
      }}
      type="password"
      placeholder="password again"
      name="passwordRepeat"
    />
    {/* <input type="file" value={File} onChange={handleFile}/> */}
    <button onClick={handleSubmit}>Register</button>
    {state?.error}
    <Link href="/login">
      Have an account? <b>Login</b>
    </Link>
  </div>
  )
}

export default RegisterFoem