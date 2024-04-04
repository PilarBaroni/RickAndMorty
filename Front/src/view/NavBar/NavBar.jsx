import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import ClearButton from "../../components/ClearButton/ClearButton";
import Filters from "../../components/Filters/Filters";

const NavBar = ({ onSearch, onClear, gender, setGender, status, setStatus, species, setSpecies }) => {
  return (
    <div className={style.nav}>
      <Filters gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} />
      <SearchBar onSearch={onSearch} />
      <ClearButton onClear={onClear} />
    </div>
  );
};

export default NavBar;
