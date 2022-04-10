import * as React from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: string;
  name?: string;
}

export const Proposition = ({ children, name }: Props) => {
  return (
    <EnvironmentContainer>
      <b>Proposition{name && ` (${name})`}.</b> {children}
    </EnvironmentContainer>
  );
};
