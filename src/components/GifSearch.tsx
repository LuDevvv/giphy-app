import React, { useRef, useCallback } from "react";
import { GifSearchItem } from "./GifSearchItem";
import { BiSearch } from "react-icons/bi";
import CardSkeleton from "./CardSkeleton";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface GifSearchProps {
  category: string;
}

export const GifSearch: React.FC<GifSearchProps> = ({ category }) => {
  const {
    data: images,
    loading,
    error,
    hasMore,
    loadMore,
  } = useFetchGifs(category);

  // Implementing infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);

  const lastGifElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <div className="results-search">
      {category && (
        <h3 className="result-search">
          <BiSearch /> Resultados para: <span>{category}</span>
        </h3>
      )}

      {error && <div className="error-container">{error}</div>}

      <div className="card-gif">
        {images.length > 0 ? (
          images.map((img, index) => {
            if (images.length === index + 1) {
              return (
                <div ref={lastGifElementRef} key={img.id}>
                  <GifSearchItem {...img} />
                </div>
              );
            } else {
              return <GifSearchItem key={img.id} {...img} />;
            }
          })
        ) : !loading ? (
          <div className="no-results">
            <p>No se encontraron resultados para "{category}"</p>
            <p>¡Intenta con otra búsqueda!</p>
          </div>
        ) : null}
      </div>

      {loading && <CardSkeleton count={12} />}

      {!loading && hasMore && images.length > 0 && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-btn">
            Cargar más GIFs
          </button>
        </div>
      )}
    </div>
  );
};
