/* eslint-disable react/prop-types */
import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_COUNTER_ACTION } from '../redux/actions/counter';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const state = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(INCREMENT_ACTION());
  };

  const decrement = () => {
    dispatch(DECREMENT_ACTION);
  };

  const reset = () => {
    dispatch(RESET_COUNTER_ACTION);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-title">{state.title}</h2>
      <div className="counter-display">{state.counter}</div>
      <div className="counter-controls">
        <button className="counter-button decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-button reset" onClick={reset}>
          Reset
        </button>
        <button className="counter-button increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
