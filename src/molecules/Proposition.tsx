import * as React from "react";
import { MathEnvironment } from "../atoms/MathEnvironment";

interface Props {
  children: string;
  name?: string;
}

export const Proposition = ({ children, name }: Props) => {
  return (
    <MathEnvironment type="Proposition" summary={name}>
      {children}
    </MathEnvironment>
  );
};
