import React, { FC, RefObject } from 'react'

interface Props {
    type: "image" | "videos" | "gifs" | "sticker";
    src: string;
    description: string;
    ref: RefObject<HTMLVideoElement> | null;
}

export const Media: FC<Props> = ({ type, src, description, ref }) => {

    if ( type === "image" ){
        return (
            <img
                style={{
                    width: "380px",
                }}
                src={ src }
                alt={ description }
            />
        )
    }

    if ( type === "videos" ){
        return (
            <video
                ref={ ref }
                style={{
                    width: "380px",
                    objectFit: "contain"
                }}
                src={ src }
                muted
                loop
            ></video>
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
