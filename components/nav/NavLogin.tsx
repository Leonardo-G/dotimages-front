import React, { FC } from 'react'
import { BtnRegistro, EnlaceColumn, EnlaceP } from '../../styled/nav/navigation';

interface Props { 
    responsive?: boolean;
    handleShowLogin: () => void;
    handleShowRegister: () => void;
    setOpenNavResponsive: (value: React.SetStateAction<boolean>) => void
}

export const NavLogin: FC<Props> = ({ responsive, handleShowLogin, handleShowRegister, setOpenNavResponsive }) => {
    
    if ( responsive ) {
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
    }

    return (
        <div className='navOn'>
            <EnlaceP onClick={ () => handleShowLogin() }>
                <p>Iniciar Sesión</p>
            </EnlaceP>

            <BtnRegistro onClick={ handleShowRegister }>
                <p>Registrarse</p>
            </BtnRegistro>
        </div>
    )
}

