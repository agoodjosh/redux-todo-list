import { combineReducers } from 'redux';

import todDoReducer from './todo_reducer';

export default combineReducers({
    todo: todDoReducer
});



