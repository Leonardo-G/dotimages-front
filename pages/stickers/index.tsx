import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LayoutPage } from '../../components/layout/LayoutPage'
import { Portada } from '../../components/UI/Portada'
import { BarraBusqueda, InputSearch, PosCenter, PosInitial } from '../../styled/pages/home';
import { fetchApiGiphy } from '../../utils/fetchApi'
import { Images } from '../../components/media/Images'
import { IGifs, IGifsShort } from '../../interface/gifs';

interface Props {
    data: IGifsShort[]; 
}

const GifsPage: NextPage<Props> = ({ data }) => {

    const [inputSearch, setInputSearch] = useState("");
    const imageMemo = useMemo(() => (
        <Images 
            media={ data as IGifsShort[] }
            type="gifs"
        />
    ), [ data ])

    return (
        <LayoutPage title='DOTImages | Stickers'>
            <PosInitial>
                <Portada 
                    height='630px'
                    media='/portada.png'
                    type="image"
                    description='Stickers Portada'
                />
                <PosCenter>
                    <h1>Stickers para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <Link href={`/stickers/q=${ inputSearch }&page=1`} passHref>
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
            { imageMemo }
        </LayoutPage>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { data } = await fetchApiGiphy("", "trending", "stickers") as IGifs;

    const gifsData = data?.map( gif => {
        return {
            url: gif.images.downsized_small.mp4,
            id: gif.id,
        }
    })
    
    return {
        props: {
            data: gifsData
        }
    }
}

export default GifsPage