// add todos
export const actionAddTodos = (text,id) => {
  console.log("yang ada di action : " + text);
  return {
    type: 'ADD_TODOS',
    payload: {
      id:id,
      text: text,
      status: false
    }
  }
}

export const addTodos = (text) => {
  return (dispatch) => {
      fetch('http://localhost:3004/todos',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text, status: false})
      })
        .then(res => res.json())
        .then(todos => {
          console.log(todos);
          dispatch(actionAddTodos(todos.text,todos.id))})
  }
}

// get data from database
export const actionFetchTodos = (todos) => {
  console.log(todos);
  return {
    type: 'FETCH_TODOS',
    payload: todos
  }
}
// ini yang di pangil dulu dari component untuk update yang ada di datbase, terus baru update state dengan memanggil funciton yang diatas
export const fetchTodos = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch('http://localhost:3004/todos')
        .then(res => res.json())
        .then(todos => dispatch(actionFetchTodos(todos)))
      }
    , 1500);
  }
}

// delete section
export const actionDeleteTodos = (id) => {
  console.log(id);
  return {
    type: 'DELETE_TODOS',
    payload: id
  }
}

export const deleteTodos = (id) => {
  return (dispatch) => {
      fetch('http://localhost:3004/todos/'+id,
      {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(todos => {
          console.log(todos);
          dispatch(actionDeleteTodos(id))})
  }
}

// check section
export const actionCheckTodos = (id, text, status) => {
  return {
    type: 'CHECK_TODOS',
    payload: {
      id : id,
      text : text,
      status : status
    }
  }
}

export const checkTodos = (id, text, status) =>{
  return (dispatch) => {
      fetch('http://localhost:3004/todos/'+id,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text, status: !status})
      })
        .then(res => res.json())
        .then(todos => {
          dispatch(actionCheckTodos(todos.id, todos.text, todos.status))})
  }
}

// edit section
export const actionEditTodos = (id, text, status) => {
  return {
    type: 'EDIT_TODOS',
    payload: {
      id : id,
      text : text,
      status : status
    }
  }
}

export const editTodos = (id, text, status) =>{
  return (dispatch) => {
      fetch('http://localhost:3004/todos/'+id,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text, status: status})
      })
        .then(res => res.json())
        .then(todos => {
          dispatch(actionEditTodos(todos.id, todos.text, todos.status))})
  }
}
