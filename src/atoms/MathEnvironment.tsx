import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  summary: string;
  type: string;
}

export const MathEnvironment = ({ children, summary, type }: Props) => {
  return (
    <Container>
      <Header>
        <b>{type}</b> <i>{summary}</i>
      </Header>
      <section>{children}</section>
    </Container>
  );
};

const Header = styled.header`
  border-bottom: var(--border);
  display: flex;
  gap: 1ch;
  padding: calc(var(--space-md) / 2) var(--space-md);
`;

const Container = styled.div`
  border: 1px solid #c7c3c3;
  border-radius: 0.2rem;
  margin: 2rem 0;
  > section {
    p {
      margin: 0.5rem 0;
    }
    padding: 0.5rem 1rem;
  }
`;
