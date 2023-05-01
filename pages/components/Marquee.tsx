import { useEffect, useState } from "react"
import Link from "next/link"
import axios from 'axios'
import Marquee from "react-fast-marquee"
import Loading from "./Loading"
import { PostsProps } from "../api/DTO"

export default function MarqueeHorizontal() {
    const [posts, setPosts] = useState<PostsProps[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        async function getAltImageInstagram() {
            try {
                const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
                const fields = 'media_url, caption, picture, permalink'
                const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&caption={caption}`
                const response = await axios.get(url)
                if (response && response.data && response.data.data) {
                    setPosts(response.data.data)
                } else {
                    setError('Invalid data received from API')
                }
            } catch (error) {
                setError('Error fetching data from')
            } finally {
                setIsLoading(false)
            }
        }
        getAltImageInstagram()
    }, [])

    if (error) {
        return (
            <div className="z-0 flex flex-col items-center justify-center w-full h-full">
                <p>Error: {error}</p>
            </div>
        )
    }

    return (
        <>
            {isLoading ? (
                <div className="z-0 flex flex-col items-center justify-center w-full h-full">
                    <Loading />
                </div>
            ) : (
                <div className="h-screen overflow-hidden ">
                    {posts.map((post, index) => (
                        <Marquee
                            key={index}
                            gradient={false}
                            speed={Math.random() + 21.3534}
                        >
                            <Link
                                className="items-center h-auto p-3 mb-10 overflow-hidden font-semibold text-center text-blue-600 list-none bg-transparent bg-white rounded-lg shadow-sm w-96 bg-opacity-60 shadow-yellow-100 drop-shadow-md overflow-ellipsis whitespace-nowrap "
                                target="_blank"
                                href={post.permalink}
                            >
                                {post.caption}
                            </Link>
                        </Marquee>
                    ))}
                </div>
            )}
        </>
    )
}
