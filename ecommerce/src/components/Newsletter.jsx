import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 25px;
`;

const Desc = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-bottom: 25px;
  ${mobile({
    textAlign: "center",
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updated from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MailIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
