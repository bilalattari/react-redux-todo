import ActionTypes from '../constant';

const visibilityFilter  = (state = 'Show All ' , action) => {
    switch (action.type){
        case ActionTypes.SET_VISIBILITY_FILTER : 
        return action.filter
        default :
        return state
    }
}
export default visibilityFilter
