//Basic React
import React from 'react';
import ReactDOM from 'react-dom';

//Container
import App from './App';

//Components for routing
import Movies from './containers/Movies';

//Routing
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

//Router
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/index.html' component={App}>
          <IndexRoute component={Movies}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
