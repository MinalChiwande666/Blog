"use client";   
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const NavigationTest = () => {
    const route = useRouter()
    const pathname = usePathname()
    console.log(pathname,'sndjnsjdnj')
     
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    console.log(q)
    const handleNavigation = ()=>{
        console.log('hello')
        route.push('/')
    }
  return (
    <div>
        <Link href={"/"} prefetch={false}>Click Here</Link>
        <button onClick={handleNavigation}>Back</button>
    </div>
  )
}

export default NavigationTest