import { InterfaceImages } from '../interface/images';
import { IGifs, IGifsId } from '../interface/gifs';

export const fetchApi = async ( url: string, type = "image" ) :Promise<InterfaceImages> => {
    const results = await fetch( `https://pixabay.com/api${ type === "image" ? "/" : "/" + type }?key=${ process.env.NEXT_PUBLIC_API_KEY }&${ url }` );
    const response = await results.json();

    return response;
}

export const fetchApiGiphy = async ( url: string, params: string, type: "gifs" | "stickers" ) :Promise<IGifs | IGifsId> => {
    const results = await fetch(`https://api.giphy.com/v1/${ type }${ params !== "" ? "/" + params : "/" }?api_key=${ process.env.NEXT_PUBLIC_API_KEY_GIPHY }&rating=g&${url}&lang=es`);
    const response = await results.json();

    return response;
} 