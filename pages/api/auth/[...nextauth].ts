
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
            
        },
        authorize(credentials, req) { 
        const {email, password} = credentials as {
            email: string, password: string
        }
        
        
        if(email !== process.env.LOGIN_POST || password !== process.env.PASSWORD_POST) {

            throw new Error("invalid credentials")
            
        }
        
        return {id: "1222", name: 'daysi', email: "email"}
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