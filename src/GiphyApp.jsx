import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifSearch } from "./components/GifSearch";
import { Logo } from './components/Logo';

const GiphyApp = () => {
  const [categories, setCategories] = useState([""]);
  // console.log(categories);

  return (
    <div className="ct-all">
      <Logo />
      <AddCategory setCategories={setCategories} />
      <ol className="allItems">
        {categories && categories.map((category) => (
          <GifSearch key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GiphyApp;
