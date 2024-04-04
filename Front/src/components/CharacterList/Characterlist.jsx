import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "../CharacterList/CharacterList.module.css"
import { useSelector } from "react-redux";

const CharacterList = ({page, setPage, characters}) => {

  const {totalPages} = useSelector(state=>state)

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className={styles.characterList}>
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          {"<"}
        </button>
        {[...Array(Math.min(totalPages, 3))].map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} disabled={page === index + 1}>
            {index + 1}
          </button>
        ))}
        {totalPages > 3 && (
          <>
            <span className={styles.span}>{page}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
              {page + 1}
            </button>
            <button onClick={() => handlePageChange(page + 2)} disabled={page + 1 === totalPages}>
              {page + 2}
            </button>
            <span className={styles.span}>...</span>
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          {">"}
        </button>
      </div>
      <div className={styles.characterGrid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};



export default CharacterList;