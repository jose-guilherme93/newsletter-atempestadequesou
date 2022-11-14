import React, {useState} from 'react'

import Image from "next/image"

import { useForm } from "react-hook-form"

import {  IoIosArrowDown } from 'react-icons/io'

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isSend, setIsSend] = useState(false)
    const onSubmit = (data: any) => {
        setIsSend(true)
        fetch('./api/server/automatic-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email
                
            })
        } )

        setTimeout(()=>{setIsSend(false)}, (2000))
        
    }
    
    return (
       <div className="h-full w-full bg-blue-700">
            <form className=" bg-blue w-full h-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                <Image
                priority
                src="/logo.jpg" 
                width={100}
                height={100}
                alt="logo"
                className="mb-8 rounded-full"
                />
                
                <h1 className="p-3 rounded-lg max-w-full ml-4 mr-4 text-center text-2xl bg-zinc-200 shadow-sm shadow-zinc-700 text-zinc-700 font-mono">meus pensamentos, minhas histórias, minhas sensações. na sua caixa de email. </h1> <br />

                <label className="text-left w-4/5 text-white text-lg font-mono mb-2" htmlFor="inputName"> seu nome mais bonito</label>
                <input
                id="inputName"
                className=" w-4/5  focus border-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 rounded-lg mx-4 mb-4 text-zinc-500 shadow-sm  shadow-zinc-700" 
                type="text"
                placeholder="seu nome"
                {...register("nome", { required: true })}  />
                {errors.exampleRequired && <span className="text-white font-mono">ei, não esqueça seu nome</span>}
                
                <label htmlFor="inputEmail" className="text-left w-4/5 text-white text-lg font-mono mb-2">seu email</label>
                <input
                id="inputEmail"
                type="email"
                className="w-4/5 border-transparent  focus:border-yellow-400 border-2 hover:border-yellow-400 rounded-lg text-zinc-500 shadow-sm shadow-zinc-700"
                placeholder="moranguinho23@exemplo.com"
                {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span className="text-white font-mono">esse email está meio estranho...</span>}

                <button className=" font-mono text-white text-lg border-solid border-2 rounded-lg h-10 w-4/5 sm:w-48 mt-4 hover:bg-yellow-400  " type="submit">{isSend ? 'enviado!' : 'enviar'}</button>
            
                <button disabled={isSend} onClick={() => document.location.href = "#secondScreen"} type="button" className=" md:hidden  opacity-40"> <IoIosArrowDown size={60}/></button>
            </form>
       </div>
    )
}