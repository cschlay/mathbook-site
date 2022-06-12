import { ReactNode } from "react";
import { MathEnvironment } from "../atoms/MathEnvironment";

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
