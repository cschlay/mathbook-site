import { MathEnvironment } from "../atoms/MathEnvironment";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  points?: number;
}

export const Problem = ({ children, points }: Props) => {
  return (
    <MathEnvironment type="Problem" summary={points && `${points} points`}>
      {children}
    </MathEnvironment>
  );
};
