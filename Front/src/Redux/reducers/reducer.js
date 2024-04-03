import { FILTER } from "../Actions/actionsTypes";

const initialState = {
  characters: [], 
  allCharacters: [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      const filteredCharacters = action.payload === "all" 
        ? [...state.allCharacters] 
        : state.allCharacters.filter(character => character.gender === action.payload);
      return {
        ...state,
        characters: filteredCharacters
      };
    default:
      return state;
  }
};

export default reducer;