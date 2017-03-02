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

export const actionFetchTodos = (todos) => {
  console.log(todos);
  return {
    type: 'FETCH_TODOS',
    payload: todos
  }
}
// ini jalan dulu
export const fetchTodos = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch('http://localhost:3004/todos')
        .then(res => res.json())
        .then(todos => dispatch(actionFetchTodos(todos)))
      }
    , 3000);
  }
}

export const addTodos = (text) => {
  return (dispatch) => {
    setTimeout(() => {
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
    , 3000);
  }
}

// delete
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
