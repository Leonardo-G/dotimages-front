import React, { KeyboardEvent, useMemo, useState } from 'react';

import Link from 'next/link';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../styled/globals';
import { BarraBusqueda, DivBusqueda, InputSearch, PosCenter, PosInitial, Tags } from '../../styled/pages/home';
import { fetchApiGiphy } from '../../utils/fetchApi';
import { IGifs, IGifsShort, Pagination } from '../../interface/gifs';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { Portada } from '../../components/UI/Portada';
import { Images } from '../../components/media/Images';
import { PaginationDiv } from '../../components/pagination/PaginationDiv';

interface Props {
    data: IGifsShort[];
    search: string;
    pagination: Pagination;
    page: number;
}

const StickersBusquedaPage: NextPage<Props> = ({ data, search, page, pagination }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const router = useRouter();

    const imageMemo = useMemo(() => (
        <Images
            media={ data }
            type="gifs"
        />
    ), [ data ])

    const handleSearchMedia = ( page: number ) => {
        router.push(`/stickers/q=${ inputSearch.split(" ").join("+") }&page=${ page }`)
    }

    const handlePressEnter = ( e: KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter" ){

            router.push(`/stickers/q=${ inputSearch.split(" ").join("+") }&page=1`);
        }
    }

    
    return (
        <LayoutPage title={`DOTImages | ${ search }`}>
            <PosInitial>
                <Portada
                    height='630px'
                    media='/portada.png'
                    description='Stickers Portada'
                    type="image"
                />
                <PosCenter>
                    <h1>Imagenes para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <Link href={`/stickers/q=${ inputSearch.split(" ").join("+") }&page=1`} passHref>
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
                            onClick={ () => router.push("/stickers") }
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
    const offset = ( Number(pageValue) - 1 ) * 30;

    const { data, pagination } = await fetchApiGiphy(`${ searchValue }&offset=${ offset }&limit=30`, "search", "stickers") as IGifs
    const qSearch = searchValue.split("q").join("").split("=").join("").split("+").join(" ");
    
    const gifsData = data?.map( gif => {
        return {
            url: gif.images.downsized_small.mp4,
            id: gif.id,
        }
    })

    return {
        props: {
            data: gifsData,
            search: qSearch,
            pagination: pagination,
            page: Number( pageValue )
        }
    }
}

export default StickersBusquedaPage