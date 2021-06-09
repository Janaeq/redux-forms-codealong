import React, { Component } from 'react'
// import connect to connect createTodo to the application store
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  // updates the component's state each time the user types something into the input field
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault() 
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            {/* set the input value to the component state so that every key stroke will update the state */}
            <input type='text' onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type='submit' onSubmit={this.handleSubmit} />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // sends the value of the user input that was captured in the local component state to the redux store
  return {
    // include the data from the form as the key called payload
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}
// this component only dispatch an action. no need to map state to props.
// in it's place, use null
export default connect(null, mapDispatchToProps)(CreateTodo);
