import { GifImage } from "../types";

interface GiphyResponse {
  data: Array<{
    id: string;
    title: string;
    username: string;
    source: string;
    images: {
      fixed_height: {
        url: string;
      };
      original: {
        url: string;
      };
      fixed_height_small: {
        url: string;
      };
    };
  }>;
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

/**
 * Función para buscar GIFs utilizando la API de Giphy
 * @param {string} category - Término de búsqueda
 * @param {number} limit - Número de resultados a devolver (por defecto 20)
 * @returns {Promise<GifImage[]>} - Promesa que resuelve a un array de objetos GIF
 */
export const getGifs = async (
  category: string,
  limit: number = 24
): Promise<GifImage[]> => {
  try {
    const api_key = import.meta.env.VITE_API_KEY;

    console.log({ api_key });

    // Construir la URL de la API
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      category
    )}&limit=${limit}&api_key=${api_key}`;

    // Hacer la petición a la API
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error al obtener GIFs: ${res.status} ${res.statusText}`);
    }

    const { data } = (await res.json()) as GiphyResponse;

    // Transformar los datos
    const gifs: GifImage[] = data.map((img) => {
      return {
        id: img.id,
        title: img.title || "Sin título",
        url: img.images?.fixed_height.url || img.images?.original.url,
        username: img.username || undefined,
        source: img.source || undefined,
      };
    });

    return gifs;
  } catch (error) {
    console.error("Error en getGifs:", error);
    throw error;
  }
};
