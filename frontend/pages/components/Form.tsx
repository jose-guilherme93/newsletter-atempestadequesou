import Image from "next/image"
import { useState } from "react"

import { useForm } from "react-hook-form"
import {  IoIosArrowDown } from 'react-icons/io'

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isSend, setIsSend] = useState(false)
    const onSubmit = (data: any) => {
        setIsSend(true)
        fetch('./api/mail', {
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
       <div className="h-full w-full bg-blue-800">
            <form className=" bg-blue w-full h-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                <Image
                priority
                src="/logo.jpg" 
                width={80}
                height={80}
                alt="logo"
                className="mb-8 rounded-full"
                />
                
                <h1 className="p-3 rounded-lg max-w-[376px] text-center text-3xl opacity-80 bg-zinc-100 shadow-md shadow-blue-400 text-zinc-700 font-mono font-bold">meus pensamentos, minhas histórias, minhas sensações. na sua caixa de email. </h1> <br />

                <label className="text-left w-4/5 text-white text-xl font-mono font-bold mb-2" htmlFor="inputName"> seu nome mais bonito</label>
                <input
                id="inputName"
                className=" w-4/5  focus border-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 rounded-3xl mx-4 mb-4 font-bold text-zinc-500" 
                type="text"
                placeholder="seu nome"
                {...register("nome", { required: true })}  />
                {errors.exampleRequired && <span className="text-white font-mono font-bold">ei, não esqueça seu nome</span>}
                
                <label htmlFor="inputEmail" className="text-left w-4/5 text-white text-xl font-mono font-bold mb-2">seu email</label>
                <input
                id="inputEmail"
                type="email"
                
                className="w-4/5 border-transparent  focus:border-yellow-400 border-2 hover:border-yellow-400 rounded-3xl font-bold text-zinc-500"
                placeholder="moranguinho23@exemplo.com"
                {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span className="text-white font-mono font-bold">esse email está meio estranho...</span>}

                <button className="font-bold font-mono text-white text-lg border-solid border-2 rounded-3xl h-10 w-4/5 sm:w-48 mt-4 hover:bg-yellow-400  " type="submit">{isSend ? 'enviado!' : 'enviar'}</button>
            
            <button onClick={() => document.location.href = "#secondScreen"} type="button" className=" md:hidden  opacity-40"> <IoIosArrowDown size={60}/></button>
            </form>
       </div>
    )
}