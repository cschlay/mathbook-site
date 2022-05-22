import { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
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

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
