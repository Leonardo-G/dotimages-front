import { InterfaceImages } from '../interface/images';

export const fetchApi = async ( url: string, type = "image" ) :Promise<InterfaceImages> => {
    const results = await fetch( `https://pixabay.com/api${ type === "image" ? "/" : "/" + type }?key=${ process.env.NEXT_PUBLIC_API_KEY }&${ url }` );
    const response = await results.json();

    return response;
}