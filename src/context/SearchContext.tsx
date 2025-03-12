import React, { createContext, useContext, useEffect, useState } from "react";
import { SearchHistory } from "../types";

interface SearchContextProps {
  searchHistory: SearchHistory[];
  addSearch: (term: string) => void;
  removeSearch: (term: string) => void;
  clearHistory: () => void;
  activeSearch: string;
  setActiveSearch: (term: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = "giphy-search-history";
const MAX_HISTORY_ITEMS = 10;

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>(() => {
    const savedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const [activeSearch, setActiveSearch] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addSearch = (term: string) => {
    if (!term.trim()) return;

    setSearchHistory((prevHistory) => {
      // Check if term already exists
      const existingIndex = prevHistory.findIndex(
        (item) => item.term.toLowerCase() === term.toLowerCase()
      );

      // Create a new history copy
      const newHistory = [...prevHistory];

      if (existingIndex >= 0) {
        // Update existing item
        newHistory[existingIndex] = {
          ...newHistory[existingIndex],
          timestamp: Date.now(),
          count: newHistory[existingIndex].count + 1,
        };
      } else {
        // Add new item
        newHistory.unshift({
          term,
          timestamp: Date.now(),
          count: 1,
        });

        // Keep only the most recent items
        while (newHistory.length > MAX_HISTORY_ITEMS) {
          newHistory.pop();
        }
      }

      return newHistory;
    });

    setActiveSearch(term);
  };

  const removeSearch = (term: string) => {
    setSearchHistory((prevHistory) =>
      prevHistory.filter(
        (item) => item.term.toLowerCase() !== term.toLowerCase()
      )
    );

    if (activeSearch.toLowerCase() === term.toLowerCase()) {
      setActiveSearch("");
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    setActiveSearch("");
  };

  return (
    <SearchContext.Provider
      value={{
        searchHistory,
        addSearch,
        removeSearch,
        clearHistory,
        activeSearch,
        setActiveSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
