import React from "react"
import MarqueeHorizontal from './components/Marquee'

import Form from "./components/Form"

export default function Home() {
 
  return (
    <main className="block w-full h-screen sm:block md:flex ">
      <Form />

      <div id="secondScreen" className="flex w-screen text-center py-4 bg-black">
        <MarqueeHorizontal />
      </div>
      
    </main>
  )
}