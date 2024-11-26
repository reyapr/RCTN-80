import { configureStore } from '@reduxjs/toolkit' 
import counterReducer from '../reducers/counter'
import pokemonReducer from '../reducers/pokemon'
import authReducer from '../reducers/auth'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
        auth: authReducer
    },
})

export default store