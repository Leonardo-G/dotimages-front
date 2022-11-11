import React, { FC, useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartBlack } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { AuthContext } from '../../context/auth/AuthContext'
import { FavoritesContext } from '../../context/favorites/FavoritesContext'

import { BtnIcono } from '../../styled/ImageSize'

interface Props {
    id: string;
    type: "image" | "videos" | "gifs" | "sticker";
    src: string;
}

export const Favorite: FC<Props> = ({ id, type, src }) => {

    const { loginRequired } = useContext( AuthContext )
    const { addFavorite, removeFavorite, favorites } = useContext( FavoritesContext );
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        favorites.some( f => f.favoriteId === `${id}` ) && setIsFavorite(true);
        
    }, [favorites])

    const handleAddFavorite = () => {
        if ( sessionStorage.getItem("status") ){
            addFavorite({
                favoriteId: `${id}`,
                type,
                urlImage: src
            });
        } else {
            
            loginRequired();
        }
    }

    const handleRemoveFavorite = () => {
        removeFavorite( id );
        setIsFavorite( false );
    }

    return (
        <BtnIcono
            onMouseOver={ () => setIsHover( true ) }
            onMouseLeave={ () => setIsHover( false ) }  
            onClick={ 
                isFavorite 
                ?   handleRemoveFavorite
                :   handleAddFavorite 
            }
        >
            {
                isFavorite ?
                
                    <FontAwesomeIcon className='icono' icon={ faHeartBlack } /> 
                : isHover 
                ?
                    <FontAwesomeIcon className='icono' icon={ faHeartBlack } />
                :
                    <FontAwesomeIcon icon={ faHeart } />
            }
        </BtnIcono>
    )
}
