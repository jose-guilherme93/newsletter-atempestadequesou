import { useEffect, useState } from "react"

import Link from "next/link"

import axios from 'axios'

import Marquee from "react-fast-marquee"

import Loading from "./Loading"

interface PostsProps {
    caption:   string
    media_url: string
    permalink: string
}

export default function MarqueeHorizontal() {
    const [posts, setPosts] = useState<PostsProps[]> ([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        async function getAltImageInstagram() {
            
            const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
            const fields = 'media_url, caption, picture, permalink'
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&caption={caption} `
            
            const {data} = await axios.get(url)
            setPosts(data.data)
        
        }
        getAltImageInstagram()

        .finally(() => {
            setIsLoading(false)
        })

    }, [])
    

    return (
        <>  
            {
            isLoading ?

            <div className="w-full flex flex-col items-center justify-center  h-full">
                <Loading /> 
            </div>

            :
                (
                    <div className="h-screen overflow-hidden "> 
                        {posts.map((posts, index) => (
                            <Marquee key={index} gradient={false} speed={Math.random() + 19}>
                                    <Link
                                        className="h-auto w-96 mb-10 text-center p-3  bg-transparent bg-opacity-60 shadow-sm shadow-yellow-100 drop-shadow-md bg-white list-none rounded-lg font-semibold items-center text-blue-600  overflow-ellipsis overflow-hidden whitespace-nowrap " 
                                        target='_blank'
                                        href={posts.permalink}
                                        >
                                        &quot;{posts.caption}&quot;
                                    </Link>
                            </Marquee>
                        ))}
                    </div>
                )
            } 
        </>
    )
}

