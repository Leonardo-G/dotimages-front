import React, { FC } from 'react'

interface Props {
    type: "image" | "videos" | "gifs" | "sticker";
    src: string;
    description: string;
    widthAuto?: boolean
}

export const Media: FC<Props> = ({ type, src, description, widthAuto }) => {
    
    if ( type === "image" ){
        return (
            <img
                style={{
                    width: widthAuto ? "100%" : "350px",
                }}
                src={ src }
                alt={ description }
            />
        )
    }

    return (
        <video
            style={{
                width: "100%",
                objectFit: "contain"
            }}
            src={ src }
            loop 
            muted
            autoPlay={ true }
        ></video>
    )
}
