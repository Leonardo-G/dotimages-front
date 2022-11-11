import React, { FC, useContext, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookBookmarkBlack} from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { BtnIcono } from '../../styled/ImageSize'
import { SavedContext } from '../../context/saved/SavedContext'
import { AuthContext } from '../../context/auth/AuthContext'

interface Props {
    id: string;
    type: string;
    src: string;
}

export const Saved: FC<Props> = ({ id, type, src }) => {
    
    const { 
        addSaved, 
        removeSaved, 
        saved 
    } = useContext( SavedContext );
    const [isSaved, setIsSaved] = useState(false);
    const { loginRequired } = useContext( AuthContext );
    const [isHoverSave, setIsHoverSave] = useState(false);

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
        
        saved.some( s => s.savedId === id ) && setIsSaved(true);
    }, [ saved ])
    
    return (
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
    )
}
