import { filterCards } from "../../Redux/Actions/actions";
import CharacterCard from "../CharacterCard/CharacterCard";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";


const Filters = ({ allCharacters }) => {
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
        setAux(true);
    }

    return (
        <div >
            <select onChange={handleFilter} >
                <option value="all" >All Characters</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >Unknown</option>
            </select>
            {
                allCharacters?.map((character) => {
                    return (
                        <CharacterCard key={character.id} character={character} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      allCharacters: state.characters,
      filteredCharacters: state.characters.filter(character => character.gender === state.filter),
    }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(Filters);