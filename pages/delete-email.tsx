export default function Hello() {

    const handleDeleteEmail = () => {
        alert('email apagado da base de dados. uma pena.')
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-yellow-300 to-blue-600 ">
            <h1 className="text-3xl text-white">descadastrar email</h1>
            <label htmlFor="inputName" className="text-white pb-3">digite seu email</label>
            
                <input id="inputName"className="focus border-2 w-96 h-10 border-transparent focus:border-yellow-400 hover:border-yellow-400 rounded-lg mx-4 text-zinc-500 shadow-sm  shadow-zinc-500" type="email" />
                <button onClick={handleDeleteEmail} type="submit" className="mt-4 w-16 shadow-sm drop-shadow-sm shadow-zinc-400 disabled:opacity-40 font-serif text-white text-lg border-solid border-2 rounded-lg h-10 sm:w-48 hover:bg-yellow-400">enviar</button>
            
        </div>
    )
}