/* eslint-disable react/prop-types */
import React from "react";

class Counter extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isTitleChange = nextProps.title !== this.props.title;
    const isCountChange = this.state.count !== nextState.count;
    return isCountChange || isTitleChange;
  }

  render() {
    console.log("render counter");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{this.props.title}</h2>
        <h3>{this.state.count}</h3>
        <br />
        <div style={{ display: "flex", gap: "13px" }}>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
