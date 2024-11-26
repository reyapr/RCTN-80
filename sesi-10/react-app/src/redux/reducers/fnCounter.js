/* eslint-disable no-case-declarations */

export const FN_INCREMENT = 'FN_INCREMENT';
export const FN_DECREMENT = 'FN_DECREMENT';

const initialState = {
    title: 'Fn Counter',
    counter: 0,
}

/**
 * action = {
 *  type: 'FN_INCREMENT'
 *  payload: 10
 * }
 */

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FN_INCREMENT:
            const payload = action.payload || 1
            return {
                ...state,
                counter: state.counter + payload
            } 
        case FN_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default reducer