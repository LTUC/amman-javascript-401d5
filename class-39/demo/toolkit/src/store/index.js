import { configureStore } from '@reduxjs/toolkit';
import reducer from './pokemon';
import testReducer from './p';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  pokemon: reducer,
  test: testReducer,
});
export default configureStore({ reducer: rootReducer });
