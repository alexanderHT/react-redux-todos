import { combineReducers } from 'redux'
// import and declare data todolist to state
import dataReducerTodo from './reducer_todos'
// 

const rootReducers = combineReducers({
  todos: dataReducerTodo
})

export default rootReducers
