import React from "react";
import { AddCategory } from "./components/AddCategory";
import { GifSearch } from "./components/GifSearch";
import { Logo } from "./components/Logo";
import { SearchHistory } from "./components/SearchHistory";
import { useSearch } from "./context/SearchContext";

const GiphyApp: React.FC = () => {
  const { activeSearch, addSearch } = useSearch();

  const handleSuggestedSearch = (term: string) => {
    addSearch(term);
  };

  return (
    <div className="app-container">
      <div className="ct-all">
        <Logo />
        <AddCategory />

        <SearchHistory />

        {!activeSearch ? (
          <div className="welcome-message">
            <h3>¡Bienvenido a GifExplorer!</h3>
            <p>Encuentra los mejores GIFs de la web en segundos</p>

            <div className="popular-searches">
              <span className="popular-label">Popular ahora:</span>
              <div className="search-chip-container">
                <button
                  className="search-chip"
                  onClick={() => handleSuggestedSearch("cats")}
                >
                  <span className="chip-icon">🐱</span>
                  <span>Gatos</span>
                </button>
                <button
                  className="search-chip"
                  onClick={() => handleSuggestedSearch("dogs")}
                >
                  <span className="chip-icon">🐶</span>
                  <span>Perros</span>
                </button>
                <button
                  className="search-chip"
                  onClick={() => handleSuggestedSearch("memes")}
                >
                  <span className="chip-icon">😂</span>
                  <span>Memes</span>
                </button>
                <button
                  className="search-chip"
                  onClick={() => handleSuggestedSearch("reactions")}
                >
                  <span className="chip-icon">✨</span>
                  <span>Reacciones</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <GifSearch category={activeSearch} />
        )}

        <footer className="app-footer">
          <p>Made with ❤️ | Powered by GIPHY API</p>
        </footer>
      </div>
    </div>
  );
};

export default GiphyApp;
