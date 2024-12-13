import React from 'react'

import './index.css'

interface BannerProps {
    src: string;
    alt?: string;
}

export const Banner = ({ src, alt }: BannerProps) => {
    return (
        <header className="banner">
            <img src={src} alt={alt}/>
        </header>
    )
}