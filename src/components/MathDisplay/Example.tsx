import * as React from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: string;
  name?: string;
}

export const Example = ({ children, name }: Props) => {
  return (
    <EnvironmentContainer>
      <b>Example{name && ` (${name})`}.</b> {children}
    </EnvironmentContainer>
  );
};
