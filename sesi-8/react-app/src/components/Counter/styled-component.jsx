import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.b`
  color: ${(props) => {
    if (props.count < 0) {
      return "red";
    } else if (props.count > 0) {
      return "green";
    } else {
      return "black";
    }
  }};
`;

export const Button = styled.button`
  opacity: 0.7;
  min-width: 50px;
  border-radius: 5px;
  color: white;
  border: 1px solid;
  padding: 3px;
  cursor: pointer;
`;

export const ButtonPlus = styled(Button)`
  background-color: green;
`;
export const ButtonMin = styled(Button)`
  background-color: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
