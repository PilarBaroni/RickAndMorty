import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;