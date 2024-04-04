import React, { useState, useEffect, useRef } from "react";
import styles from "../CharacterCard/CharacterCard.module.css"

const CharacterCard = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cards}>

      
      <img src={character?.image} alt={character?.name} onClick={openModal} className={styles.img} />
      <h2 className={styles.name}>{character?.name}</h2>
      </div>
      {isModalOpen && (
        <div className={styles.modal} ref={modalRef}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2 className={styles.name}>{character?.name}</h2>
            <img src={character?.image} alt={character?.name} className={styles.imgModal} />
            <p>Status: {character?.status}</p>
            <p>Species: {character?.species}</p>
            <p>Origin: {character?.origin?.name}</p>
            <p>Location: {character?.location?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
