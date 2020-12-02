import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: [],
  reducers: {
    addOne(state, action) {
      console.log('HERE???');
      state.push({ name: action.payload });
    },
    removeOne(state, action) {
      console.log('WHAT?');
      return state.filter((poke) => poke.name !== action.payload);
    },
  },
});

export const { addOne, removeOne } = testSlice.actions;

export default testSlice.reducer;
