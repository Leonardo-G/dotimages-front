import React, { FC } from 'react'
import Link from 'next/link';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { BtnIcono, Iconos, ImageContainer } from '../../styled/ImageSize';

interface Props {
    src: string;
    description: string;
    tags: string;
    id: number;
}

export const ImageSize: FC<Props> = ({ src, description, tags, id }) => {
    return (
            <ImageContainer>
                <img
                    style={{
                        width: "380px"
                    }}
                    src={ src }
                    alt={ description }
                />
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
                    href={ `/media/image/${ id }` }
                    passHref
                >
                    <a className='zoom'>
                       <FontAwesomeIcon icon={ faSearch }/>    
                    </a>
                </Link>
            </ImageContainer>
    )
}
