import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categ) => {
        // console.log(typeof categ);
        return [inputValue, ...categ];
      });
      setInputValue("");
    }
  };

  return (
    <form className="ct-search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>
        <BiSearch />
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
