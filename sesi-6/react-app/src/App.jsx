/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Counter from "./molecules/Counter";
import FnCounter from "./molecules/FnCounter";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>{props.content}</p>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <p>&copy; {props.content}</p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React App",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum aperiam recusandae quidem, nostrum eveniet nam nobis, fugit tempora ut omnis molestias officia ipsam commodi! Nesciunt libero soluta maxime fuga praesentium!",
      footer: "2024 React App",
    };
  }

  increment = () => {};

  render() {
    // logic here

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header title={this.state.title} />
        <hr style={{ width: "100%" }} />
        <Content content={this.state.content} />
        <br />
        <Counter />
        <hr style={{ width: "50%" }} />
        <FnCounter />
        <hr style={{ width: "100%" }} />
        <Footer content={this.state.footer} />
      </div>
    );
  }
}

export default App;
