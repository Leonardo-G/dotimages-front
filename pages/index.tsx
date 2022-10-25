import React from 'react'
import { LayoutPage } from '../components/layout/LayoutPage'
import { Portada } from '../components/UI/Portada'

const HomePage = () => {
    return (
        <LayoutPage title='DOTimages'>
            <Portada 
                height='630px'
                image='/portada.png'
                description='Imagen Portada'
            />
        </LayoutPage>
    )
}

export default HomePage