import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth";

const Auth = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(login({ email, password }))
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid",
          flexDirection: "column",
          padding: "10px",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Email:</span>{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password:</span>{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />  
        </div>
        <button onClick={handleLogin}>Login</button>
        {state.isSuccess && <span style={{ color: 'green'}}>Success Login</span>}
        {state.isLoading && <span style={{ color: 'yellowgreen' }}>Loading...</span>}
        {state.errorMsg && <span style={{ color: "red" }}>{state.errorMsg}</span>}
      </div>
    </div>
  );
};

export default Auth;
