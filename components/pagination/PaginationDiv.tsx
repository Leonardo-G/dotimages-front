import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { FC } from 'react'
import { Pagination } from '../../interface/gifs'
import { IconPage, NextPageStyle, Page, PaginationStyle } from '../../styled/pages/home'
import { arrayPage } from '../../utils/arrayPage'

interface Props {
    pagination: Pagination;
    page: number;
    handleSearchMedia: ( page: number) => void;
}

export const PaginationDiv: FC<Props> = ({ pagination, page, handleSearchMedia }) => {
    
    return (
        <PaginationStyle>
            {
               page !== 1 && 
                        
                <NextPageStyle onClick={ () => handleSearchMedia( page - 1 ) } color='#DFE5F2'>
                    <IconPage>
                        <FontAwesomeIcon icon={ faChevronLeft }/>
                    </IconPage>
                </NextPageStyle>
            }
            {
                arrayPage( pagination.total_count, pagination.count, page ).map( n => (
                            
                    <Page  key={ n } onClick={ () => handleSearchMedia( n ) } color={ page === n ? "#222C40" : '#DFE5F2' }>
                        <p>{ n }</p>
                    </Page>
                 ) )
            }
            {
                arrayPage( pagination.total_count, pagination.count, page)[ arrayPage( pagination.total_count, pagination.count, page).length - 1 ] !== page &&
                    
                <NextPageStyle color='#DFE5F2' onClick={ () => handleSearchMedia( page + 1 ) }>
                    <IconPage>
                        <FontAwesomeIcon icon={ faChevronRight }/>
                    </IconPage>
                </NextPageStyle>
            }
        </PaginationStyle>
    )
}
