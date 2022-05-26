import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.a`
  color: var(--color-brand) !important;
  font-family: var(--font-logo);
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = () => {
  return (
    <Link href="/">
      <Container>Mathbook Project</Container>
    </Link>
  );
};
