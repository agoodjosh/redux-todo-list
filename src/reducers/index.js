import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import todDoReducer from './todo_reducer';

export default combineReducers({
    todo: todDoReducer,
    form: formReducer
});



