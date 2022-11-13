import React, { FC } from 'react'

interface Props {
    type: "image" | "videos" | "gifs" | "stickers";
    src: string;
    description: string;
    widthAuto?: boolean;
}

export const Media: FC<Props> = ({ type, src, description, widthAuto }) => {
    
    if ( type === "image" ){
        return (
            <img
                style={{
                    width: "100%",
                }}
                src={ src }
                alt={ "Imagen expirada por la API Pixabay" }
            />
        )
    }

    return (
        <video
            style={{
                width: "100%",
            }}
            src={ src }
            loop 
            muted
            autoPlay={ true }
        ></video>
    )
}
