import Image from 'next/image';
import React, { FC } from 'react'

import styled from "styled-components";

const ContainerImage = styled.div`
    position: relative;
    height: ${({height}: { height: string }) => height };
    width: 100%;
`

interface Props {
    height: string; // En Pixeles
    image: string;
    description?: string
}

export const Portada:FC<Props> = ({ height, image, description }) => {
    return (
        <ContainerImage height={ height }>
            <Image 
                src={ image }
                alt={ description ? description : "Imagen" }
                layout="fill"
                objectFit='cover'
            />
        </ContainerImage>
    )
}
