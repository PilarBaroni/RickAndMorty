import React from "react";
import SearchBar from "../../components/Search/Search";
import style from "./NavBar.module.css";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;