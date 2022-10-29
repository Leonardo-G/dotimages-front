import React, { FC, LegacyRef, MutableRefObject, RefObject, useRef } from 'react'
import Link from 'next/link';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';

import { BtnIcono, Iconos, ImageContainer } from '../../styled/ImageSize';

interface Props {
    src: string;
    description?: string;
    tags?: string;
    id: number;
    type: "image" | "videos" | "gifs";
}

export const ImageSize: FC<Props> = ({ src, description, tags, id, type }) => {

    const video = useRef<HTMLVideoElement>()

    const handleHover = async (  ) => {
        setTimeout(() => {
            video.current && video.current.play();
            
        }, 0);
        
    }

    const handleLeaveHover = async (  ) => {
        video.current && video.current.pause();
    }
    
    return (
            <ImageContainer 
                onMouseOver={ handleHover }
                onMouseLeave={ handleLeaveHover }
            >

                {
                    type === "image" ?
                    <img
                        style={{
                            width: "380px",
                        }}
                        src={ src }
                        alt={ description }
                    />

                    :  type === "videos"
                    ?
                        <video
                            ref={ video }
                            style={{
                                width: "380px",
                                objectFit: "contain"
                            }}
                            src={ src }
                            muted
                            loop
                        ></video>
                    :
                        <video
                            style={{
                                width: "100%",
                                objectFit: "contain"
                            }}
                            src={ src }
                            loop 
                            muted
                            autoPlay={true}
                        ></video>
                }
                <div className='headerImage'>
                    <div>
                        <p>{ tags }</p>
                    </div>
                    <Iconos>
                        <BtnIcono>
                            <FontAwesomeIcon className='icon' icon={ faHeart } />
                        </BtnIcono>
                        <BtnIcono>
                            <FontAwesomeIcon className='icon' icon={ faBookmark } />
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
