const initialState = [];

const dataTodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    case 'ADD_TODOS':
      return [...state, action.payload]
    case 'DELETE_TODOS':
      return state.filter((todos)=> todos.id != action.payload )
    case 'CHECK_TODOS':
      return state.map((todos)=>{
        if( todos.id == action.payload.id ){
          return { id: todos.id, text: todos.text, status: todos.status ,status: !todos.status }
        }else{
          return todos
        }
      })

    default:
      return state;
  }
}

export default dataTodoReducer;
