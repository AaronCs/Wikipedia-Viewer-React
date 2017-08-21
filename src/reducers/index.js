import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsReducer';

const index = combineReducers({
    searchResults: searchResultsReducer,
});

export default index;
