import { combineReducers } from 'redux';
import id from './id';
import stName from './stName';
import sort from './sort';

const reducer = combineReducers({
    id, 
    stName,
    sort
});

export default reducer;