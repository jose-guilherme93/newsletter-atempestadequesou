import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'



export default function PostToInstagram() {

    const {data, status }= useSession()
    const [inputTextArea, setInputTextArea] = useState('')
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextArea(event.target.value)
        
    }
    
   

    return(
        <>
            {
                status === 'loading' ? <h3>loading...</h3> : (

                    status === 'authenticated' ? (
                        <div className='w-full h-screen flex gap-3 items-center justify-center flex-col'>
                        <button className='w-32 p-2 text-zinc-700 rounded-md border border-solid bg-yellow-400 font-sans' onClick={() => signOut()} >signOut</button>

                        <textarea 
                            onChange={handleChange} 
                            className='w-11/12 m-1 rounded-xl overflow-visible h-auto' 
                            name="nova postagem" 
                            id="post" 
                            cols={30} 
                            maxLength={2000} 
                            rows={15}
                        >
                        </textarea>
                        <button 
                            className='w-32 p-2 text-zinc-700 rounded-md border border-solid bg-yellow-400 font-sans'>
                                enviar post</button>
                                {inputTextArea}
                        </div>
                    )

                    : 

                    <div className='w-screen h-screen flex flex-col items-center justify-center'>
                        <h1>você não está autorizado</h1>
                        <button className='w-32 p-2 text-zinc-900 rounded-md border border-solid bg-yellow-400 font-sans' onClick={() => {
                            Router.replace("/components/auth")
                        }}> logar</button>    
                    </div>

                )
            }
        </>
    )
}