import styled from "styled-components"

export const Header = styled.header`
    background: #FFFFFF;
    height: 62px;
    width: 100%;
`

export const Brand = styled.h3`
    font-size: 25px;
    font-family: "Reggae One", sans-serif;

    span{
        font-size: 16px;
        font-family: "Roboto", sans-serif;
    }
`

export const Navigation = styled.nav`
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
export const Enlace = styled.a`
    padding: 15px 10px;
    cursor: pointer;
`

export const BtnRegistro = styled.div`
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

export const EnlaceP = styled.div`
    padding: 15px 10px;
    cursor: pointer;
    display: inline-block;
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    position: relative;

    @media (max-width: 1080px){
    }

` 

export const User = styled.div`
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

export const NavButtonResponsive= styled.div`
    font-size: 25px;
    color: #222C40;
    cursor: pointer;

    @media (min-width: 1080px){
        display: none;
    }
`

export const NavResponsive = styled.div`
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

export const NavColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const EnlaceColumn = styled.a`
    color: #fff;
    padding: 20px;
    font-weight: 600;
    font-size: 25px;
`

export const MarkNav = styled.div`
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 45px;
    color: #222C40;
    cursor: pointer;
    color: #fff;
    
`