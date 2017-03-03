import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { search } from '../actions/index.js'
import { addTodos } from '../actions/index'

class FormCreateTodos extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      currentText: ''
    };
  }

  // when user type something in input it will trigger the method (handleInputCreate)
  handleInputCreate(event){
    this.setState({
      currentText: event.target.value
    });
  }

  // when user hit enter it will trigger this method ()
  handleSubmitCreate(event){
    event.preventDefault()
    this.props.addTodos(this.state.currentText)
    this.setState({
      currentText: ''
    });
  }

  // render form input for create to do list
  render(){
    return(
      <form onSubmit={this.handleSubmitCreate.bind(this)}>
        <input type="text" placeholder="input here" className="center" onChange={this.handleInputCreate.bind(this)} value={this.state.currentText}></input>
      </form>
    )
  }
}


//ini untuk menyuruh, menjalakan yang ada di action
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodos}, dispatch)
}


// connect to reducer index.js in folder reducers
export default connect(null, mapDispatchToProps)(FormCreateTodos)
