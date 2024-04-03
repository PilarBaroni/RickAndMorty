

const CharacterCard = ({ character }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={character.image} alt={character.name} style={{ width: '100%' }} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;