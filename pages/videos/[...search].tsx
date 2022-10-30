import React, { useMemo, useState } from 'react'

import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { fetchApi } from '../../utils/fetchApi';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { Images } from '../../components/media/Images';
import { PosInitial, PosCenter, BarraBusqueda, InputSearch } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import { InterfaceImages } from '../../interface/images';


interface Props{
    data: InterfaceImages;
    search: string;
}

const VideoBusquedaPage: NextPage<Props> = ({ data, search }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const imageMemo = useMemo(() => (
        <Images 
            media={ data.hits }
            type="videos"
        />
    ), [ data ])

    return (
        <LayoutPage title='DOTImages'>
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
                        <Link href={`/videos/q=${ inputSearch }`} passHref>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { search } = params as { search: string[] };
    const data = await fetchApi(`${search[0]}&per_page=30`, "videos");
    const qSearch = search[0].split("q=").join("").split("&");

    return {
        props: {
            data,
            search: qSearch
        }
    }
}

export default VideoBusquedaPage