import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import {fetchTodos, deleteTodos, checkTodos, editTodos} from '../actions/index'
import loading from '../../public/loading.gif'

class TodoList extends React.Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
      currentEdit: '',
      selectedID: 0
    }
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.handleChangeEdit = this.handleChangeEdit.bind(this)
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
  }

  // ComponentDidMount
  componentDidMount(){
    this.props.fetchTodos()
  }

  // click edit
  handleClickEdit(id, text, status){
    this.setState({
      selectedID: id,
      currentEdit: text,
      currentStatus: status
    })
  }

  // submit edit
  handleSubmitEdit(event){
    event.preventDefault()
    this.props.editTodos(this.state.selectedID, this.state.currentEdit, this.state.currentStatus)
    this.setState({
      selectedID: 0
    })
  }

  // upate value edit
  handleChangeEdit(event){
    this.setState({
      currentEdit: event.target.value
    })
  }

  // render list of todos
  renderList () {
    if (this.props.todos.length === 0){
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
                {
                  (this.state.selectedID === item.id) ?
                  <form onSubmit={this.handleSubmitEdit}>
                    <input type="text" value={this.state.currentEdit} onChange={this.handleChangeEdit}/>
                  </form>
                  :
                  <span className="card-title">{item.text}</span>
                }
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
                <a onClick={()=>{this.handleClickEdit(item.id, item.text, item.status)}}>Edit</a>
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
  checkTodos: (id, text, status) => dispatch(checkTodos(id, text, status)),
  // editTodos di panggil dari import yang ada di atas yang berada di file index.js dalam folder action
  editTodos: (id, text, status) => dispatch(editTodos(id, text, status))

});

// connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
