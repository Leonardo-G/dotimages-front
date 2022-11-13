import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'
import { IUser } from '../../interface/user';
import { UserContainer, User, EnlaceColumn, Enlace } from '../../styled/nav/navigation';

interface Props {
    responsive?: boolean;
    logout: () => void;
    user: IUser;
}

export const UserNav: FC<Props> = ({ user, responsive, logout }) => {
    return (
        <UserContainer className={ responsive ? "" : "navOn" }>
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
            {
                responsive 
                ?
                    <EnlaceColumn onClick={ logout } >Salir</EnlaceColumn>
                :
                    <Enlace onClick={ logout } >Salir</Enlace>
            }
        </UserContainer>
    )
}
