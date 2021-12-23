//encodeURI para los parametros de q
export const getGifs = async ( category ) => {
    const link = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=kvjI5pQwJKPu6jaFOLniGRxp7cyGxhLW`;
    const resp = await fetch(link);
    const { data } = await resp.json()
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }); 
    
    return gifs;
}