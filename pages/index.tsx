import React from 'react'
import styled from 'styled-components'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LayoutPage } from '../components/layout/LayoutPage'
import { Portada } from '../components/UI/Portada'
import { Images } from '../components/media/Images'

const PosInitial = styled.div`
  position: relative;
  height: 630px;
`

const PosCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  display: flex;
  align-items: center;
  h1{
    width: 50%
  }
`

const BarraBusqueda = styled.div`
  position: relative;
  margin-left: 50px;
  background: #222C40;
  width: 400px;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  column-gap: 20px;
`

const InputSearch = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
`

const HomePage = () => {

    return (
        <LayoutPage title='DOTimages'>
            <PosInitial>
                <Portada 
                    height='630px'
                    image='/portada.png'
                    description='Imagen Portada'
                />
                <PosCenter>
                    <h1>Imagenes para tus proyectos GRATIS!</h1>
                    <BarraBusqueda>
                        <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                        <InputSearch />
                    </BarraBusqueda>
                </PosCenter>
            </PosInitial>
              <Images />
        </LayoutPage>
    )
}

export default HomePage