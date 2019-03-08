import React from 'react';
import {connect} from 'react-redux';

import { deleteSmurfs } from '../actions';

const SmurfList = props => {
  return (
    <div className="smurf-list" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.height}</p>
      <p>{props.id}</p>
      <button onClick={props.deleteSmurfs} value={props.id}>Delete Smurf</button>
    </div>
  )

}

export default connect(null, {deleteSmurfs})(SmurfList)
