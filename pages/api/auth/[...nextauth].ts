
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'



const options: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
  providers: [
    CredentialsProvider({
        type: 'credentials',
        credentials: {
            email: {label: "email", type: "email", placeholder: "seu email"},
            password: {label: "password", type: "password"},
        },
        authorize(credentials, req) { 
        const {email, password} = credentials as {
            email: string, password: string
        }
        //if(email !== "hello@gmail.com" || process.env.LOGIN_ADMIN || password !== "1234" || process.env.PASSWORD_ADMIN) {
         //   throw new Error('invalid credentials')
        //}
        
        return {id: "1222", name: "jhon", email: "jose-gui@gmaul.com"}
        },
    })
    
],
pages: {
    signIn: '/components/auth/signin',
    signOut: "/auth/signout",
    error: "auth/error"
}
  
}

export default NextAuth(options)