import React, { FormEvent } from 'react'

import { signIn } from 'next-auth/react'

export default  function Auth() {

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        signIn()
    }
    return (
        <section className='w-screen h-screen flex items-center justify-center'>
            <button className='w-36 bg-yellow-300 p-2 text-black border rounded-md border-solid' onClick={handleSubmit}>login</button>
        </section>
    )
}
