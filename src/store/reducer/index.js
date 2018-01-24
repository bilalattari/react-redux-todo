import reducer from './reducer'
import counter from './counter'
import todo from './todo'
import visibilityFilter from './setVisibilty'
import {combineReducers} from 'redux'
import {firebaseStateReducer} from 'react-redux-firebase'
const rootReducers =  combineReducers({
    userName : reducer,
    counter : counter,
    todo : todo,
    firbase : firebaseStateReducer
})

export default rootReducers;