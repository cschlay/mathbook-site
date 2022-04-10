import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  href: string;
}

const StyledLink = styled.a`
  color: var(--color-link);
  text-decoration: none;
  &:hover {
    filter: brightness(110%);
    text-decoration: underline;
  }
  &:visited {
    color: var(--color-link);
  }
`;

export const Link = ({ children, href }: Props): JSX.Element => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
