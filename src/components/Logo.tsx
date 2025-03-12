import React from "react";
import { useSearch } from "../context/SearchContext";

export const Logo: React.FC = () => {
  const { setActiveSearch } = useSearch();

  return (
    <div className="flex-logo">
      <div
        className="logo-container"
        onClick={() => setActiveSearch("")}
        onKeyDown={(e) => e.key === "Enter" && setActiveSearch("")}
        role="button"
        tabIndex={0}
        aria-label="Volver al inicio"
      >
        <svg
          className="giphy-logo"
          width="40"
          height="40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="80" height="80" rx="5" fill="#000000" />
          <rect x="10" y="10" width="35" height="35" rx="5" fill="#00ff00" />
          <rect x="55" y="10" width="35" height="35" rx="5" fill="#ff0066" />
          <rect x="55" y="55" width="35" height="35" rx="5" fill="#6157ff" />
          <rect x="10" y="55" width="35" height="35" rx="5" fill="#00ccff" />
        </svg>
        <h2 className="title">GifExplorer</h2>
      </div>
    </div>
  );
};
