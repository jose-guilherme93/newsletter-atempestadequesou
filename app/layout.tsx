import type { Metadata } from 'next/types'
import './globals.css'
import {NextAuthSessionProvider} from './providers/sessionProvider'

export const metadata: Metadata = {
  title: 'a tempestade que sou',
  description: 'Página de captura de email para eventuais atualizações do instagram @atempestadequesou',
  keywords: ["newsletter", "landing page"],
  authors: {name: "@atempestadequesou"}
  
}


export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-br">
          <NextAuthSessionProvider>
            <body>
              {children}
            </body>
          </NextAuthSessionProvider>
      </html>
    )
  }