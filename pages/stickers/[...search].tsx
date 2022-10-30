import React, { KeyboardEvent, KeyboardEventHandler, useMemo, useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { fetchApiGiphy } from '../../utils/fetchApi';
import { IGifs, IGifsShort, Pagination } from '../../interface/gifs';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { BarraBusqueda, IconPage, InputSearch, NextPageStyle, Page, PaginationStyle, PosCenter, PosInitial, Tags } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import { Images } from '../../components/media/Images';
import { Container } from '../../styled/globals';
import { arrayPage } from '../../utils/arrayPage';
import { useRouter } from 'next/router';

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
                <Tags>
                    <p>{ search }</p>
                </Tags>
            </Container>
            
            { imageMemo }
            
            <Container>
                <PaginationStyle>
                {
                       page !== 1 && 
                            
                        <Link href={`/stickers/q=${ inputSearch.split(" ").join("+") }&page=${ page - 1 }`} passHref>
                            <NextPageStyle color='#DFE5F2'>
                                <IconPage>
                                    <FontAwesomeIcon icon={ faChevronLeft }/>
                                </IconPage>
                            </NextPageStyle>
                        </Link>
                    }
                    {
                        arrayPage( pagination.total_count, pagination.count, page ).map( n => (

                            
                                <Link href={`/stickers/q=${ inputSearch.split(" ").join("+") }&page=${ n }`} passHref key={ n }>
                                    <Page color={ page === n ? "#222C40" : '#DFE5F2' } key={ n }>
                                        <p>{ n }</p>
                                    </Page>
                                </Link>
                         ) )
                    }
                    {
                        arrayPage( pagination.total_count, pagination.count, page)[ arrayPage( pagination.total_count, pagination.count, page).length - 1 ] !== page &&
                            
                        <Link href={`/stickers/q=${ inputSearch.split(" ").join("+") }&page=${ page + 1 }`} passHref>
                            <NextPageStyle color='#DFE5F2'>
                                <IconPage>
                                    <FontAwesomeIcon icon={ faChevronRight }/>
                                </IconPage>
                            </NextPageStyle>
                        </Link>
                    }
                </PaginationStyle>
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
    
    console.log(pagination)
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