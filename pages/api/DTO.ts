export interface PostsProps {
    caption:   string
    media_url: string
    permalink: string
}

export interface EmailProps {
    data: {
        data: [
            caption: {caption: string}, media_url?: string
        ]
    }
}