import * as React from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: string;
  name?: string;
}

export const Definition = ({ children, name }: Props) => {
  return (
    <EnvironmentContainer type="Definition" summary={name}>
      {children}
    </EnvironmentContainer>
  );
};
