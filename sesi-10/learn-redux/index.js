import { createStore } from 'redux'

const initialState = {
    title: 'Counter',
    counter: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return { 
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT: 
            return { 
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
})

const INCREMENT_ACTION = { type: INCREMENT }
const DECREMENT_ACTION = { type: DECREMENT }

store.dispatch(INCREMENT_ACTION)
store.dispatch(INCREMENT_ACTION)
store.dispatch(DECREMENT_ACTION)