import React from "react"
import MarqueeHorizontal from './components/Marquee'


import Form from "./components/Form"

export default function Home() {
 
  return (
    <main className=" w-full h-full sm:block md:flex bg-gradient-to-l from-yellow-300 to-blue-600 ">

      <Form />

      <div id="secondScreen" className=" w-screen h-screen mt-auto mb-auto justify-center ">
      <MarqueeHorizontal />
      
      </div>
      
    </main>
  )
}