import React, { useState, useEffect, useRef } from "react";

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
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "200px",
      }}
    >
      <img
        src={character?.image}
        alt={character?.name}
        style={{ width: "100%", cursor: "pointer" }}
        onClick={openModal}
      />
       <h2>{character?.name}</h2>
      {isModalOpen && (
        <div
          className="modal"
          ref={modalRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal-content"
            style={{ background: "#fff", padding: "20px", borderRadius: "5px" }}
          >
            <span
              className="close"
              onClick={closeModal}
              style={{
                cursor: "pointer",
                fontSize: "30px",
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &times;
            </span>
            <h2>{character?.name}</h2>
            <img
              src={character?.image}
              alt={character?.name}
              style={{ width: "100%" }}
            />
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
