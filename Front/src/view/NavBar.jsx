import SearchBar from "../components/Search/Search";


const NavBar = ({ handleSearch }) => {
  return (
    <div className="navbar">
      <h1>Rick and Morty</h1>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};

export default NavBar;