import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import {fetchTodos, deleteTodos, checkTodos} from '../actions/index'
import loading from '../../public/loading.gif'

class TodoList extends React.Component {
  // ComponentDidMount
  componentDidMount(){
    this.props.fetchTodos()
  }

  // render list of todos
  renderList () {
    if (this.props.todos.length == 0){
      return (
        <div className="center">
          <img src={loading} />
        </div>
      )
    }else{
      return this.props.todos.map((item) => {
        return (
          <div className="col s4" key={item.id}>
            <div className="card darken-1">
              <div className="card-content">
                <span className="card-title">{item.text}</span>
                <div>
                  <p>
                    STATUS :
                  </p>
                  {
                    (item.status) ? <i className="material-icons green-text">done</i> : <i className="material-icons red-text">clear</i>
                  }
                </div>

              </div>
              <div className="card-action">
                {/* ini menjalankan yang ada di props */}
                <a onClick={()=>this.props.checkTodos(item.id, item.text, item.status)}>check</a>
                <a href="#">Edit</a>
                <a onClick={()=>this.props.deleteTodos(item.id)}>Delete</a>
              </div>
            </div>
          </div>
        )
      })
    }
  } // render

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
  // fetchTodos di panggil dari import yang ada di atas yang berada di file index.js dalam folder action
  fetchTodos: () => dispatch(fetchTodos()),
  // deleteTodos di panggil dari import yang ada di atas yang berada di file index.js dalam folder action
  deleteTodos: (id) => dispatch(deleteTodos(id)),
  // checkTodos di panggil dari import yang ada di atas yang berada di file index.js dalam folder action
  checkTodos: (id, text, status) => dispatch(checkTodos(id, text, status))
});

// connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
