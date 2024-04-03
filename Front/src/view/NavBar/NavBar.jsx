
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import ClearButton from "../../components/ClearButton/ClearButton";



const NavBar = ({ onSearch, onClear }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <ClearButton onClear={onClear} />
    </div>
  );
};

export default NavBar;