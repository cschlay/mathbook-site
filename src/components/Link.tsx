import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  href: string;
  inTab?: boolean;
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

export const Link = ({ children, href, inTab }: Props): JSX.Element => {
  const target: string | undefined = inTab ? "_blank" : undefined;

  return (
    <StyledLink href={href} target={target} rel="noreferrer">
      {children}
    </StyledLink>
  );
};
