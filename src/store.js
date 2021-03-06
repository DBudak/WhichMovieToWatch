//Redux
import { applyMiddleware,createStore, compose } from 'redux';

//Routing
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//RootReducer
import  rootReducer from './reducers/rootReducer';

//Middleware for Async actions and logging
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';




//Middleware for Async actions and logging
const loggerMiddleware = createLogger();
const middleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
);

//Redux DevTools browser plugin enchancer for store
const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f,
    middleware
);

//Initial State
const initialState = {
    genres:{
        received : false,
        data : [],
        userChoice : []
    },
    movies: {
        received : false,
        noMoviesFound : false,
        data: [],
        featuredMovie : {}
    },
    config : {
        received : false,
        data : {}
    }
};

//Store
const store = createStore(rootReducer, initialState, middleware, enchancers);

//Routing History
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

