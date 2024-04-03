const ClearButton = ({ onClear }) => {
  const handleClick = () => {
    onClear();
  };

  return (
    <div>
      <button onClick={handleClick}>All Characters</button>
    </div>
  );
};

export default ClearButton;
