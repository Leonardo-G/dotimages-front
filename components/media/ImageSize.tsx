import React, { FC, useRef } from 'react'
import Link from 'next/link';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    Iconos, 
    ImageContainer 
} from '../../styled/ImageSize';

import { Media } from './Media';
import { Saved } from '../buttons/Saved';
import { Favorite } from '../buttons/Favorite';

interface Props {
    src: string;
    description?: string;
    tags?: string;
    id: string;
    type: "image" | "videos" | "gifs" | "sticker";
}

export const ImageSize: FC<Props> = ({ src, description, tags, id, type }) => {

    const video = useRef<HTMLVideoElement>(null);

    const handleHover = async (  ) => {
        setTimeout(() => {
            video.current && video.current.play();
            
        }, 0);
    }

    const handleLeaveHover = () => {
        video.current && video.current.pause();
    }
    
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
                    <Favorite 
                        id={ `${id}` }
                        src={ src }
                        type={ type }
                        key={ id }
                    />
                    <Saved
                        id={ `${id}` }
                        src={ src }
                        type={ type }
                        key={ id }
                    />
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
