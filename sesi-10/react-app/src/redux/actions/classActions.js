import { DECREMENT, INCREMENT } from "../reducers/classCounter"

export const incrementAction = (number) => ({
    type: INCREMENT,
    payload: number
})
export const DECREMENT_ACTION = { type: DECREMENT }