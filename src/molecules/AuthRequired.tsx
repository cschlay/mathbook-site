import styled from "@emotion/styled";

const Container = styled.div`
  border: 2px dotted lightskyblue;
  text-align: center;
`;

interface Props {
  message: string;
}

export const AuthRequired = ({ message }: Props) => {
  return (
    <Container>
      <h3>Authentication Required</h3>
      <p>{message}</p>
    </Container>
  );
};
