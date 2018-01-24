import ActionTypes from '../constant';
const INITIAL_STATE = {
    counter : 0,
}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return ({
                ...state,
                counter: state.counter + 1
            })
        case ActionTypes.DECREMENT:
            return ({
                ...state,
                counter: state.counter - 1
            })
        default:
            return state;
    }

}