import React from "react"
import MarqueeHorizontal from './components/Marquee'


import Form from "./components/Form"
import Head from "next/head"

export default function Home() {
 
  return (
    <>
      <Head>
        <title>A tempestade que sou</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Página de captura de email para eventuais atualizações do instagram @atempestadequesou "/>
        <meta name="keywords" content="newsletter, landing page"/>
        <meta name="author" content="A tempestade que sou"/>
      </Head>

    <main className=" w-full h-full sm:block md:flex bg-gradient-to-l from-yellow-300 to-blue-600 ">

      <Form />

      <div id="secondScreen" className=" w-screen h-screen mt-auto mb-auto justify-center ">
      <MarqueeHorizontal />
      
      </div>
      
    </main>
    </>
  )
}