
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import ClearButton from "../../components/ClearButton/ClearButton";
import Filters from "../../components/Filters/Filters";



const NavBar = ({ onSearch, onClear }) => {
  return (
    <div className={style.nav}>
      <Filters/>
      <SearchBar onSearch={onSearch} />
      <ClearButton onClear={onClear} />
    </div>
  );
};

export default NavBar;