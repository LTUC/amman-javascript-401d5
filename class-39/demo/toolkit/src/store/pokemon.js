import { createSlice } from '@reduxjs/toolkit';
import { addOne, removeOne } from './p';
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter((poke) => poke.name !== action.payload);
    },
  },
});

export const { add, remove } = pokemonSlice.actions;

export const get = () => async (dispatch) => {
  const results = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemon = await results.json();
  pokemon.results.forEach((poke) => dispatch(add(poke.name)));
};

export const addAll = (name) => (dispatch) => {
  dispatch(add(name));
  dispatch(addOne(name));
};

export default pokemonSlice.reducer;
