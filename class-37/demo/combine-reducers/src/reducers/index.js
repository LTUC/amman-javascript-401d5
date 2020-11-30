import { combineReducers } from 'redux';
import candidates from './candidates';
import votes from './votes';

export default combineReducers({ candidates, votes });
