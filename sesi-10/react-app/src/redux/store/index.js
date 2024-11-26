/* eslint-disable no-case-declarations */
import { configureStore } from '@reduxjs/toolkit';
import classCounterReducer from '../reducers/classCounter'
import fnCounterReducer from '../reducers/fnCounter'

const store = configureStore({
    reducer: {
        classCounter: classCounterReducer,
        fnCounter: fnCounterReducer
    }
})

export default store