import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  border-left: 3px solid var(--color-sourced);
  padding-left: 0.5rem;
`;

export const Quoted = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};
