import { InterfaceImages } from '../interface/images';

export const fetchApi = async ( url: string ) :Promise<InterfaceImages> => {
    const results = await fetch( `https://pixabay.com/api/?key=${ process.env.NEXT_PUBLIC_API_KEY }&${ url }` );
    const response = await results.json();

    return response;

}