import * as React from "react";
import { Link } from "../atoms/Link";
import styled from "@emotion/styled";

const Container = styled.p`
  font-size: 0.8rem;
  padding: 0.5rem;
  line-height: 1.5;
  max-width: 60vw;
`;

export const LicenseAttribution = (): JSX.Element => {
  return (
    <Container>
      We use open source and public domain math textbooks as base material. The
      included texts are from{" "}
      <Link href="https://openlogicproject.org/about/" newTab={true}>
        The Open Logic Project
      </Link>{" "}
      (CC BY 4.0). The material has been modified, combined, removed, or
      extended. Quoted content is explicitly highlighted on right side.
    </Container>
  );
};
