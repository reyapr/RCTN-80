/* eslint-disable react/prop-types */
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

class SearchInput extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: "flex",
          gap: "3px",
          ...this.props.style,
        }}
      >
        <Input />
        <Button text={this.props.btnText || "Submit"} />
      </div>
    );
  }
}

export default SearchInput;
