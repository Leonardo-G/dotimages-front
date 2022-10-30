import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { fetchApiGiphy } from '../../utils/fetchApi';
import { IGifs, IGifsShort, Pagination } from '../../interface/gifs';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { BarraBusqueda, InputSearch, Page, PaginationStyle, PosCenter, PosInitial, Tags } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import { Images } from '../../components/media/Images';
import { Container } from '../../styled/globals';

interface Props {
    data: IGifsShort[];
    search: string;
    pagination: Pagination;
    page: number;
}

const StickersBusquedaPage: NextPage<Props> = ({ data, search, page }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const [pageNumber, setPageNumber] = useState(page);

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
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Container>
                <Tags>
                    <p>{ search }</p>
                </Tags>
            </Container>
            <Images
                media={ data }
                type="gifs"
            />
            <Container>

                <PaginationStyle>
                    <Page color='#DFE5F2'>
                        <p>{ pageNumber }</p>
                    </Page>
                </PaginationStyle>
            </Container>
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const { search } = params as { search: string[] };
    const [ searchValue, page ] = search[0].split("&") as string[];

    const pageValue = page.split("page=").join("");
    const limit = Number(pageValue) * 30;
    const offset = limit - 30;
    console.log(pageValue)
    const { data, pagination } = await fetchApiGiphy(`${ searchValue }&offset=${ offset }&limit=${ limit }`, "search", "stickers") as IGifs
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