import React from "react";
import Navigation from "./navigation";
import * as ACTIONS from './actions/movie'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
const App = () => {
  return (
       <Navigation></Navigation>
  )
};

const mapStateToProps = state => {
     return {
          movies: state.movies.movies
     }
}

const mapDispatchToProps = dispatch => {
     const actions = ACTIONS
     const actionMap = { actions: bindActionCreators(actions, dispatch) }
     return actionMap
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
