import { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterList from "../../components/CharacterList/Characterlist";
import NavBar from "../NavBar/NavBar"

const LandingPage = () => {
    const [characters, setCharacters] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
  
    const handleSearch = (data) => {
      setCharacters(data);
      setIsSearching(true);
    };
  
    const handleClear = () => {
      setCharacters([]); // Limpiar la búsqueda y mostrar todos los personajes
      setIsSearching(false); // Asegurarse de que no se está buscando
    };
  
    return (
      <div>
        <NavBar onSearch={handleSearch} onClear={handleClear} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {isSearching && characters.length === 0 ? (
            <p>No se encontraron resultados.</p>
          ) : (
            characters.map((character) => (
              <CharacterCard key={character.id} character={character}  />
            ))
          )}
        </div>
        {!isSearching && <CharacterList />} {/* Mostrar CharacterList si no se está buscando */}
      </div>
    );
  };
  
  export default LandingPage;