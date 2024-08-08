import React from 'react'
import styles from './register.module.css'
import RegisterFoem from '@/components/RegisterForm/RegisterFoem'
const RegisterPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <RegisterFoem/>
    </div>
  </div>
  )
}

export default RegisterPage