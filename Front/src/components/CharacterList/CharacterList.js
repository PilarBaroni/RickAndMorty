import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;