import React, { FormEvent } from 'react'

import { signIn } from 'next-auth/react'


export default  function Auth() {

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
         await signIn('credentials', { redirect: true,
            email: "hello@gmail.com", password: "1234"
        
        })
    }
    return (
        <button onClick={handleSubmit}>logado</button>
    )
}

