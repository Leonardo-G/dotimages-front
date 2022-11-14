import React, { useContext, useState } from 'react';

import { AuthContext } from '../../context/auth/AuthContext';
import { UIContext } from '../../context/UI/UIContext';

import { Login } from '../form/Login';
import { UserNav } from './UserNav';
import { NavLogin } from './NavLogin';
import { LinkContainer } from './LinkContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../styled/globals';
import { 
    Brand, 
    Header, 
    MarkNav, 
    NavButtonResponsive, 
    NavColumn, 
    Navigation, 
    NavResponsive, 
} from '../../styled/nav/navigation';

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
                            <LinkContainer />
                        </div>
                        {
                            !user ?
                                <NavLogin 
                                    handleShowLogin={ handleShowLogin }
                                    handleShowRegister={ handleShowRegister }
                                    setOpenNavResponsive={ setOpenNavResponsive }
                                />
                            :
                                <UserNav
                                    logout={ logout }
                                    user={ user }
                                />
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
                                <LinkContainer />
                                {
                                    !user ?
                                        <NavLogin 
                                            responsive
                                            handleShowLogin={ handleShowLogin }
                                            handleShowRegister={ handleShowRegister }
                                            setOpenNavResponsive={ setOpenNavResponsive }
                                        />
                                    :
                                        <UserNav
                                            logout={ logout }
                                            user={ user }
                                            responsive
                                        />
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