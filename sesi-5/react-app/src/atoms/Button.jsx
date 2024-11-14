/* eslint-disable react/prop-types */
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        style={{
          padding: "5px",
          borderRadius: "3px",
          border: "1px solid",
          backgroundColor: "unset",
          ...this.props.style,
        }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
