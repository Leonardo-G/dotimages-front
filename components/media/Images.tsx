import React, { FC, useEffect, useState } from 'react'
import { fetchApi } from '../../utils/fetchApi'
import { InterfaceImages } from '../../interface/images';
import { ImageSize } from './ImageSize';
import styled from 'styled-components';

const Section = styled.section`
`

export const Images: FC = () => {

    const [medias, setMedias] = useState({} as InterfaceImages)

    const getMedias = async ( ) => {
        const mediasAPI = await fetchApi("order=popular");
        setMedias( mediasAPI )
        console.log(mediasAPI)
    }

    useEffect(() => {

        getMedias()
            .catch( err => console.log(err))
    }, [])

    return (
        <Section>
            {
                medias.hits?.length > 0 &&
                
                medias.hits.map( i => (
                    <ImageSize src={ i.webformatURL } description={ i.tags } key={ i.id }/>
                ))
            }
        </Section>
    )
}
