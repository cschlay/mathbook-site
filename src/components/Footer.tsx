import * as React from "react";
import { LicenseAttribution } from "./LicenseAttribution";
import { Link } from "./Link";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background: #110707;
  color: #c4c0c0;
  min-height: 10vh;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <LicenseAttribution />
      <small>
        Source code licensed under{" "}
        <Link href="https://github.com/cschlay/mathbook-site/blob/main/LICENSE">
          GNU AGPLv3
        </Link>{" "}
        and content with{" "}
        <Link href="https://openlogicproject.org/olp-license/">CC BY 4.0</Link>.
      </small>
    </StyledFooter>
  );
};
