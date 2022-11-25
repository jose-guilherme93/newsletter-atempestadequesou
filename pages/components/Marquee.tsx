import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios'



import Marquee from "react-fast-marquee";

interface PostsProps {
    caption: string
    media_url: string
}

export default function MarqueeHorizontal() {
    const [posts, setPosts] = useState<PostsProps[]> ([])

    useEffect(() => {

        
        async function getAltImageInstagram() {
            
            const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
            const fields = 'media_url, media_type, caption, picture'
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&caption={caption} `
            
            const {data} = await axios.get(url)
            data.ok ?  setPosts(data.data) :  console.log('erro na requisição')
            
        }
        getAltImageInstagram()

    }, [])
    

    return (
        <>  
            {posts.map((posts, index) => (
               <Marquee key={index} gradient={false} speed={Math.random() + 13}>
                    <Link
                        className="h-10 w-96 text-center mb-4 p-2  bg-transparent bg-opacity-60 shadow-sm shadow-yellow-100 drop-shadow-md bg-white list-none rounded-lg font-semibold items-center text-blue-600 whitespace-nowrap overflow-ellipsis overflow-hidden" 
                        target='_blank' 
                        href={posts.media_url}
                        >
                        &quot;{posts.caption}&quot;
                    </Link>
                </Marquee>
            ))}
        </>
    )
}