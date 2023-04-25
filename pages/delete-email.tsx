export default function DeleteEmail() {

    const handleDeleteEmail = () => {
        alert('email apagado da base de dados. uma pena.')
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-yellow-300 to-blue-600 ">
            <p className="font-serif text-zinc-600">é uma pena ver você partir.</p>
            <h1 className="font-serif text-3xl text-white">descadastrar email</h1>

            <label 
                htmlFor="inputName" 
                className="pb-3 font-serif text-white"
                >
                digite seu email
                </label>
            <input 
                id="inputName"
                type="email" 
                className="w-4/5 h-10 mx-4 border-2 border-transparent rounded-lg shadow-sm focus md:w-80 focus:border-yellow-400 hover:border-yellow-400 text-zinc-500 shadow-zinc-500" 
            />

            <button 
                onClick={handleDeleteEmail} 
                type="submit" 
                className="w-48 h-10 mt-4 font-serif text-lg text-white border-2 border-solid rounded-lg shadow-sm drop-shadow-sm shadow-zinc-400 disabled:opacity-40 hover:bg-yellow-400"
                >
                enviar
                </button>
            
        </div>
    )
}