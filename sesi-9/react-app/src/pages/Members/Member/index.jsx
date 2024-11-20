import { useParams } from "react-router-dom";

const Member = () => {
  const params = useParams();

  return (
    <div>
      <h3>{params.name}</h3>
      <p>Hello World! My name is {params.name}</p>
    </div>
  );
};

export default Member;
