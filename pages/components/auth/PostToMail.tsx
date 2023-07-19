import React, { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { useSession, signOut } from 'next-auth/react'

import Loading from '../Loading'


export default function PostToInstagram() {
    
    const {status } = useSession()
    const [inputTextArea, setInputTextArea] = useState('')
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextArea(event.target.value)
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const confirmMessage = confirm('enviar postagem?')
        if(confirmMessage) {
            await axios.post('/api/server/mail-handling', {
                inputTextArea
            })
            .then(() => {
    
                alert('post enviado')
                Router.reload()
            })
            
            .catch((error) => {
                console.log(error)
            })
        }
    }
    
return (
        <>
            {
                status === 'loading' ? 

                <div className='flex items-center justify-center w-screen h-screen'>
                    <Loading />
                </div> 

                : 

                (
                        
                    status === 'authenticated' ? (
                        <> 
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col items-center justify-center w-full h-screen gap-3'>
                                    <div className='flex items-center w-full justify-evenly'>
                                        <label className='font-sans text-2xl text-zinc-700' htmlFor="post">nova postagem</label>
                                        <button onClick={() => signOut()} className='w-32 p-2 font-sans bg-yellow-400 border-none rounded-md text-zinc-700 disabled:opacity-80 disabled:mt-0 hover:bg-yellow-300 active:mt-1' >signOut</button>

                                    </div>

                                    <textarea
                                        required
                                        
                                        onChange={handleChange} 
                                        className='w-11/12 m-1 rounded-xl' 
                                        name="nova postagem" 
                                        id="post" 
                                        cols={30} 
                                        maxLength={2200}
                                        minLength={75}
                                        rows={15}
                                        >
                                    </textarea>

                                    <button 
                                        className='w-32 p-2 font-sans bg-yellow-400 border-none rounded-md text-zinc-700 disabled:opacity-80 disabled:mt-0 hover:bg-yellow-300 active:mt-1' 
                                        disabled={!inputTextArea} >
                                            enviar post
                                    </button>
                                            
                                </div>
                            </form>
                        </>
                    )

                    : 

                    <div className='flex flex-col items-center justify-center w-screen h-screen'>
                        <h1>você não está autorizado</h1>
                        <button className='w-32 p-2 font-sans bg-yellow-400 border border-solid rounded-md disabled:bg-yellow-50 text-zinc-900' onClick={() => {
                            Router.replace("/components/auth")
                        }}> logar</button>    
                    </div>

                )
            }
        </>
    )
}