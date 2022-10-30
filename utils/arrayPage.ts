export const arrayPage = ( total: number, limit: number, pageCurrent: number ): number[] => {

    const totalCount = total > 4999 ? 4999 : total;
    const quantityPage = totalCount / limit;
    
    let pages = [];
    
    if ( pageCurrent === 1 ){
        for ( let i = pageCurrent; i <= pageCurrent + 4; i++){
            pages.push( i );
            if ( quantityPage === i ) break;
        }
    
        return pages;
    }

    if ( pageCurrent === 2 ){
        for ( let i = pageCurrent - 1; i <= pageCurrent + 3; i++){
            pages.push( i );
            if ( quantityPage === i ) break;
        }
    
        return pages;
    }

    for ( let i = pageCurrent - 2; i <= pageCurrent + 2; i++){
        if ( quantityPage === i ) break;
        pages.push( i );
    }

    return pages;
}