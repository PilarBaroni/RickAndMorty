import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard"
import NavBar from "./view/NavBar/NavBar";
import CharacterList from "./components/CharacterList/Characterlist";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (data) => {
    setCharacters(data);
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setCharacters([]);
    setIsSearching(false);
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <div>
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <CharacterList />
        )}
      </div>
    </div>
  );
};

export default App;