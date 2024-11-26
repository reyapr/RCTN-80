import { INCREMENT, DECREMENT, RESET_COUNTER } from "../reducers/counter";

export const INCREMENT_ACTION = () => {
    return async (dispatch) => {
        const data = await new Promise((resolve) => setTimeout(() => resolve('test'), 2000));

        dispatch({ type: INCREMENT, payload: data })
    }
}
export const DECREMENT_ACTION = { type: DECREMENT }
export const RESET_COUNTER_ACTION = { type: RESET_COUNTER }