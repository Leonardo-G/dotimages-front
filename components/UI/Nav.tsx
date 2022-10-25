import React from 'react'
import styled from "styled-components";

import { Container } from '../../styled/globals';

const Header = styled.header`
    background: #FFFFFF;
    height: 62px;
    width: 100%;
`

const Brand = styled.h3`
    font-size: 25px;
    font-family: "Reggae One", sans-serif;

    span{
        font-size: 16px;
        font-family: "Roboto", sans-serif;
    }
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
`
const Enlace = styled.a`
    padding: 15px 10px;
`

const BtnRegistro = styled.a`
    background: #F2EA77;
    border-radius: 50px;
    padding: 15px 18px;
    transition: .6s all ease;

    &:hover{
        border-radius: 5px;
        transition: .3s all ease;
    }
`

export const Nav = () => {
    return (
        <Header>
            <Container>
                <Navigation>
                    <Brand>DOT<span>Images</span></Brand>
                    <div>
                        <Enlace href="">Imágenes</Enlace>
                        <Enlace href="">Videos</Enlace>
                        <Enlace href="">Gifs</Enlace>
                        <Enlace href="">Stickers</Enlace>
                    </div>
                    <div>
                        <Enlace href="">Iniciar Sesión</Enlace>
                        <BtnRegistro href="">Registrarse</BtnRegistro>
                    </div>
                </Navigation>
            </Container>
        </Header>
    )
}
