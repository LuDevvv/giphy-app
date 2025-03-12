import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearch } from "../context/SearchContext";

export const AddCategory: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const { addSearch } = useSearch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (error) setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    addSearch(trimmedValue);
    setInputValue("");
  };

  return (
    <div className="search-container">
      <form className="ct-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Buscar gifs..."
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Buscar GIFs"
        />
        <button type="submit" aria-label="Buscar">
          <BiSearch />
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
