import React, { FC, useEffect, useState } from 'react'
import { fetchApi } from '../../utils/fetchApi'
import { InterfaceImages, Image } from '../../interface/images';
import { ImageSize } from './ImageSize';
import styled from 'styled-components';
import { Container } from '../../styled/globals';

const Section = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

export const Images: FC = () => {

    const [medias, setMedias] = useState([] as Image[]);
    const [medias2, setMedias2] = useState([] as Image[]);
    const [medias3, setMedias3] = useState([] as Image[]);

    const getMedias = async ( ) => {
        const mediasAPI = await fetchApi("order=popular&per_page=60&safesearch=true");

        setMedias( mediasAPI.hits.filter( (m, idx )=> idx >= 0 && idx < 20 ) );
        setMedias2( mediasAPI.hits.filter( (m, idx )=> idx >= 20 && idx < 40 ) );
        setMedias3( mediasAPI.hits.filter( (m, idx )=> idx >= 40 && idx < 60 ) );
    }

    useEffect(() => {

        getMedias()
            .catch( err => console.log(err))
    }, [])

    return (
        <Container className='container'>
            <Section>
                <div>
                    {
                        medias.length > 0 &&
                        
                        medias.map( i => (
                            <ImageSize 
                                src={ i.webformatURL } 
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                            />
                        ))
                    }
                </div>
                <div>
                    {
                        medias2.length > 0 &&
                        
                        medias2.map( i => (
                            <ImageSize 
                                src={ i.webformatURL } 
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                            />
                        ))
                    }
                </div>
                <div>
                    {
                        medias3.length > 0 &&
                        
                        medias3.map( i => (
                            <ImageSize 
                                src={ i.webformatURL } 
                                description={ i.tags } 
                                key={ i.id } 
                                tags={ i.tags }
                                id={ i.id }
                            />
                        ))
                    }
                </div>
            </Section>
        </Container>
    )
}
