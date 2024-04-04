import { SET_CHARACTERS } from "./actionsTypes";
import axios from "axios";

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const getCharacters = ({ page, gender, status, species, name })=>{
  return async (dispatch)=>{
    try{
      let query = `page=${page}`
      if(gender) query += `&gender=${gender}`
      if(status) query += `&status=${status}`
      if(species) query += `&species=${species}`
      if(name) query += `&name=${name}`
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?${query}`);
      dispatch({type: SET_CHARACTERS, payload: {characters: data?.results, totalPages: data?.info?.pages }})
    }catch(error){
      console.log(error)
    }
  }
}