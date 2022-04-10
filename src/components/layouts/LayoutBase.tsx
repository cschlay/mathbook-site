import * as React from "react";
import { Footer } from "../Footer";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 5rem;
`;

export const LayoutBase = ({ children }: Props): JSX.Element => {
  return (
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
