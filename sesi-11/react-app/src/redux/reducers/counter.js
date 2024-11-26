const initialState = {
  title: "Counter",
  counter: 0,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET_COUNTER = "RESET_COUNTER";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0
      }
    default:
      return state;
  }
};

export default reducer
