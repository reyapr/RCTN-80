import { useState } from "react";
import Counter from "./components/Counter";
import Starwars from "./components/Starwars";
import ErrorBoundary from "./components/ErrorBoundary";
import StarwarsFn from "./components/StarwarsFn";
import CounterFn from "./components/CounterFn";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputTitle2, setInputTitle2] = useState("");
  const localTitle = localStorage.getItem("APP_TITLE");
  const localTitle2 = localStorage.getItem("APP_TITLE_2");
  const [title, setTitle] = useState(localTitle || "Learn React");
  const [title2, setTitle2] = useState(localTitle2 || "Learn React");
  const [isCounterShow, setCounterShow] = useState(true);

  const handleTitleChange = () => {
    // make Error
    // setTitle(Number(10));

    setTitle(inputTitle);
    localStorage.setItem("APP_TITLE", inputTitle);
  };

  const handleTitleChange2 = () => {
    // make Error
    // setTitle(Number(10));

    setTitle2(inputTitle2);
    localStorage.setItem("APP_TITLE_2", inputTitle2);
  };

  return (
    <ErrorBoundary>
      <div>
        <div
          style={{
            display: "flex",
            gap: "95px",
            justifyContent: "center",
          }}
        >
          {isCounterShow && <Counter title={title} />}
          {isCounterShow && <CounterFn title={title2} />}
        </div>
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
          <button onClick={handleTitleChange}>Submit</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            value={inputTitle2}
            onChange={(e) => setInputTitle2(e.target.value)}
          />
          <button onClick={handleTitleChange2}>Submit</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => setCounterShow(!isCounterShow)}>
            {isCounterShow ? "hide" : "show"}
          </button>
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
        <div
          style={{
            display: "flex",
            gap: "95px",
          }}
        >
          <Starwars />
          <StarwarsFn />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
