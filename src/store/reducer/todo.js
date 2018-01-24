import ActionTypes from '../constant';
const INITIAL_STATE  =[]
const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state , 
         action.payload
        ]
    case  ActionTypes.DELETE_TODO :
    console.log(state)
    state.splice(action.payload , 1) 
    return[
      ...state
    ]

    case ActionTypes.DEL_ALL_TODO :
     state = []  
    return [
      ...state
    ]

    case ActionTypes.EDIT_TODO :
    state.splice(action.payload , 1 , action.newTodo)
    return [
      ...state
    ]
    default:
      return state
  }
}

export default todos
