import React, { useState } from "react";
import axios from "axios";
import style from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    onSearch(searchTerm);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={style.input}
        placeholder="Search..."
      />
      <button onClick={handleSearch} className={style.button}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
