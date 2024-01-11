import React, {useState} from 'react'
import {Balancer} from 'react-wrap-balancer'
import Image from "next/image"

import { SubmitHandler, useForm } from "react-hook-form"

import {  IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'


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
       <section className="flex justify-center w-screen h-full px-4 pt-20 text-white ">
            <form 
                className="items-center w-full h-full max-w-lg form-control" 
                onSubmit={handleSubmit(onSubmit)}
            >
                

                <div className="bg-opacity-50 shadow-md rounded-2xl hero bg-base-200">
                    <div className="flex-col text-center hero-content lg:flex-row-reverse">
                        
                        <Image
                        priority
                        src="/logo.jpg" 
                        width={100}
                        height={100}
                        alt="logo"
                        className="max-w-sm rounded-lg shadow-2xl"
                        />
                        
                      
                        <Balancer>
                        <h1 className="text-3xl font-bold text-left">oi, meu nome é daysi</h1>

                            <p className="py-6 text-xl text-left">meus textos podem ser lidos no instagram <span><Link href={"https://instagram.com/atempestadequesou"} className='underline link-secondary'>
                                @atempestadequesou
                            </Link>
                            </span>
                            ,{' '}mas se quiser saber mais, <span><Link className= 'underline link-secondary' href={'/components/About'}>clique aqui</Link></span>.
                            </p>
                        </Balancer>
                        
                        
                    </div>
                </div>

                <section className='w-full'>

                
                    <section className='form-control'>
                        <label 
                            className="text-lg text-left text-white label" 
                            htmlFor="inputName"
                            > 
                        seu nome mais bonito
                        </label>
                        
                        <input
                            id="inputName"
                            className="max-w-lg font-bold shadow-sm text-zinc-500 input input-secondary" 
                            type="text"
                            placeholder="seu nome"
                            {...register("nome", { required: true })}
                            />
                            {errors.nome && <span className="text-left text-white">ei, não esqueça seu nome</span>}
                    
                    </section>


                    <section className='form-control'>
                        <label 
                            htmlFor="inputEmail" 
                            className="text-lg text-left text-white label"
                            >
                        seu email
                        </label>
                        <input
                            id="inputEmail"
                            type="email"
                            className="font-bold shadow-sm text-zinc-500 input input-primary input-bordered"
                            placeholder="moranguinho23@exemplo.com"
                            {...register("email", {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  required: true })} 
                            />
                            {errors.email && <span className="text-left text-white ">esse email está meio estranho...</span>}
                    </section>

                    <button 
                        disabled={isSend} 
                        className="w-1/2 mt-6 mb-4 btn btn-primary" 
                        type="submit"
                    >
                        <span className='text-lg text-base-100'>

                    {isSend ? '...' : 'enviar'}
                        </span>
                    </button>
                    <span className='text-white'>{isSend ? 'aguarde...' : ''}</span>
                    
                    {/* <button  
                        onClick={() => document.location.href = "#secondScreen"} 
                        type="button" 
                        className="mt-4 md:hidden opacity-40"
                    >
                        <IoIosArrowDown size={60}/>
                    </button> */}
                </section>
            </form>
       </section>
    )
}