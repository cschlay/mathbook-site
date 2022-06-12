import styled from "@emotion/styled";

interface SolvedLabelProps {
  points: number;
}

const Container = styled.small`
  color: limegreen;
`;

export const SolvedLabel = ({ points }: SolvedLabelProps) => {
  return (
    <Container>
      Exercise completed. <strong>+{points}</strong> points
    </Container>
  );
};
