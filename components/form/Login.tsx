import React, { ChangeEvent, FC, useContext, useState } from 'react'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { UIContext } from '../../context/UI/UIContext'
import { AuthContext } from '../../context/auth/AuthContext'
import { BackgroundForm, ButtonClose, ButtonSubmit, CampoDiv, Error, Form, Input, Label, TextLight } from '../../styled/form/login'


export const Login: FC = () => {

    const { handleCloseForm, showFormRegister, handleChangeForms } = useContext( UIContext );
    const { loginUser, error } = useContext( AuthContext )
    const [inputsValues, setInputsValues] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    const changeinputsValues = ( e: ChangeEvent<HTMLInputElement> ) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        })
    }
    
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
                    <Input 
                        type="email"
                        value={ inputsValues.email }
                        name="email"
                        onChange={ changeinputsValues }
                    />
                </CampoDiv>
                {
                    showFormRegister &&
                    <CampoDiv>
                        <Label>Nombre</Label>
                        <Input 
                            type="text"
                            value={ inputsValues.name }
                            name="name"
                            onChange={ changeinputsValues }
                        />
                        
                    </CampoDiv>
                }
                <CampoDiv>
                    <Label>Contraseña</Label>
                    <Input 
                        type="password"
                        value={ inputsValues.password }
                        name="password"
                        onChange={ changeinputsValues }
                    />
                </CampoDiv>
                {
                    showFormRegister &&
                    <CampoDiv>
                        <Label>Repetir Contraseña</Label>
                        <Input 
                            type="password"
                            value={ inputsValues.repeatPassword }
                            name="repeatPassword"
                            onChange={ changeinputsValues }
                        />
                    </CampoDiv>
                }
                <Error isError={ error.isError }>{ error.msg }</Error>
                <ButtonSubmit 
                    onClick={ () => loginUser( inputsValues.email, inputsValues.password ) }    
                >
                    <p>{ showFormRegister ? "Registrarse" : "Iniciar sesión" }</p>
                </ButtonSubmit>
            </Form>
            <TextLight
                onClick={ handleChangeForms }
            >{ showFormRegister ? "Ya tengo cuenta" : "Nueva Cuenta" }</TextLight>
        </BackgroundForm>
    )
}
