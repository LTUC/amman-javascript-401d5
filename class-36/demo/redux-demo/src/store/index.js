import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //optional
import votesReducer from './votes-reducer';

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({ votes: votesReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
