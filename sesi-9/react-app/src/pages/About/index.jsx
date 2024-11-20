import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is my About Page</p>
      <Link to="/about/company">About The Company</Link> {" | "}
      <Link to="/about/me">About Me</Link>
    </div>
  );
};

export default About;
