import React, {useState} from 'react'

import Image from "next/image"

import { SubmitHandler, useForm } from "react-hook-form"

import {  IoIosArrowDown } from 'react-icons/io'


interface UserFormData {
    nome: string
    email: string
    handleSubmit: () => {}
}

export default function Form() {


    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>()

    const [isSend, setIsSend] = useState(false)
    

    const onSubmit:  SubmitHandler<UserFormData> = async (data) => {
        setIsSend(true)
        
        fetch('./api/server/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email
                
            })
        } )
        
            
        
        setTimeout(() => {
            setIsSend(false)
            alert('obrigada por se cadastrar!')
        }, 2000)
        
    }

    
    
    return (
       <div className="w-screen h-screen mb-auto mt-auto">
            <form 
                className=" w-full h-full bg-blue flex flex-col items-center justify-center" 
                onSubmit={handleSubmit(onSubmit)}
            >

                <Image
                    priority
                    src="/logo.jpg" 
                    width={100}
                    height={100}
                    alt="logo"
                    className=" mb-4 rounded-full"
                />
 
                <h1 
                    className="p-3 rounded-lg w-4/5  text-center text-2xl bg-zinc-50 border-2 hover:border-yellow-400 shadow-sm shadow-zinc-500 text-zinc-700 font-serif"
                >
                meus pensamentos, minhas histórias, minhas sensações. na sua caixa de email.</h1>
                <br />

                <label 
                    className="text-left w-4/5 text-white text-lg font-serif" 
                    htmlFor="inputName"
                > 
                seu nome mais bonito
                </label>
                
                <input
                    id="inputName"
                    className=" w-4/5 focus border-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 rounded-lg mx-4 text-zinc-500 shadow-sm  shadow-zinc-500" 
                    type="text"
                    placeholder="seu nome"
                    {...register("nome", { required: true })}
                />
                    {errors.nome && <span className="text-left font-serif w-4/5 text-white">ei, não esqueça seu nome</span>}
                
                <label 
                    htmlFor="inputEmail" 
                    className="text-left w-4/5 text-white text-lg font-serif mt-4 "
                >
                seu email
                </label>
                <input
                    id="inputEmail"
                    type="email"
                    className="w-4/5 border-transparent  focus:border-yellow-400 border-2 hover:border-yellow-400 rounded-lg text-zinc-500 shadow-sm shadow-zinc-500"
                    placeholder="moranguinho23@exemplo.com"
                    {...register("email", {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  required: true })} 
                />
                
                {errors.email && <span className="text-left w-4/5 text-white font-serif ">esse email está meio estranho...</span>}

                <button 
                    disabled={isSend} 
                    className="shadow-sm drop-shadow-sm shadow-zinc-400 disabled:opacity-40 font-serif text-white text-lg border-solid border-2 rounded-lg h-10 w-4/5 sm:w-48 mt-4 hover:bg-yellow-400" 
                    type="submit"
                >
                {isSend ? 'enviando...' : 'enviar'}
                </button>
                
                

                <button  
                    onClick={() => document.location.href = "#secondScreen"} 
                    type="button" 
                    className="md:hidden mt-4 opacity-40"
                >
                <IoIosArrowDown size={60}/>
                </button>
            </form>
       </div>
    )
}