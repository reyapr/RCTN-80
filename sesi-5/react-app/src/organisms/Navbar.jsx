/* eslint-disable react/prop-types */
import React from "react";
import SearchInput from "../molecules/SearchInput";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: "aliceblue",
        }}
      >
        <h3>{this.props.title}</h3>
        <SearchInput />
      </div>
    );
  }
}

export default Navbar;
