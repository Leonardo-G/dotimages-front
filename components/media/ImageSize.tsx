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
import Cookies from 'js-cookie';
import { AuthContext } from '../../context/auth/AuthContext';
import { SavedContext } from '../../context/saved/SavedContext';

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
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
    const { addSaved, removeSaved, saved } = useContext( SavedContext )
    const { loginRequired } = useContext( AuthContext )
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

    const handleRemoveSaved = () => {
        removeSaved( id );
        setIsSaved( false );
    }

    const handleAddSaved = () => {
        if ( sessionStorage.getItem("status") ){
            addSaved({
                savedId: `${ id }`,
                type,
                urlImage: src
            });
        } else {
            loginRequired()
        }
    }

    useEffect(() => {
        favorites.some( f => f.favoriteId === `${id}` ) && setIsFavorite(true);

    }, [favorites])

    useEffect(() => {
        
        saved.some( s => s.savedId === `${id}` ) && setIsSaved(true);
    }, [ saved ])
    
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
                        onClick={
                            isSaved
                            ?   handleRemoveSaved
                            :   handleAddSaved
                        }
                    >
                        {
                            isSaved ?
                                <FontAwesomeIcon className='icono' icon={ faBookBookmarkBlack } />
                            :   isHoverSave
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
