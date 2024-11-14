import React from "react";
import MainPageLayout from "../templates/MainPageLayout";
import Counter from "../molecules/Counter";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
      counter: 0, // 1
      counter2: 0,
    };
    this.info = {
      name: "Udin",
    };
  }

  getUsername = () => {
    return this.state.username;
  };

  updateCounter = (n) => {
    this.setState({
      counter: this.state.counter + n,
    });
  };

  updateCounter2 = (n) => {
    this.setState({
      counter2: this.state.counter2 + n,
    });
  };

  render() {
    return (
      <MainPageLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h4>
            Welcome {this.getUsername()} & {this.info.name}
          </h4>
          <Counter
            title="Text 01"
            counter={this.state.counter}
            updateCounter={this.updateCounter}
          />
        </div>
      </MainPageLayout>
    );
  }
}

export default Home;
