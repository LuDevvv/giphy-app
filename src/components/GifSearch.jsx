import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifSearchItem } from "./GifSearchItem";
import { BiSearch } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const GifSearch = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <div className="results-search">
      {
        category && <h3 className="result-search">
        <BiSearch /> Resultados para: {category}
     </h3>
      }

      {loading && <Skeleton count={20} />}

      <div className="card-gif">
        {images.map((img) => (
          <GifSearchItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
