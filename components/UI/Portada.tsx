import Image from 'next/image';
import React, { FC } from 'react'

import styled from "styled-components";

const ContainerImage = styled.div`
    position: relative;
    height: ${({height}: { height: string }) => height };
    width: 100%;
    filter: brightness(85%);
`

interface Props {
    height: string; // En Pixeles
    media: string;
    type: "image" | "video";
    description?: string;
}

export const Portada:FC<Props> = ({ height, media, description, type }) => {

    if ( type === "video" ) {
        return (
            <ContainerImage height={ height }>
                <video
                    src={ media }
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    autoPlay
                    muted
                    loop
                ></video>
            </ContainerImage>
        )
    }

    return (
        <ContainerImage height={ height }>
            <Image 
                src={ media }
                alt={ description ? description : "Imagen" }
                layout="fill"
                objectFit='cover'
            />
        </ContainerImage>
    )
}
