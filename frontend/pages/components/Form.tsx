
import { useForm } from "react-hook-form"

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => console.log(data)

    return (
        <form className="w-screen h-screen flex flex-col items-center justify-center bg-blue-500 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input 
            className=" p-4 m-4 w-[400px] " 
            defaultValue="test"
            placeholder="Seu nome"
            {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input 
            className="border-black p-4 m-4 w-2/5 "
            placeholder="Seu Email"
            {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="border-black p-4 m-4 w-2/5 " type="submit" />
        </form>
    )
}