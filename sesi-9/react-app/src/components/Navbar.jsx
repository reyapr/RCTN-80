import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link> {" | "}
      <Link to="/about">About</Link> {" | "}
      <Link to="/members">Members</Link> {" | "}
      <Link to="/pokemon">Pokemon</Link> {" | "}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
