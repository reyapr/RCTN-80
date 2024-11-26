const initialState = {
    title: 'Counter',
    counter: 0,
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
            return state
    }
}

const store = Redux.createStore(reducer)

const state = store.getState()
document.querySelector('#title').innerHTML = state.title
document.querySelector('#counter').innerHTML = state.counter

const INCREMENT_ACTION = { type: INCREMENT }
const DECREMENT_ACTION = { type: DECREMENT }

document.querySelector('#increment').addEventListener('click', () => {
    store.dispatch(INCREMENT_ACTION)
})

document.querySelector('#decrement').addEventListener('click', () => {
    store.dispatch(DECREMENT_ACTION)
})

store.subscribe(() => {
    const state = store.getState()
    document.querySelector('#counter').innerHTML = state.counter
})
