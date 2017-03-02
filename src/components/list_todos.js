import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import {fetchTodos, deleteTodos} from '../actions/index'

class TodoList extends React.Component {
  // ComponentDidMount
  componentDidMount(){
    this.props.fetchTodos()
  }

  // render list of todos
  renderList () {
    return this.props.todos.map((item) => {
      return (
        <div className="col s4" key={item.id}>
          <div className="card darken-1">
            <div className="card-content">
              <span className="card-title">{item.text}</span>
            </div>
            <div className="card-action">
              <a href="#">Edit</a>
              <a onClick={()=>this.props.deleteTodos(item.id)}>Delete</a>
            </div>
          </div>
        </div>
      )
    })
  }

  // render all
  render () {
    return (
      <div className='row'>
        {this.renderList()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  deleteTodos: (id) => dispatch(deleteTodos(id))
});

// connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
