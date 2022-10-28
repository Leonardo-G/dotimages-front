import React, { useState } from 'react'
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { LayoutPage } from '../../components/layout/LayoutPage';
import { fetchApi } from '../../utils/fetchApi';
import { InterfaceImages } from '../../interface/images';
import { Images } from '../../components/media/Images';
import { BarraBusqueda, InputSearch, PosCenter, PosInitial } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';

interface Props{
    data: InterfaceImages;
    search: string;
}

const ImagesSearch: NextPage<Props> = ({ data, search }) => {

    const [inputSearch, setInputSearch] = useState(search);

    return (
        <LayoutPage title='DOTImages'>
            <PosInitial>
                <Portada
                    height='630px'
                    media='/portada.png'
                    description='Imagen Portada'
                    type="image"
                />
                <PosCenter>
                    <h1>Imagenes para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <Link href={`/images/q=${ inputSearch }`} passHref>
                            <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                        </Link>
                        <InputSearch 
                            type="text"
                            placeholder="Buscar... Ejemplo: Pelota"
                            value={ inputSearch }
                            onChange={ ( e ) => setInputSearch( e.target.value ) }
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Images 
                media={ data.hits }
                type="image"    
            />
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { search } = params as { search: string[] };

    const data = await fetchApi(`${search[0]}&per_page=60`);
    const qSearch = search[0].split("q=").join("").split("&");

    return {
        props: {
            data,
            search: qSearch
        }
    }
}

export default ImagesSearch