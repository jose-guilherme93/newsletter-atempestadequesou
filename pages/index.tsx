import Form from "./components/Form"


export default function Home() {
 
  return (
    <main className="block w-full h-screen sm:block md:flex ">
      <Form />

      <div id="secondScreen" className="flex w-screen text-center py-4 bg-black h-screen font-bold font-mono text-white ">
        <p className="m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur adipisci quis quod, architecto quasi itaque vero dolore similique eius corporis, pariatur perferendis quas eaque cupiditate repellendus consequatur hic voluptatibus?</p>
      </div>
      
    </main>
  )
}