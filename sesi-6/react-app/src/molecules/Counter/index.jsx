import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Counter Class Component",
    };
  }

  increment = () => {
    this.setState({});
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log(this.state, "state class component");

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{this.state.title}</h2>
        <h2>{this.state.count}</h2>
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
