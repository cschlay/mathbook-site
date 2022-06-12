import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

export const MdxQuote = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border-right: 5px solid var(--color-sourced);
  padding-right: 1rem;
`;
