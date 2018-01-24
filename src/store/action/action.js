import ActionTypes from '../constant';
import firebase from 'firebase'
import {auth , db} from '../firebase'
export function changeUserName(){
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})
    
}
export function incrementOfCounter(){
    return dispatch => dispatch({type: ActionTypes.INCREMENT})
    
}
export function decrementOfCounter(){
    return dispatch => dispatch({type: ActionTypes.DECREMENT})
}

export function addTodo (text){
    return  {
        type: ActionTypes.ADD_TODO, 
        payload: text 

    // firebase.database.ref('/').child('todo').push(text)
    //   .then(() => {
    //             console.log('success')
    //             db.ref( 'todo').once('value')
    //             .then((todo) => {
    //             let allTodos = todo.val();
    //              let allTodosArr = [];
    //                     for(var key in allTodos){
    //                         allTodosArr.push(allTodos[key]);
    //                     }
                
    }
}
      
export function delTodo (index){
    return {
        type : ActionTypes.DELETE_TODO,
        payload : index
    }
}
export function delAllTodo (index){
    return {
        type : ActionTypes.DEL_ALL_TODO,
    }
}
export function toggleTodo (text){
    return {
        type : ActionTypes.toggleTodo,
        text
    }
}
export function editTodo ( index , newTodo){
    return {
        type : ActionTypes.EDIT_TODO,
        payload : index,
        newTodo : newTodo
    }
}
