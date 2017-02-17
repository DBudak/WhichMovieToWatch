import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    /*ADD REDUCERS FOR STATES */
    routing: routerReducer
});

export default rootReducer;