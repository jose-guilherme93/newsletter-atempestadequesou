import Image from "next/image"


export default function AboutMe() {
    return (
        <section className="items-center sm:h-screen form-control bg-gradient-to-l from-yellow-300 to-blue-600">
            <section className="h-screen p-4 font-bold md:w-1/2 md:h-1/2 bg-opacity-60">

                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">escreve um textinho aí</div>
                </div>
                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">eu vou criar uma página <q>sobre mim</q></div>
                </div>
                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">no teu site</div>
                </div>
                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">vai ter um botão que vai levar a pessoa pra ler essa página</div>
                </div>
                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">pode ser algo pequeno por enquanto</div>
                </div>
                <div className="chat chat-end">
                    <div className="text-white bg-yellow-500 chat-bubble">pode ser um poema teu, aí eu coloco em formato de estrofes</div>
                </div>
                
        

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <Image
                            priority
                            src="/logo.jpg" 
                            width={100}
                            height={100}
                            alt="logo"
                            className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="text-white bg-secondary chat-bubble">eu estou tentando me aceitar mais e digo isso em relação a como eu sinto. eu achava que era ruim o fato de que sou sensível, mas não é</div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <Image
                            priority
                            src="/logo.jpg" 
                            width={100}
                            height={100}
                            alt="logo"
                            className="rounded-lg shadow-2xl "
                            />
                        </div>
                    </div>
                    <div className="text-white bg-secondary chat-bubble">porque se eu amo poesia, tem um motivo pra isso. justamente pq eu sinto muito e a poesia sãos meus pés, minhas mãos e minha boca, minha voz</div>
                </div>
            </section>
        </section>
    )
}