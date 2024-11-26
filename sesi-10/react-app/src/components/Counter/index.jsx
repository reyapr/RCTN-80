/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.css';

const Counter = (props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

    return (
      <div className="counter-container">
        <h1 className="counter-title">{props.title}</h1>
        <div className={`counter-value ${isAnimating ? 'animate' : ''}`}>
          {props.count}
        </div>
        <div className="counter-buttons">
          <button 
            className="counter-button decrement"
            onClick={() => {
              props.decrement()
              handleAnimation()
            }}
          >
            -
          </button>
          <button 
            className="counter-button increment"
            onClick={() => {
              props.increment()
              handleAnimation()
            }}
          >
            +
          </button>
          <button 
            className="counter-button increment"
            onClick={() => {
              props.increment(10)
              handleAnimation()
            }}
          >
            + 10
          </button>
        </div>
      </div>
    );
}

export default Counter;
