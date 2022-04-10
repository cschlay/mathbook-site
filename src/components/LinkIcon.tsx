import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  href: string;
  icon: React.ReactNode;
}

const StyledLink = styled.a`
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkIcon = ({ href, icon }: Props): JSX.Element => {
  return (
    <StyledLink href={href} rel="noreferrer">
      {icon}
    </StyledLink>
  );
};
