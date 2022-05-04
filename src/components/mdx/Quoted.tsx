import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  border-right: 5px solid var(--color-sourced);
  padding-right: 1rem;
`;

export const Quoted = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};
