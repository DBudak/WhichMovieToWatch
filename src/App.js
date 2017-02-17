//Serving actions to an App
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions';

//A Container
import Main from './containers/Main'

//Serve state as props to a Component
function mapStateToProps(state){
  return {
    /* ADD STATES */
  }
}

//Serve actions as props to a Component
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

//Choosing which Component should receive the serves described above
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
