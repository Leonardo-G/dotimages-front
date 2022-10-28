import Link from 'next/link'
import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LayoutPage } from '../../components/layout/LayoutPage'
import { Portada } from '../../components/UI/Portada'
import { BarraBusqueda, InputSearch, PosCenter, PosInitial } from '../../styled/pages/home';
import { fetchApi } from '../../utils/fetchApi'
import { Images } from '../../components/media/Images'
import { IVideos } from '../../interface/videos'

interface Props {
    data: IVideos; 
}

const VideosPage: NextPage<Props> = ({ data }) => {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <LayoutPage title='DOTImages | Videos'>
            <PosInitial>
                <Portada 
                    height='630px'
                    media='/video/Rascacielos - 91744.mp4'
                    type="video"
                    description='Imagen Portada'
                />
                <PosCenter>
                    <h1>Videos para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <Link href={`/images/q=${ inputSearch }`} passHref>
                            <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                        </Link>
                        <InputSearch
                            type="text"
                            placeholder="Buscar... Ejemplo: Capitán america"
                            value={ inputSearch }
                            onChange={ ( e ) => setInputSearch( e.target.value ) }
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Images 
                media={ data.hits }
                type="videos"
            />
        </LayoutPage>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const data = await fetchApi("order=popular&per_page=60", "videos");
    
    return {
        props: {
            data
        }
    }
}

export default VideosPage