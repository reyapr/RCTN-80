import { justifyCenter } from "./common-styles/styles";
import Counter from "./components/Counter";
import PokeList from "./components/PokeList";
import PokeListWithSelect from "./components/PokeListWithSelect";

function App() {
  return (
    <>
      <div style={justifyCenter}>
        <h1>Learn React 2024</h1>
      </div>
      <div style={justifyCenter}>
        <h2>Styling on React</h2>
      </div>
      <br />
      <Counter />
      <hr />
      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <PokeListWithSelect />
        <PokeList />
      </div>
    </>
  );
}

export default App;
