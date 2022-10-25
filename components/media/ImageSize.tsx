import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
    src: string;
    description: string;
}

const ImageContainer = styled.div`
    position: relative;
    width: 290px;
    height: 100%;
`

export const ImageSize: FC<Props> = ({ src, description }) => {
    return (
            <ImageContainer>
                <img
                    style={{
                        width: "290px"
                    }}
                    src={ src }
                    alt={ description }
                />
            </ImageContainer>
    )
}
