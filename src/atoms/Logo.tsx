import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.span`
  color: var(--color-brand) !important;
  font-family: var(--font-logo);
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Container>Mathbook Project</Container>
      </a>
    </Link>
  );
};
