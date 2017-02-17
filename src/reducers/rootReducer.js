import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import genres from './genres';

const rootReducer = combineReducers({
    /*ADD REDUCERS FOR STATES */
    genres,
    routing: routerReducer
});

export default rootReducer;