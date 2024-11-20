import { Link, Outlet } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <h1>Members Page</h1>
      <p>Select a member to be shown</p>
      <Link to="/members/udin">Udin</Link> {" | "}
      <Link to="/members/bambang">Bambang</Link>
      <Outlet />
    </div>
  );
};

export default Members;
