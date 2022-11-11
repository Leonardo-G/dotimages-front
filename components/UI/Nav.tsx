import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styled from "styled-components";

import { AuthContext } from '../../context/auth/AuthContext';
import { UIContext } from '../../context/UI/UIContext';
import { Login } from '../form/Login';

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
    cursor: pointer;
`

const BtnRegistro = styled.div`
    background: #F2EA77;
    border-radius: 50px;
    padding: 15px 18px;
    transition: .6s all ease;
    display: inline-block;
    cursor: pointer;

    &:hover{
        border-radius: 5px;
        transition: .3s all ease;
    }
`

const EnlaceP = styled.div`
    padding: 15px 10px;
    cursor: pointer;
    display: inline-block;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    position: relative;

    .containerNavTarget {
        position: absolute;
        left: 0px;
        top: 50px;
        background: #222C40;
        z-index: 999;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        a {
            color: #fff;
            padding: 20px 20px; 
            border-bottom: 1px solid #fff;
            &:last-of-type{
                border-bottom: none;
            }
        }
    }

    &:hover .containerNavTarget{
        visibility: visible;
    }
` 

const User = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: relative;
`

export const Nav = () => {

    const { 
        showFormLogin, 
        handleShowLogin, 
        handleShowRegister, 
        showFormRegister
    } = useContext( UIContext );
    const { 
        user,
        logout
    } = useContext( AuthContext );

    return (
        <>
            {
                ( showFormLogin || showFormRegister ) &&
                <Login />
            }
            <Header>
                <Container>
                    <Navigation>
                        <Brand>DOT<span>Images</span></Brand>
                        <div>
                            <Link href="/">
                                <Enlace>Imágenes</Enlace>
                            </Link>
                            <Link href="/videos">
                                <Enlace>Videos</Enlace>
                            </Link>
                            <Link href="/gifs">
                                <Enlace>Gifs</Enlace>
                            </Link>
                            <Link href="/stickers">
                                <Enlace href="">Stickers</Enlace>
                            </Link>
                        </div>
                        {
                            !user ?
                            <div>
                                <EnlaceP onClick={ () => handleShowLogin() }>
                                    <p>Iniciar Sesión</p>
                                </EnlaceP>

                                <BtnRegistro onClick={ handleShowRegister }>
                                    <p>Registrarse</p>
                                </BtnRegistro>
                            </div>
                            :
                            <UserContainer>
                                <User>
                                    <Image
                                        src={ user.imageUrl ? user.imageUrl : "https://edeal.cl/assets/ico/default.webp" }
                                        alt={ user.name + " DOTImages" }
                                        layout="fill"
                                    />
                                </User>
                                <Enlace onClick={ logout } >Salir</Enlace>
                                <div className='containerNavTarget'>
                                    <Link href="/favorites">Favoritos</Link>
                                    <Link href="/saved">Guardados</Link>
                                </div>
                            </UserContainer>
                        }
                    </Navigation>
                </Container>
            </Header>
        </>
    )
}