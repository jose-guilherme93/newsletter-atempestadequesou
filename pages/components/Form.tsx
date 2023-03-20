import React, {useState} from 'react'


import Image from "next/image"

import { SubmitHandler, useForm } from "react-hook-form"

import {  IoIosArrowDown } from 'react-icons/io'


interface UserFormData {
    nome: string
    email: string
    
}

export default function Form() {


    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>()

    const [isSend, setIsSend] = useState(false)
    

    const onSubmit:  SubmitHandler<UserFormData> = async (data: UserFormData) => {
        setIsSend(true)
        
        await fetch('./api/server/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email
            })
        
        })
        
        if (data) {
            alert('obrigada por se cadastrar! seu email foi salvo.')
            setIsSend(false)
        }
        
    }
    
    return (
       <div className="w-screen h-screen mt-auto mb-auto">
            <form 
                className="flex flex-col items-center justify-center w-full h-full bg-blue" 
                onSubmit={handleSubmit(onSubmit)}
            >

                <Image
                    priority
                    src="/logo.jpg" 
                    width={100}
                    height={100}
                    alt="logo"
                    className="mb-4 rounded-full "
                />
 
                <h1 
                    className="w-4/5 p-3 font-serif text-2xl text-center border-2 rounded-lg shadow-sm bg-zinc-50 hover:border-yellow-400 shadow-zinc-500 text-zinc-700"
                >
                meus pensamentos, minhas histórias, minhas sensações. na sua caixa de email.</h1>
                <br />

                <label 
                    className="w-4/5 font-serif text-lg text-left text-white" 
                    htmlFor="inputName"
                > 
                seu nome mais bonito
                </label>
                
                <input
                    id="inputName"
                    className="w-4/5 mx-4 border-2 border-transparent rounded-lg shadow-sm focus focus:border-yellow-400 hover:border-yellow-400 text-zinc-500 shadow-zinc-500" 
                    type="text"
                    placeholder="seu nome"
                    {...register("nome", { required: true })}
                />
                    {errors.nome && <span className="w-4/5 font-serif text-left text-white">ei, não esqueça seu nome</span>}
                
                <label 
                    htmlFor="inputEmail" 
                    className="w-4/5 mt-4 font-serif text-lg text-left text-white "
                >
                seu email
                </label>
                <input
                    id="inputEmail"
                    type="email"
                    className="w-4/5 border-2 border-transparent rounded-lg shadow-sm focus:border-yellow-400 hover:border-yellow-400 text-zinc-500 shadow-zinc-500"
                    placeholder="moranguinho23@exemplo.com"
                    {...register("email", {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  required: true })} 
                />
                
                {errors.email && <span className="w-4/5 font-serif text-left text-white ">esse email está meio estranho...</span>}

                <button 
                    disabled={isSend === true} 
                    className="w-4/5 h-10 mt-4 font-serif text-lg text-white border-2 border-solid rounded-lg shadow-sm drop-shadow-sm shadow-zinc-400 disabled:opacity-40 sm:w-48 hover:bg-yellow-400" 
                    type="submit"
                >
                {isSend ? '...' : 'enviar'}
                </button>
                <span className='text-white'>{isSend ? 'aguarde...' : ''}</span>
                
                

                <button  
                    onClick={() => document.location.href = "#secondScreen"} 
                    type="button" 
                    className="mt-4 md:hidden opacity-40"
                >
                <IoIosArrowDown size={60}/>
                </button>
            </form>
       </div>
    )
}