import React, { FC } from 'react';

import styled from 'styled-components';

import { ImageSize } from './ImageSize';
import { Container } from '../../styled/globals';
import { InterfaceImage } from '../../interface/images';
import { IVideo } from '../../interface/videos';
import { DataEntity, IGifs, IGifsShort } from '../../interface/gifs';

const Section = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

interface Props {
    media: InterfaceImage[] | any[] | IGifsShort[];
    type: "image" | "videos" | "gifs";
}

export const Images: FC<Props> = ({ media, type }) => {

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
                <div>
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
