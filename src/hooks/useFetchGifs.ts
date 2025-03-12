import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifImage } from "../types";

interface UseFetchGifsState {
  data: GifImage[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}

export const useFetchGifs = (category: string): UseFetchGifsState => {
  const [state, setState] = useState<UseFetchGifsState>({
    data: [],
    loading: true,
    error: null,
    hasMore: true,
    loadMore: () => {},
  });

  const [page, setPage] = useState(1);
  const limit = 24;

  const loadMoreGifs = () => {
    if (state.loading) return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // Reset state when category changes
    setState({
      data: [],
      loading: true,
      error: null,
      hasMore: true,
      loadMore: loadMoreGifs,
    });
    setPage(1);
  }, [category]);

  useEffect(() => {
    if (!category.trim()) {
      setState({
        data: [],
        loading: false,
        error: null,
        hasMore: false,
        loadMore: loadMoreGifs,
      });
      return;
    }

    setState((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));

    getGifs(category, page * limit)
      .then((imgs) => {
        setState((prevState) => {
          // Determine if there are more results to load
          const hasMore = imgs.length === page * limit;

          return {
            data: imgs,
            loading: false,
            error: null,
            hasMore,
            loadMore: loadMoreGifs,
          };
        });
      })
      .catch((err) => {
        console.error("Error fetching gifs:", err);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: "Error al cargar los GIFs. Intenta nuevamente.",
          hasMore: false,
        }));
      });
  }, [category, page]);

  return state;
};
