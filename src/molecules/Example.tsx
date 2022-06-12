import * as React from "react";
import { MathEnvironment } from "../atoms/MathEnvironment";

interface Props {
  children: string;
  name?: string;
}

export const Example = ({ children, name }: Props) => {
  return (
    <MathEnvironment type="Example" summary={name}>
      {children}
    </MathEnvironment>
  );
};
