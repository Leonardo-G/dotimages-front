import React, { KeyboardEvent, useMemo, useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { fetchApiGiphy } from '../../utils/fetchApi';
import { IGifs, IGifsShort, Pagination } from '../../interface/gifs';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { BarraBusqueda, InputSearch, PosCenter, PosInitial } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../../components/media/Images';
import { useRouter } from 'next/router';
import { Container } from '../../styled/globals';
import { PaginationDiv } from '../../components/pagination/PaginationDiv';

interface Props {
    data: IGifsShort[];
    search: string;
    page: number;
    pagination: Pagination;
}

const GifsSearchPage: NextPage<Props> = ({ data, search, page, pagination }) => {

    const [inputSearch, setInputSearch] = useState(search);
    const router = useRouter();

    const imageMemo = useMemo(() => (
        <Images
            media={ data }
            type="gifs"    
        />
    ), [ data ])

    const handleSearchMedia = ( page: number ) => {
        router.push(`/gifs/q=${ inputSearch.split(" ").join("+") }&page=${ page }`)
    }

    const handlePressEnter = ( e: KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter" ){

            router.push(`/gifs/q=${ inputSearch.split(" ").join("+") }&page=1`);
        }
    }

    return (
        <LayoutPage title={`DOTImages | ${ search }}`}>
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
    
    const { data, pagination } = await fetchApiGiphy(`${ searchValue }&offset=${ offset }&limit=30`, "search", "gifs") as IGifs
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

export default GifsSearchPage