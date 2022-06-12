import * as React from "react";
import { MathEnvironment } from "../atoms/MathEnvironment";

interface Props {
  children: string;
  name?: string;
}

export const Definition = ({ children, name }: Props) => {
  return (
    <MathEnvironment type="Definition" summary={name}>
      {children}
    </MathEnvironment>
  );
};
