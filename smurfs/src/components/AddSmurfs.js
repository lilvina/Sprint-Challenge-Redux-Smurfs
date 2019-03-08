import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from '../actions';

class AddSmurfs extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  addSmurfs = event => {
    event.preventDefault()

    const newSmurf = {...this.state}
    this.prop.addSmurfs(newSmurf)
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  resetForm = event => {
    event.preventDefault()
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.addSmurfs}>
        <input onChange={this.handleChange}
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          required/>
        <input onChange={this.handleChange}
          name="age"
          type="text"
          placeholder="age"
          value={this.state.age}
          required/>
        <input onChange={this.handleChange}
          name="height"
          type="text"
          placeholder="height"
          value={this.state.height}
          required/>

          <div>
            <input type="submit" />
            <input type="reset" onClick={this.resetForm} />
          </div>
      </form>

    )
  }
}

export default connect(null, {addSmurfs})(AddSmurfs)
