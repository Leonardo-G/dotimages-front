import { InterfaceImages } from '../interface/images';
import { IGifs, IGifsId } from '../interface/gifs';
import { IUserErrorApi, IUserApi } from '../interface/user';
import { IFavorites } from '../interface/favorites';
import { ISaved } from '../interface/saved';

export const fetchApi = async ( url: string, type = "image" ) :Promise<InterfaceImages> => {
    const results = await fetch( `https://pixabay.com/api${ type === "image" ? "/" : "/" + type }?key=${ process.env.NEXT_PUBLIC_API_KEY }&${ url }&lang=es`, {
        credentials: "include"
    } );
    const response = await results.json();

    return response;
}

export const fetchApiGiphy = async ( url: string, params: string, type: "gifs" | "stickers" ) :Promise<IGifs | IGifsId> => {
    const results = await fetch(`https://api.giphy.com/v1/${ type }${ params !== "" ? "/" + params : "/" }?api_key=${ process.env.NEXT_PUBLIC_API_KEY_GIPHY }&rating=g&${url}&lang=es`, {
        credentials: "include"
    });
    const response = await results.json();

    return response;
}

export const fetchApiBackend = ( method: "POST" | "GET" | "DELETE", url: string, body?: any, token?: string ): Promise<IUserApi | IFavorites[] | IFavorites | ISaved | ISaved[]> => {
    
    const options: RequestInit = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "token-auth": token && token
        } as any
    }

    if (method !== "GET" && method !== "DELETE" ) {
        options.body = JSON.stringify(body);
    }

    return new Promise ( async ( resolve, reject ) => {
        const results = await fetch( `${ process.env.NEXT_PUBLIC_API_BACKEND_URL }/api/${ url }`, options )
        const response = await results.json();
            
        if ( !results.ok ){
            reject( response as IUserErrorApi )
        }

        resolve( response )
    
    })
}