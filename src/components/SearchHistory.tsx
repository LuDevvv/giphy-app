import React, { useState } from "react";
import { BiHistory, BiX, BiTrash } from "react-icons/bi";
import { useSearch } from "../context/SearchContext";
import { motion, AnimatePresence } from "framer-motion";

export const SearchHistory: React.FC = () => {
  const { searchHistory, setActiveSearch, removeSearch, clearHistory } =
    useSearch();
  const [isOpen, setIsOpen] = useState(false);

  if (searchHistory.length === 0) {
    return null;
  }

  return (
    <div className="search-history-container">
      <button
        className="history-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar historial" : "Abrir historial"}
      >
        <BiHistory />
        <span>Búsquedas recientes</span>
        <span className="history-count">{searchHistory.length}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="history-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="history-header">
              <h4>Historial de búsquedas</h4>
              <button
                className="clear-history-btn"
                onClick={clearHistory}
                aria-label="Borrar todo el historial"
              >
                <BiTrash />
              </button>
            </div>

            <ul className="history-list">
              {searchHistory.map((item) => (
                <motion.li
                  key={item.term}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="history-item"
                >
                  <button
                    className="history-term-btn"
                    onClick={() => {
                      setActiveSearch(item.term);
                      setIsOpen(false);
                    }}
                  >
                    <span className="term-text">{item.term}</span>
                    <span className="term-count">{item.count}x</span>
                  </button>
                  <button
                    className="remove-term-btn"
                    onClick={() => removeSearch(item.term)}
                    aria-label={`Eliminar ${item.term}`}
                  >
                    <BiX />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
