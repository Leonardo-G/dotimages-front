import React, { FC } from 'react';

import styled from 'styled-components';

import { ImageSize } from './ImageSize';
import { Container } from '../../styled/globals';
import { InterfaceImage } from '../../interface/images';
import { IGifsShort } from '../../interface/gifs';

const Section = styled.section`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
    width: 100%;
    
    @media ( max-width: 720px ){
        column-gap: 5px;
        .row-3{
            display: none;
        }
    }
`

interface Props {
    media: InterfaceImage[] | any[] | IGifsShort[];
    type: "image" | "videos" | "gifs" | "stickers";
    widthAuto?: boolean;
}

export const Images: FC<Props> = ({ media, type, widthAuto = false }) => {

    return (
        <Container className='container'>
            <Section>
                <div>
                    {                        
                        media.filter(( m, idx: number ) => idx >= 0 && idx < 10 ).map( i => (
                            <ImageSize 
                                src={ type === "image" ? i.webformatURL : type === "videos" ? i.videos.tiny.url : i.url }
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                                type={ type }
                                widthAuto={ widthAuto }
                            />
                        ))
                    }
                </div>
                <div>
                    {
                        media.filter(( m, idx) => idx >= 10 && idx < 20 ).map( i => (
                            <ImageSize 
                                src={ type === "image" ? i.webformatURL : type === "videos" ? i.videos.tiny.url : i.url }
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                                type={ type }
                            />
                        ))
                    }
                </div>
                <div className='row-3'>
                    {                        
                        media.filter(( m, idx) => idx >= 20 && idx < 30 ).map( i => (
                            <ImageSize 
                                src={ type === "image" ? i.webformatURL : type === "videos" ? i.videos.tiny.url : i.url}
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                                type={ type }
                            />
                        ))
                    }
                </div>
            </Section>
        </Container>
    )
}
