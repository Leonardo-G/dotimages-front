import React, { KeyboardEvent, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LayoutPage } from '../components/layout/LayoutPage'
import { Portada } from '../components/UI/Portada'
import { Images } from '../components/media/Images'
import { fetchApi } from '../utils/fetchApi'
import { PosCenter, PosInitial, BarraBusqueda, InputSearch, Subtitle } from '../styled/pages/home';
import { InterfaceImages } from '../interface/images'
import { useRouter } from 'next/router'
import { Container } from '../styled/globals'

interface Props {
    data: InterfaceImages;
}

const HomePage: NextPage<Props> = ({ data }) => {

    const [inputSearch, setInputSearch] = useState("");
    const router = useRouter()

    const handlePressEnter = ( e: KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter" ){

            router.push(`/images/q=${ inputSearch.split(" ").join("+") }&page=1`);
        }
    }

    return (
        <LayoutPage title='DOTimages'>
            <PosInitial>
                <Portada 
                    height='630px'
                    media='/portada.png'
                    type="image"
                    description='Imagen Portada'
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
                <Subtitle>
                    <h3>Tendencias</h3>
                </Subtitle>
            </Container>
            <Images 
                media={ data.hits }
                type="image"    
            />
        </LayoutPage>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const data = await fetchApi("order=popular&per_page=39&safesearch=true");

    return {
        props: {
            data
        }
    }
}

export default HomePage