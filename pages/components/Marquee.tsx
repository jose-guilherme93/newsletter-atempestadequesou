import Marquee from "react-fast-marquee";

export default function MarqueeHorizontal() {
    const message = 'exemplo de mensagem'
    return (
        <div className="w-full">
            <Marquee gradient={false}  speed={10}>
                <div className="rounded bg-zinc-50">
                    <p className="p-2 text-2xl "> "{message}"  </p>
                </div>
            </Marquee>
        </div>
    )
}