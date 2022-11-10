import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';

import { 
    faHeart as faHeartBlack, 
    faBookmark as faBookBookmarkBlack 
} from '@fortawesome/free-solid-svg-icons';

import { 
    BtnIcono, 
    Iconos, 
    ImageContainer 
} from '../../styled/ImageSize';

import { FavoritesContext } from '../../context/favorites/FavoritesContext';
import { Media } from './Media';

interface Props {
    src: string;
    description?: string;
    tags?: string;
    id: string;
    type: "image" | "videos" | "gifs" | "sticker";
}

export const ImageSize: FC<Props> = ({ src, description, tags, id, type }) => {

    const [isHover, setIsHover] = useState(false);
    const [isHoverSave, setIsHoverSave] = useState(false);
    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const video = useRef<HTMLVideoElement>(null);

    const handleHover = async (  ) => {
        setTimeout(() => {
            video.current && video.current.play();
            
        }, 0);
    }

    const handleLeaveHover = () => {
        video.current && video.current.pause();
    }

    const handleAddFavorite = () => {
        setIsFavorite( true );
        addFavorite({
            favoriteId: `${id}`,
            type,
            urlImage: src
        });
    }

    const handleRemoveFavorite = () => {
        removeFavorite( id );
        setIsFavorite( false );
    }

    useEffect(() => {
        favorites.some( f => f.favoriteId === `${id}` ) && setIsFavorite(true);

    }, [favorites])
    
    return (
        <ImageContainer 
            onMouseOver={ handleHover }
            onMouseLeave={ handleLeaveHover }
        >
            <Media 
                description={ description ? description : "Media DotImages" }
                ref={ type === "videos" ? video : null }    
                src={ src }
                type={ type }
            />
            <div className='headerImage'>
                <div>
                    <p>{ tags }</p>
                </div>
                <Iconos>
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
                    <BtnIcono
                        onMouseOver={ () => setIsHoverSave( true ) }
                        onMouseLeave={ () => setIsHoverSave( false ) }
                    >
                        {
                            isHoverSave
                            ?
                                <FontAwesomeIcon className='icono' icon={ faBookBookmarkBlack } />
                            :
                                <FontAwesomeIcon icon={ faBookmark } />
                        }
                    </BtnIcono>
                </Iconos>
            </div>
            <Link 
                href={ `/media/${ type }/${ id }` }
                passHref
            >
                <a className='zoom'>
                   <FontAwesomeIcon icon={ faSearch }/>    
                </a>
            </Link>
        </ImageContainer>
    )
}
