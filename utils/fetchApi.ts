import { InterfaceImages } from '../interface/images';
import { IGifs, IGifsId } from '../interface/gifs';
import { IUserErrorApi } from '../interface/user';

export const fetchApi = async ( url: string, type = "image" ) :Promise<InterfaceImages> => {
    const results = await fetch( `https://pixabay.com/api${ type === "image" ? "/" : "/" + type }?key=${ process.env.NEXT_PUBLIC_API_KEY }&${ url }&lang=es` );
    const response = await results.json();

    return response;
}

export const fetchApiGiphy = async ( url: string, params: string, type: "gifs" | "stickers" ) :Promise<IGifs | IGifsId> => {
    const results = await fetch(`https://api.giphy.com/v1/${ type }${ params !== "" ? "/" + params : "/" }?api_key=${ process.env.NEXT_PUBLIC_API_KEY_GIPHY }&rating=g&${url}&lang=es`);
    const response = await results.json();

    return response;
} 

export const fetchApiBackend = ( method: "POST" | "GET" | "DELETE", url: string, body?: any ): Promise<IUserErrorApi> => {
    
    return new Promise ( async ( resolve, reject ) => {
        const results = await fetch( `${ process.env.NEXT_PUBLIC_API_BACKEND_URL }/api/${ url }`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        } )
        const response = await results.json();
            
        if ( !results.ok ){
            reject( response as IUserErrorApi )
        }

        resolve( response )
    
    })
}