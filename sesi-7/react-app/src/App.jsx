import { useState } from "react";
import Counter from "./components/Counter";
import Starwars from "./components/Starwars";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [title, setTitle] = useState("Learn React");

  return (
    <>
      <div>
        <Counter title={title} />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <button onClick={() => setTitle(inputTitle)}>Submit</button>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Starwars />
      </div>
    </>
  );
}

export default App;
