import React, { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { useSession, signOut } from 'next-auth/react'

import Loading from '../Loading'


export default function PostToInstagram() {
    
    const {status } = useSession()
    const [inputTextArea, setInputTextArea] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextArea(event.target.value)
    }
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value)
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const confirmMessage = confirm('enviar postagem?')
        if(confirmMessage) {
            await axios.post('/api/server/mail-handling', {
                inputTextArea, inputTitle
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
                            <form onSubmit={handleSubmit} className='items-center justify-center w-screen h-full'>
                                <div className='items-center w-full h-screen form-control'>
                                    <div className='flex flex-col items-center w-1/4 p-4 mt-10'>
                                        <button onClick={() => signOut()} className='btn btn-warning'>signOut</button>
                                        <label className='font-sans text-2xl text-zinc-700' htmlFor="post">nova postagem</label>

                                    </div>

                                    <section className='items-center w-full m-5 form-control'>

                                        <label className='label-text' htmlFor="title">Título da postagem</label>
                                        <input onChange={handleTitleChange} type="text" id='title' className='p-4 lg:w-1/4 input input-bordered' name='title' />
                                    </section>

                                    <textarea
                                        required
                                        onChange={handleChange} 
                                        className='w-full max-w-xs border-primary textarea textarea-bordered textarea-lg' 
                                        name="nova postagem" 
                                        id="post" 
                                        cols={30} 
                                        maxLength={2200}
                                        minLength={75}
                                        rows={15}
                                        >
                                    </textarea>

                                    <button 
                                        className='mt-5 text-white btn btn-primary' 
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