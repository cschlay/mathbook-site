import styled from "@emotion/styled";

const Container = styled.div`
  border: 2px dotted lightskyblue;
  text-align: center;
`;

export const AuthRequired = () => {
  return (
    <Container>
      <h3>Authentication Required</h3>
    </Container>
  );
};
