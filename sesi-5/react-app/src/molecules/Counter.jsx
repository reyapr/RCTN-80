/* eslint-disable react/prop-types */
import React from "react";
import Button from "../atoms/Button";
import "./counter-styles.css";

class Counter extends React.Component {
  render() {
    console.log(this, "this");

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{this.props.counter}</h1>
        <br />
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            onClick={() => this.props.updateCounter(-1)}
            className="min-btn"
            text="-"
          />
          <Button
            onClick={() => this.props.updateCounter(1)}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid",
              minWidth: "50px",
            }}
            text="+"
          />
        </div>
      </div>
    );
  }
}

export default Counter;
