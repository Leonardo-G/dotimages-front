import React, { FC, useRef } from 'react'
import Link from 'next/link';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Media } from './Media';
import { Saved } from '../buttons/Saved';
import { Favorite } from '../buttons/Favorite';

import {  
    Iconos, 
    ImageContainer 
} from '../../styled/ImageSize';

interface Props {
    src: string;
    description?: string;
    tags?: string;
    id: string;
    type: "image" | "videos" | "gifs" | "sticker";
    widthAuto?: boolean
}

export const ImageSize: FC<Props> = ({ src, description, tags, id, type, widthAuto = false }) => {

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
            auto
        >
            {
                type === "videos"
                ?
                    <video
                        ref={ video }
                        style={{
                            width: widthAuto ? "100%" : "380px",
                            objectFit: "contain"
                        }}
                        src={ src }
                        muted
                        loop
                    ></video>
                : 
                    <Media 
                        src={ src }
                        type={ type }
                        key={ id }
                        description={ description! }
                        widthAuto={ widthAuto }
                    />

            }
            <div className='headerImage'>
                <div>
                    <p>{ tags }</p>
                </div>
                <Iconos>
                    <Favorite 
                        id={ `${id}` }
                        src={ src }
                        type={ type }
                        key={ "favorite" + id }
                    />
                    <Saved
                        id={ `${id}` }
                        src={ src }
                        type={ type }
                        key={ "saved" + id }
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
