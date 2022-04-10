import React from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: React.ReactNode;
  id: string;
}

export const Problem = ({ children, id }: Props): JSX.Element => {
  return (
    <EnvironmentContainer>
      <b>Problem.</b> {children}
    </EnvironmentContainer>
  );
};
