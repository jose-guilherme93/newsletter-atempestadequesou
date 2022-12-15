export default function Hello() {

    const handleDeleteEmail = () => {
        alert('email apagado da base de dados. uma pena.')
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-yellow-300 to-blue-600 ">
            <p className="text-zinc-600 font-serif">é uma pena ver você partir.</p>
            <h1 className="text-3xl text-white font-serif">descadastrar email</h1>

            <label 
                htmlFor="inputName" 
                className="text-white pb-3 font-serif"
                >
                digite seu email
                </label>
            <input 
                id="inputName"
                type="email" 
                className="focus border-2 w-4/5 md:w-80 h-10 border-transparent focus:border-yellow-400 hover:border-yellow-400 rounded-lg mx-4 text-zinc-500 shadow-sm  shadow-zinc-500" 
            />

            <button 
                onClick={handleDeleteEmail} 
                type="submit" 
                className="mt-4 shadow-sm drop-shadow-sm shadow-zinc-400 disabled:opacity-40 font-serif text-white text-lg border-solid border-2 rounded-lg h-10 w-48 hover:bg-yellow-400"
                >
                enviar
                </button>
            
        </div>
    )
}