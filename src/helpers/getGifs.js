    
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=16&api_key=L3YCVyEw2AuyiWS7NJlwsXpMROL1jAlR`;
        
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => { 
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height_small.url,
        }
    }); 

    return gifs;
} 