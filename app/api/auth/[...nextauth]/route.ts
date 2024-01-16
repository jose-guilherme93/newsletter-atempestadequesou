
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextRequest, NextResponse } from 'next/server'

const options: NextAuthOptions = {
    session: {
        strategy: "jwt",
        
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
    signIn: '/auth/post-to-mail',
    signOut: "/auth/signout",
    error: "auth/error",
}

}

const handler = NextAuth(options)
export {handler as GET, handler as POST}

