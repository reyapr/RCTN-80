import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div className="my-bg">
      <h1>Hello React!</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
