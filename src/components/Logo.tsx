import styled from "@emotion/styled";
import { Link } from "gatsby";

const Container = styled.span`
  color: var(--color-brand) !important;
  font-family: var(--font-logo);
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = () => {
  return (
    <Link to="/">
      <Container>Mathbook Project</Container>
    </Link>
  );
};
