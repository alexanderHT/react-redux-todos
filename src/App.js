import React, { Component } from 'react';
import './App.css';
import ViewTodos from './components/list_todos'
import ViewFormTodos from './components/form_create_todos'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Create Your To Do Here</h3>
        <ViewFormTodos />
        <hr/>
        <ViewTodos />
      </div>
    )
  }
}

export default App;
