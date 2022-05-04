import { ReactNode } from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: ReactNode;
}

export const Problem = ({ children }: Props) => {
  return (
    <EnvironmentContainer>
      <b>Problem.</b> {children}
    </EnvironmentContainer>
  );
};
