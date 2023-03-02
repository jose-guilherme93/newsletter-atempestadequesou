import React, { useState } from 'react'
import axios from 'axios'

export default function PostToInstagram() {

    const [inputTextArea, setInputTextArea] = useState('')
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTextArea(event.target.value)
        axios.post("./api/graph/Post", inputTextArea)
    }
    
    const handlePost = () => {
        
        alert(inputTextArea)
    }

    
    return(
        <div className='w-full h-screen flex gap-3 items-center justify-center flex-col'>
            <textarea onChange={handleChange} className='w-11/12 m-1 rounded-xl overflow-visible h-auto' name="nova postagem" id="post" cols={30} maxLength={2000} rows={15}></textarea>
            <button onClick={handlePost} className='w-32 p-2 text-zinc-700 rounded-md border border-solid bg-yellow-400 font-sans'>enviar post</button>
        </div>
    )
}