import { useState } from "react";
import {
  Container,
  Count,
  ButtonContainer,
  ButtonMin,
  ButtonPlus,
} from "./styled-component";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h3>Counter</h3>
      <Count count={count}>{count}</Count>
      <br />
      <ButtonContainer>
        <ButtonMin onClick={() => setCount(count - 1)}>-</ButtonMin>
        <ButtonPlus onClick={() => setCount(count + 1)}>+</ButtonPlus>
      </ButtonContainer>
    </Container>
  );
};

export default Counter;
