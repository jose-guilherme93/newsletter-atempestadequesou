import React from "react"
import MarqueeHorizontal from './components/Marquee'
import Marquee from "react-fast-marquee"

import Form from "./components/Form"

export default function Home() {
 
  return (
    <main className="block w-full h-screen sm:block md:flex ">
      <Form />

      <div id="secondScreen" className="w-screen h-screen mt-auto mb-auto justify-center bg-yellow-300">
      <MarqueeHorizontal />
      
      </div>
      
    </main>
  )
}