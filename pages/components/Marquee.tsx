import Link from "next/link";

import Marquee from "react-fast-marquee";

export default function MarqueeHorizontal() {
    interface PostsProps {
        title: string
        link: string
    }
    const posts: PostsProps[] = [
        {
            title: 'O meu infinito é também uma tentativa',
            link: 'https://www.instagram.com/p/Ck_dvIGur7A/',
        },
        {
            title: 'A ancestralidade de pessoas pretas é uma conexão tão forte, que só sabe quem sente',
            link: 'https://www.instagram.com/p/Ck6Rwwfuf9S/',
        },
        {
            title: 'em todo universo',
            link: 'https://www.instagram.com/p/Ckw2mnouiw7/',
        },
        {
            title: 'sorrir pra não chorar',
            link: 'https://www.instagram.com/p/CkN-hK2urRk/',
        },
        {
            title: "you don't have to be sorry for leaving and growing up",
            link: 'https://www.instagram.com/p/CkE4JsNu1PN/',
        },
        {
            title: 'levanto minha voz com o tom de milhares que vieram antes de mim',
            link: 'https://www.instagram.com/p/CkE4JsNu1PN/'
        },
        {
            title: 'ponto de partida',
            link: 'https://www.instagram.com/p/CjQimF6OELo/'
        },
        {
            title: 'vai viver, D',
            link: 'https://www.instagram.com/p/CjB-gv4Opd5/',
        }
    ]

    return (
        <>  
            {posts.map((posts, index)=> (
               <Marquee key={index} gradient={false} speed={Math.random() + 7}>
                    <Link
                        className="h-auto w-fit text-center bg-transparent bg-opacity-60 shadow-sm shadow-yellow-100 drop-shadow-md bg-white list-none m-4 rounded-lg font-semibold p-3 text-blue-600" 
                        target='_blank' 
                        href={posts.link} 
                        key=''
                        >
                        &quot;{posts.title}&quot;
                    </Link>
                </Marquee>
            ))}
        </>
    )
}