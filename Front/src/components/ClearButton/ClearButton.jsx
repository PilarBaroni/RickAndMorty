

const ClearButton = ({ onClear }) => {
  const handleClick = () => {
    onClear();
  };

  return (
    <div>
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default ClearButton;