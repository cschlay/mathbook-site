import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  children: React.ReactNode;
}

export const TitleHeader = ({ children }: Props): JSX.Element => {
  return (
    <>
      <h1>{children}</h1>
      <Helmet title="Mathbook Project" defer={false} />
    </>
  );
};
