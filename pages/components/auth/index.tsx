"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import Head from 'next/head'

import  {useRouter} from 'next/router'

import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

export default  function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {status} = useSession()
    const route = useRouter()
    useEffect(() => {
        if (status == 'authenticated') {
            route.replace("/components/auth/PostToMail")
        } else if (status == 'unauthenticated') {alert('n autorizado')}
    }, [status])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async  (e: FormEvent) => {
        e.preventDefault()
        await signIn('credentials', { redirect: false,
            email: email, password: password
        })
        
        
    }

    return (
       <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
             <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <form onSubmit={handleSubmit}  className='flex flex-col gap-2'>
                <div className='w-full' >
                    <label className='flex' htmlFor="email">email</label>
                    <input id='email' onChange={handleEmailChange} className='rounded-lg' type="text" />

                </div>
                
                <div>
                    <label className='flex' htmlFor="password">senha</label>
                    <input id='password' onChange={handlePasswordChange} className='rounded-lg' type="password" />
                </div>
                <input type='submit' className='w-20 h-10 ml-auto mr-auto text-center bg-yellow-400 rounded-md '  value="logar"/>
            </form>
        </div>
       </>
    )
}

