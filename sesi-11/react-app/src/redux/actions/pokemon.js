import axios from "axios";
import { STORE_DETAILS, STORE_LIST } from "../reducers/pokemon";

export const getPokemonList = () => {
  return async (dispatch) => {
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const { data } = await axios.get(pokeUrl);

    dispatch({
      type: STORE_LIST,
      payload: data.results,
    });
  };
};

export const getPokemonDetails = (url) => {
  return async (dispatch) => {
    const { data } = await axios.get(url);

    dispatch({
      type: STORE_DETAILS,
      payload: data,
    });
  };
};