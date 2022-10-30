import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { fetchApiGiphy } from '../../utils/fetchApi';
import { IGifs, IGifsShort } from '../../interface/gifs';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { BarraBusqueda, InputSearch, PosCenter, PosInitial } from '../../styled/pages/home';
import { Portada } from '../../components/UI/Portada';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../../components/media/Images';

interface Props {
    data: IGifsShort[];
    search: string;
}

const GifsSearchPage: NextPage<Props> = ({ data, search }) => {

    const [inputSearch, setInputSearch] = useState(search);

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
                        />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
            <Images
                media={ data }
                type="gifs"    
            />
        </LayoutPage>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const { search } = params as { search: string[] };

    const { data } = await fetchApiGiphy(`${ search[0] }`, "search", "gifs") as IGifs
    
    const qSearch = search[0].split("q=").join("").split("&");
    const gifsData = data?.map( gif => {
        return {
            url: gif.images.downsized_small.mp4,
            id: gif.id,
        }
    })

    return {
        props: {
            data: gifsData,
            search: qSearch
        }
    }
}

export default GifsSearchPage