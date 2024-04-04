import { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterList from "../../components/CharacterList/Characterlist";
import NavBar from "../NavBar/NavBar";
import {useSelector, useDispatch} from 'react-redux'
import { getCharacters } from "../../Redux/Actions/actions";

const LandingPage = () => {
  const {characters} = useSelector(state=>state)
  const dispatch = useDispatch()
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({name: '', page:1, gender: '', species: '', status: ''})
  const handleSearch = (name) =>{
    setFilters((prev)=>({...prev, name }))
  }

  const handleClear = ()=>{
    setFilters({name: '', page:1, gender: '', species: '', status: ''})
  }

  useEffect(()=>{
    dispatch(getCharacters(filters))
  },[filters])

  const setPage = (page) => {
    setFilters((prev)=>({...prev, page}))
  }

  const setGender = (gender)=>{
    setFilters((prev)=>({...prev, gender}))
  }

  const setStatus = (status) =>{
    setFilters((prev)=>({...prev, status}))
  }

  return (
    <div style={{ backgroundColor: "beige" }} >
      <NavBar onSearch={handleSearch} onClear={handleClear} status={filters.status} setStatus={setStatus} gender={filters.gender} setGender={setGender}  />
      <CharacterList page={filters.page}  setPage={setPage} characters={characters} totalPages={totalPages} />
    </div>
  );
};

export default LandingPage;
