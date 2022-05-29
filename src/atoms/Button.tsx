import { ReactNode } from "react";
import styled from "@emotion/styled";

interface BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonProps extends BaseProps {
  children: ReactNode;
  onClick: () => void;
}

interface SubmitButtonProps extends BaseProps {
  children: ReactNode;
  type: "submit";
}

type Props = ButtonProps | SubmitButtonProps;

export const Button = ({ children, onClick, type = "button" }: Props) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-brand);
  color: var(--color-brand-on);
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
  }
`;
