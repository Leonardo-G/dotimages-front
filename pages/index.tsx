import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LayoutPage } from '../components/layout/LayoutPage'
import { Portada } from '../components/UI/Portada'
import { Images } from '../components/media/Images'
import { fetchApi } from '../utils/fetchApi'
import { PosCenter, PosInitial, BarraBusqueda, InputSearch } from '../styled/pages/home';
import { InterfaceImages } from '../interface/images'

interface Props {
    data: InterfaceImages;
}

const HomePage: NextPage<Props> = ({ data }) => {

    const [search, setSearch] = useState("");

    return (
        <LayoutPage title='DOTimages'>
            <PosInitial>
                <Portada 
                    height='630px'
                    image='/portada.png'
                    description='Imagen Portada'
                />
                <PosCenter>
                    <h1>Imagenes para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <Link href={`/images/q=${ search }`} passHref>
                            <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                        </Link>
                        <InputSearch 
                            type="text"
                            placeholder="Buscar... Ejemplo: Pelota"
                            value={ search }
                            onChange={ ( e ) => setSearch( e.target.value ) }
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Images media={ data.hits }/>
        </LayoutPage>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const data = await fetchApi("order=popular&per_page=60&safesearch=true");

    return {
        props: {
            data
        }
    }
}

export default HomePage