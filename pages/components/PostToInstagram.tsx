import React from 'react'

export default function PostToInstagram() {
    return(
        <div className='w-full h-screen flex gap-3 items-center justify-center flex-col'>
            <textarea className='w-11/12 m-1 rounded-xl overflow-visible h-auto' name="nova postagem" id="post" cols={30} maxLength={2000} rows={15}></textarea>
            <button className='w-32 p-2 text-zinc-700 rounded-md border border-solid bg-yellow-300'>enviar post</button>
        </div>
    )
}