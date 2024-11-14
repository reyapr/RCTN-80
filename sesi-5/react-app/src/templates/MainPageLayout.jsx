/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

class MainPageLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Navbar title="Learn React" menus={["Home", "Profile"]} />
          <div
            style={{
              padding: "25px",
            }}
          >
            {this.props.children}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPageLayout;
