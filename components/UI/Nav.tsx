import React, { useContext, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styled from "styled-components";

import { AuthContext } from '../../context/auth/AuthContext';
import { UIContext } from '../../context/UI/UIContext';
import { Login } from '../form/Login';

import { Container } from '../../styled/globals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


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

    @media (max-width: 1080px){
        .navOn{
            display: none;
        }
    }
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

    @media (max-width: 1080px){
        font-size: 22px;
        text-align: center;
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

    @media (max-width: 1080px){
    }

` 

const User = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
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

    @media (max-width: 1080px){
        .containerNavTarget {
            position: relative;        
            visibility: visible;
            align-items: center;
        }
    }

    &:hover .containerNavTarget{
        visibility: visible;
    }
`

const NavButtonResponsive= styled.div`
    font-size: 25px;
    color: #222C40;
    cursor: pointer;
`

const NavResponsive = styled.div`
    position: relative;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #222C40;
    z-index: 999;
    transform: translateX(100%);
    transition: all .2s ease;
`

const NavColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const EnlaceColumn = styled.a`
    color: #fff;
    padding: 20px;
    font-weight: 600;
    font-size: 25px;
`

const MarkNav = styled.div`
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 45px;
    color: #222C40;
    cursor: pointer;
    color: #fff;
    
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

    const [openNavResponsive, setOpenNavResponsive] = useState(false);

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
                        <div className='navOn'>
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
                                <Enlace>Stickers</Enlace>
                            </Link>
                        </div>
                        {
                            !user ?
                                <div className='navOn'>
                                    <EnlaceP onClick={ () => handleShowLogin() }>
                                        <p>Iniciar Sesión</p>
                                    </EnlaceP>

                                    <BtnRegistro onClick={ handleShowRegister }>
                                        <p>Registrarse</p>
                                    </BtnRegistro>
                                </div>
                            :
                                <UserContainer className='navOn'>
                                    <User>
                                        <Image
                                            src={ user.imageUrl ? user.imageUrl : "https://edeal.cl/assets/ico/default.webp" }
                                            alt={ user.name + " DOTImages" }
                                            layout="fill"
                                        />
                                        <div className='containerNavTarget'>
                                            <Link href="/favorites">Favoritos</Link>
                                            <Link href="/saved">Guardados</Link>
                                        </div>
                                    </User>
                                    <Enlace onClick={ logout } >Salir</Enlace>
                                </UserContainer>
                        }
                        <NavButtonResponsive
                            onClick={ () => setOpenNavResponsive( true ) }
                        >
                            <FontAwesomeIcon icon={ faBars }/>
                        </NavButtonResponsive>
                        <NavResponsive 
                            className={ openNavResponsive ? "navResponsiveTarget" : "" }
                        >
                            <NavColumn>
                                <Link href="/">
                                    <EnlaceColumn>Imágenes</EnlaceColumn>
                                </Link>
                                <Link href="/videos">
                                    <EnlaceColumn>Videos</EnlaceColumn>
                                </Link>
                                <Link href="/gifs">
                                    <EnlaceColumn>Gifs</EnlaceColumn>
                                </Link>
                                <Link href="/stickers">
                                    <EnlaceColumn>Stickers</EnlaceColumn>
                                </Link>
                                {
                                    !user ?
                                        <>
                                            <EnlaceColumn onClick={ () => {
                                                handleShowLogin()
                                                setOpenNavResponsive(false);
                                            } }>
                                                <p>Iniciar Sesión</p>
                                            </EnlaceColumn>

                                            <BtnRegistro onClick={ () => {
                                                handleShowRegister();
                                                setOpenNavResponsive(false);
                                            } }>
                                                <p>Registrarse</p>
                                            </BtnRegistro>
                                        </>
                                    :
                                        <UserContainer>
                                            <User>
                                                <Image
                                                    src={ user.imageUrl ? user.imageUrl : "https://edeal.cl/assets/ico/default.webp" }
                                                    alt={ user.name + " DOTImages" }
                                                    layout="fill"
                                                />
                                            <div className='containerNavTarget'>
                                                <Link href="/favorites">Favoritos</Link>
                                                <Link href="/saved">Guardados</Link>
                                            </div>
                                            </User>
                                            <EnlaceColumn onClick={ logout } >Salir</EnlaceColumn>
                                        </UserContainer>
                                }
                            </NavColumn>
                            <MarkNav
                                onClick={ () => setOpenNavResponsive( false ) }
                            >
                                <FontAwesomeIcon 
                                    icon={ faXmark }
                                />
                            </MarkNav>
                        </NavResponsive>
                    </Navigation>
                </Container>
            </Header>
        </>
    )
}