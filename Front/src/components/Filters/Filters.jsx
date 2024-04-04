import { filterCards } from "../../Redux/Actions/actions";
import CharacterCard from "../CharacterCard/CharacterCard";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Filters.module.css"

const Filters = ({ setGender, gender, status, setStatus }) => {

  const handleFilter=(event)=>{
    setGender(event?.target?.value)
  }

  return (
    <div className={styles.main}>
      <select value={gender} onChange={handleFilter}>
        <option value="">All Genres</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={status} onChange={setStatus}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters