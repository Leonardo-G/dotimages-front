import React, { KeyboardEvent, useMemo, useState } from 'react'

import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { fetchApi } from '../../utils/fetchApi';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { Images } from '../../components/media/Images';
import { PosInitial, PosCenter, BarraBusqueda, InputSearch, DivBusqueda, Tags } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import { InterfaceImages } from '../../interface/images';
import { Container } from '../../styled/globals';
import { useRouter } from 'next/router';
import { Pagination } from '../../interface/gifs';
import { PaginationDiv } from '../../components/pagination/PaginationDiv';


interface Props{
    data: InterfaceImages;
    search: string;
    page: number;
    pagination: Pagination
}

const VideoBusquedaPage: NextPage<Props> = ({ data, search, page, pagination }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const router = useRouter();
    const imageMemo = useMemo(() => (
        <Images 
            media={ data.hits }
            type="videos"
        />
    ), [ data ])

    const handleSearchMedia = ( page: number ) => {
        router.push(`/videos/q=${ inputSearch.split(" ").join("+") }&page=${ page }`)
    }

    const handlePressEnter = ( e: KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter" ){

            router.push(`/videos/q=${ inputSearch.split(" ").join("+") }&page=1`);
        }
    }

    const removeSearch = () => {
        router.push(`/videos`);
    }

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
                            onKeyUp={ handlePressEnter }
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Container>
                <DivBusqueda>
                    <p>Búsqueda: </p>
                    <Tags>
                        <p>{ search }</p>
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={ faXmark }
                            onClick={ () => router.push("/videos") }
                        />
                    </Tags>
                </DivBusqueda>
            </Container>

            { imageMemo }

            <Container>
                <PaginationDiv 
                    page={ page } 
                    pagination={ pagination } 
                    handleSearchMedia={ handleSearchMedia }
                />
            </Container>
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { search } = params as { search: string[] };
    const [ searchValue, page ] = search[0].split("&") as string[];

    const pageValue = page.split("page=").join("");
    const qSearch = searchValue.split("q").join("").split("=").join("").split("+").join(" ");
    
    const data = await fetchApi(`${ searchValue }&per_page=30&page=${ pageValue }`, "videos");
    console.log(pageValue)
    const pagination = {
        total_count: data.total,
        count: 30,
        offset: 30 * (Number( pageValue ) - 1)
    }
    console.log(pagination)

    return {
        props: {
            data,
            search: qSearch,
            page: Number(pageValue),
            pagination
        }
    }
}

export default VideoBusquedaPage