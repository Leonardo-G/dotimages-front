import React, { KeyboardEvent, useMemo, useState } from 'react'
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { BarraBusqueda, InputSearch, PosCenter, PosInitial, Tags, DivBusqueda } from '../../styled/pages/home';
import { Container } from '../../styled/globals';

import { fetchApi } from '../../utils/fetchApi';
import { Images } from '../../components/media/Images';
import { Portada } from '../../components/UI/Portada';
import { PaginationDiv } from '../../components/pagination/PaginationDiv';
import { LayoutPage } from '../../components/layout/LayoutPage';

import { InterfaceImages } from '../../interface/images';
import { Pagination } from '../../interface/gifs';

interface Props{
    data: InterfaceImages;
    search: string;
    page: number;
    pagination: Pagination
}

const ImagesSearch: NextPage<Props> = ({ data, search, page, pagination }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const router = useRouter();

    const imageMemo = useMemo(() => (
        <Images 
            media={ data.hits }
            type="image"
        />
    ), [ data ])

    const handleSearchMedia = ( page: number ) => {
        router.push(`/images/q=${ inputSearch.split(" ").join("+") }&page=${ page }`)
    }
    
    const handlePressEnter = ( e: KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter" ){

            router.push(`/images/q=${ inputSearch.split(" ").join("+") }&page=1`);
        }
    }

    const removeSearch = () => {
        router.push(`/`);
    }

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
                            onClick={ removeSearch }
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
    

    const data = await fetchApi(`${ searchValue }&per_page=30&page=${ pageValue }`);

    const pagination = {
        total_count: data.total,
        count: 30,
        offset: 30 * (Number( pageValue ) - 1)
    }

    return {
        props: {
            data,
            search: qSearch,
            page: Number(pageValue),
            pagination
        }
    }
}

export default ImagesSearch