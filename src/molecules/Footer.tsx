import { LicenseAttribution } from "./LicenseAttribution";
import { Link } from "../atoms/Link";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background: #110707;
  color: #c4c0c0;
  min-height: 10vh;
  padding: 1rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Footer = () => {
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
