/* eslint-disable no-case-declarations */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const initialState = {
    title: 'Class Counter',
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            const payload = action.payload || 1
            return {
                ...state,
                counter: state.counter + payload
            } 
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default reducer