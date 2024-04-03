import { FILTER } from "./actionsTypes";

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
