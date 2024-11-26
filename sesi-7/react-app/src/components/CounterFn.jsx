/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";

const CounterFn = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // component did mount in here if needed

    return () => {
      localStorage.removeItem("APP_TITLE_2");
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{props.title.toUpperCase()}</h2>
      <h3>{count}</h3>
      <br />
      <div style={{ display: "flex", gap: "13px" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default memo(CounterFn, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});
