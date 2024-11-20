import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = () => {
    localStorage.setItem("token", "isLogin");
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click button to login</p>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};

export default Login;
