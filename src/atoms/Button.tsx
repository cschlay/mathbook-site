import { CssSizes } from "app/types";
import { ReactNode } from "react";
import styled from "@emotion/styled";

interface BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  size?: CssSizes;
}

interface NormalButtonProps extends BaseProps {
  children: ReactNode;
  onClick: () => void;
}

interface SubmitButtonProps extends BaseProps {
  children: ReactNode;
  type: "submit";
}

export type Props = NormalButtonProps | SubmitButtonProps;

export const Button = ({
  children,
  onClick,
  size = "md",
  type = "button",
}: Props) => {
  return (
    <Wrapper onClick={onClick} size={size} type={type}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-brand);
  color: var(--color-on-brand);
  border: none;
  border-radius: var(--radius);
  padding: ${({ size }) =>
    `calc(var(--space-${size}) / 2) var(--space-${size})`};

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
  }
`;
