const initialState = [];

const dataTodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.payload;
      break;
    case 'ADD_TODOS':
      return [...state, action.payload]
    case 'DELETE_TODOS':
    console.log("oke");
    console.log(action.payload);
    console.log(state);
      return state.filter((todos)=> todos.id !== action.payload )
    default:
      return state;
  }
}

export default dataTodoReducer;
