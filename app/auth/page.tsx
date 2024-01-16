"use client"
import React, { FormEvent, 
                useState } from 'react'
import  { useRouter } from 'next/navigation'

import { signIn } from 'next-auth/react'



export default  function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const route = useRouter()
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        
    }
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await signIn('credentials', { redirect: false,
            email: email, password: password
        })
        route.replace('/auth/post-to-mail')
    }

    
  

    return (
       <>
           
             <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <form onSubmit={handleSubmit}  className='flex flex-col gap-2'>
                <div className='w-full' >
                    <label className='flex' htmlFor="email">email</label>
                    <input id='email' onChange={handleEmailChange} className='input input-bordered input-primary' type="text" />

                </div>
                
                <div>
                    <label className='flex' htmlFor="password">senha</label>
                    <input id='password' onChange={handlePasswordChange} className='input input-bordered input-secondary' type="password" />
                </div>
                <input type='submit' className='w-20 h-10 ml-auto mr-auto text-center rounded-md btn-primary btn '  value="logar"/>
            </form>
        </div>
       </>
    )
}

