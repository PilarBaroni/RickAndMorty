import { SET_CHARACTERS } from "../Actions/actionsTypes";

const initialState = {
  characters: [],
  allCharacters: [],
  totalPages: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {...state, ...action?.payload}
    default:
      return state;
  }
};

export default reducer;
