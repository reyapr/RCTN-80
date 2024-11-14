/* eslint-disable react/prop-types */
import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        className={this.props.className}
        style={{
          padding: "7px",
          borderRadius: "5px",
          border: "1px solid",
          fontSize: "10px",
          minWidth: "100px",
          ...this.props.style,
        }}
        onChange={this.props.onChange}
        type="text"
        value={this.props.value}
      />
    );
  }
}

export default Input;
