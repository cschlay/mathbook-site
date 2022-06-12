import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TitleHeader = ({ children }: Props) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};
