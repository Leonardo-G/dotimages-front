import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { LayoutPage } from '../../components/layout/LayoutPage';
import { ImageSize } from '../../components/media/ImageSize';

import { IFavorites } from '../../interface/favorites';
import { fetchApiBackend } from '../../utils/fetchApi';

import { Container } from '../../styled/globals';
import styled from 'styled-components';

interface Props {
    media: IFavorites[];

}

const GridMedia = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 250px, 1fr ) );
    column-gap: 10px;
`

const FavoritesPage: NextPage<Props> = ({ media }) => {
    
    return (
        <LayoutPage title='DOTImages | Favoritos'>
            <Container>
                <h2 style={{ margin: "30px 0px"}}>Favoritos</h2>
                <GridMedia>
                    {
                        media &&
                        media.map( m => (
                            <ImageSize 
                                id={ `${m.id}` }
                                src={ m.urlImage }
                                type={ m.type }
                                description={ "TITULO" }
                                key={ m.id }
                                widthAuto
                            />
                        ))
                    }
                </GridMedia>
            </Container>
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = req.cookies.user;
    const data = await fetchApiBackend("GET", "favorite/", {}, token) as IFavorites[];
    const media = data.map( d => ({
        id: d.favoriteId,
        type: d.type,
        urlImage: d.urlImage
    }))

    return {
        props: {
            media: media
        }
    }
}

export default FavoritesPage