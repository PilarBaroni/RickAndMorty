import { filterCards } from "../../Redux/Actions/actions";
import CharacterCard from "../CharacterCard/CharacterCard";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Filters.module.css"

const Filters = ({ setGender, gender, status, setStatus, species, setSpecies }) => {

  const [input, setInput] = useState('')

  const handleFilter=(event)=>{
    setGender(event?.target?.value)
  }

  const handleStatus=(event)=>{
    setStatus(event?.target?.value)
  }

  const handleSpecies = (event) => {
    setInput(event?.currentTarget?.value)
  }

  const searchSpecies = ()=>{
    setSpecies(input)
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
      <select value={status} onChange={handleStatus}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className={styles.boxSpecies}>
        <input className={styles.input} value={input} placeholder="Species"  onChange={handleSpecies} />
        <button onClick={searchSpecies}>Search Species</button>
      </div>
      
    </div>
  );
};

export default Filters