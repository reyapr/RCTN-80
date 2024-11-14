import { useState } from "react";

export const useCounter = (defaultState) => {
  const [state, setState] = useState(defaultState); // [0, fn]

  const increment = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });

    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  const decrement = () => {
    setState({
      ...state,
      count: state.count - 1,
    });
  };

  return {
    state,
    increment,
    decrement,
  };
};
