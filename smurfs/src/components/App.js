import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import SmurfList from './SmurfList';
import AddSmurfs from './AddSmurfs';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <AddSmurfs />
        {this.props.fetchingSmurfs && (<div className="fetch">Fetching smurf...</div>)}
        {this.props.smurfs.map(smurf => {
          return (
            <SmurfList {...smurf} key={smurf.id} />
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, {getSmurfs})(App);
