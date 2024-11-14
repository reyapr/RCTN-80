import { useCounter } from "./useCounter";
import { usePokeName } from "./usePokeName";

const FnCounter = () => {
  const { name: pokeName, setUrl: changeUrl } = usePokeName(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  const { state, increment, decrement } = useCounter({
    count: 0,
    title: "Counter Functional Component",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>{pokeName}</h3>
      <h2>{state.title}</h2>
      <h2>{state.count}</h2>
      <br />
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <select onChange={(e) => changeUrl(e.target.value)}>
          <option value="https://pokeapi.co/api/v2/pokemon/ditto">ditto</option>
          <option value="https://pokeapi.co/api/v2/pokemon/pikachu">
            pikachu
          </option>
        </select>
      </div>
    </div>
  );
};

export default FnCounter;
