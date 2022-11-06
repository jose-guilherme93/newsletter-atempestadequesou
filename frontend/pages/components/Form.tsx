import Image from "next/image"
import { useForm } from "react-hook-form"

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => console.log(data)

    return (
       <div className="h-full w-full">
        <Image
        priority
        src="/logo.jpg" 
        width={120} 
        height={120} 
        alt="logo"
        className="relative top-36 m-auto rounded-full"/>
         <form className=" w-full h-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
            
            <label className="flex w-full flex-col justify-center items-center" htmlFor="inputName">
                <span className="text-left w-96 text-white font-mono font-bold mb-2">seu nome mais bonito</span>
                <input
                id="inputName"
                className=" w-96 h-12 focus border-2 border-transparent  focus:border-yellow-400 hover:border-yellow-400 rounded-3xl mb-4 font-bold text-zinc-500" 
                type="text"
                placeholder="seu nome"
                {...register("example", { required: true })}  />
                {errors.exampleRequired && <span className="text-white font-mono font-bold">ei, não esqueça seu nome</span>}
            </label>

            <label htmlFor="inputEmail" className="flex flex-col w-full justify-center items-center">
                <span className="text-left w-96 text-white font-mono font-bold mb-2 ">digite seu email</span>
                <input
                id="inputEmail"
                type="email"
                className="w-96 h-12 border-transparent  focus:border-yellow-400 border-2 hover:border-yellow-400 rounded-3xl font-bold text-zinc-500"
                placeholder="moranguinho23@exemplo.com"
                {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span className="text-white font-mono font-bold">esse email está meio estranho...</span>}
            </label>
                

            <button className="  text-white border-solid border-2  rounded-3xl w-48 mt-4 hover:bg-yellow-300  hover:border-yellow-300" type="submit">Enviar </button>
        </form>
       </div>
    )
}