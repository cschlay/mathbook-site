import { Optional } from "app/types";
import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  href: string;
  newTab?: boolean;
}

export const Link = ({ children, href, newTab }: Props) => {
  const target: Optional<string> = newTab ? "_blank" : undefined;

  return (
    <Wrapper href={href} target={target} rel="noreferrer">
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
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
