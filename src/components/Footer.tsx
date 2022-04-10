import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "./Link";
import styled from "@emotion/styled";
import { LinkIcon } from "./LinkIcon";

const StyledFooter = styled.footer`
  background: #110707;
  color: #f3ecec;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <p>
        Licensed under{" "}
        <Link href="https://choosealicense.com/licenses/agpl-3.0/">
          GNU AGPLv3
        </Link>{" "}
        and content with{" "}
        <Link href="https://openlogicproject.org/olp-license/">CC BY 4.0</Link>.
      </p>

      <LinkIcon
        href="https://github.com/cschlay/mathbook-site"
        icon={<FaGithub />}
      />
    </StyledFooter>
  );
};
