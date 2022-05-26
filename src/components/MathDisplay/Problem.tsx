import { ReactNode } from "react";
import { EnvironmentContainer } from "./EnvironmentContainer";

interface Props {
  children: ReactNode;
  points?: number;
}

export const Problem = ({ children, points }: Props) => {
  return (
    <EnvironmentContainer type="Problem" summary={points && `${points} points`}>
      {children}
    </EnvironmentContainer>
  );
};
