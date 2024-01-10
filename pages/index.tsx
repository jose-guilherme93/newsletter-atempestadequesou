import React from "react"
import Head from "next/head"
import Form from "./components/Form"

export default function Home() {
 
  return (
    <>
      <Head>
        <title>A tempestade que sou</title>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Página de captura de email para eventuais atualizações do instagram @atempestadequesou"/>
        <meta name="keywords" content="newsletter, landing page"/>
        <meta name="author" content="A tempestade que sou"/>
      </Head>

      <main className="w-screen h-screen bg-gradient-to-l from-yellow-300 to-blue-600 ">

        <Form />
  
        {/* <div 
          id="secondScreen" 
          className="items-center w-screen h-screen overflow-hidden">
            
            <MarqueeHorizontal />
        </div> */}
        
      </main>
    </>
  )
}

