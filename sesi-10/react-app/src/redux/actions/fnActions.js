import { FN_DECREMENT, FN_INCREMENT } from "../reducers/fnCounter"


// incrementAction(10) => {type: 'FN_INCREMENT, payload: 10}
export const incrementAction = (number) => ({
    type: FN_INCREMENT,
    payload: number
})
export const DECREMENT_ACTION = { type: FN_DECREMENT }