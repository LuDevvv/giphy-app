
export const getGifs = async (category) => {
  const api_key = import.meta.env.VITE_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=${api_key}`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.fixed_height_small.url,
    };
  });

  return gifs;
};
