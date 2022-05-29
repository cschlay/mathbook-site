import { BaseSyntheticEvent, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  /** The function returned by handleSubmit from react-hook-form. */
  onSubmit: (event: BaseSyntheticEvent) => Promise<void>;
}

export const Form = ({ children, onSubmit }: Props) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

const Container = styled.form`
  border: 2px dotted lightskyblue;
  padding: 1rem;
`;
