"use client"
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface NextAuthSessionProviderPros {
    children: ReactNode
}

export  function NextAuthSessionProvider({children}: NextAuthSessionProviderPros) {
    return (

        <SessionProvider>
            {children}
        </SessionProvider>
    )

}