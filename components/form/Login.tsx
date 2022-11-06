import React, { FC, useContext } from 'react'

import styled from 'styled-components'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UIContext } from '../../context/UI/UIContext'

const BackgroundForm = styled.div`
    background: #fff;
    padding: 40px 60px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    border-radius: 15px;
    box-shadow: 0px 0px 40px rgb(0 0 0 / 25%);

    h3{
        font-size: 28px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    row-gap: 45px;
`

const CampoDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const Label = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 18px;
    color: #000;
    margin-left: 12px;
`

const Input = styled.input`
    background: #222C40;
    border-radius: 50px;
    padding: 15px 20px;
    font-size: 16px;
    outline: none;
    width: 400px;
    color: #fff;
`

const ButtonSubmit = styled.input`
    margin: 0 auto;
    background: #DFE5F2;
    border-radius: 50px;
    padding: 15px 45px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 185px;
`

const TextLight = styled.p`
    font-size: 18px;
    color: #6A5B5B;
    font-family: "Inter", sans-serif;
    margin-top: 60px;
    cursor: pointer;
`

const ButtonClose = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    &:hover{
        color: #F2EA77;
    }
`

export const Login: FC = () => {

    const { handleCloseForm, showFormRegister, handleChangeForms } = useContext( UIContext )
    
    return (
        <BackgroundForm>
            <ButtonClose
                onClick={ handleCloseForm }
            >
                <FontAwesomeIcon icon={ faXmark }/>
            </ButtonClose>
            <h3>{ showFormRegister ? "Creese una nueva cuenta" : "Inicie Sesión con su cuenta"}</h3>
            <Form>
                <CampoDiv>
                    <Label>Correo</Label>
                    <Input type="text"/>
                </CampoDiv>
                {
                    showFormRegister &&
                    <CampoDiv>
                        <Label>Nombre</Label>
                        <Input type="text"/>
                    </CampoDiv>
                }
                <CampoDiv>
                    <Label>Contraseña</Label>
                    <Input type="password"/>
                </CampoDiv>
                {
                    showFormRegister &&
                    <CampoDiv>
                        <Label>Repetir Contraseña</Label>
                        <Input type="password"/>
                    </CampoDiv>
                }
                <ButtonSubmit type="submit" value={ showFormRegister ? "Registrarse" : "Iniciar sesión" }/>
            </Form>
            <TextLight
                onClick={ handleChangeForms }
            >{ showFormRegister ? "Ya tengo cuenta" : "Nueva Cuenta" }</TextLight>
        </BackgroundForm>
    )
}
