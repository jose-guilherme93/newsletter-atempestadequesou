import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function PostToInstagram() {

    const {status } = useSession()
    const [inputTextArea, setInputTextArea] = useState({})
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextArea(event.target.value)
        
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await axios.post('/api/server/webhook', {
            inputTextArea
          })

    }
    
    return(
        <>
            {
                status === 'loading' ? <h3>loading...</h3> : (

                    status === 'authenticated' ? (
                       <form onSubmit={handleSubmit}>
                         <div className='w-full h-screen flex gap-3 items-center justify-center flex-col'>
                     
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
                     </div>
                       </form>
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