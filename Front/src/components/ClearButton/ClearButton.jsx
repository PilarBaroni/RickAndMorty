import style from "../ClearButton/ClearButton.module.css";

const ClearButton = ({ onClear }) => {
  const handleClick = () => {
    onClear();
  };

  return (
    <div>
      <button onClick={handleClick} className={style.clearButton}>All Characters</button>
    </div>
  );
};

export default ClearButton;
