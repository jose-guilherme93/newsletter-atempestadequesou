import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'


export default  function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {status} = useSession()

    useEffect(() => {
        if (status == 'authenticated') {
            Router.replace("/components/auth/PostToInstagram")
        } 
    }, [status])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setPassword(e.target.value)
    }


    const handleSubmit = async  (e: FormEvent) => {
        e.preventDefault()
        const result = await signIn('credentials', { redirect: false,
            email: email, password: password
        
        })
        
        console.log(result)
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit}  className='flex flex-col gap-2'>
                <div className='w-full' >
                    <label className='flex' htmlFor="email">email</label>
                    <input id='email' onChange={handleEmailChange} className='rounded-lg' type="text" />

                </div>
                
                <div>
                    <label className='flex' htmlFor="password">senha</label>
                    <input id='password' onChange={handlePasswordChange} className='rounded-lg' type="password" />
                </div>
                <input type='submit' className='rounded-md text-center w-20 h-10 ml-auto mr-auto bg-yellow-400 '  value="logar"/>
            </form>
        </div>
    )
}

