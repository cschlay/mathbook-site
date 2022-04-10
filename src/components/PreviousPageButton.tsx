import * as React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styled from "@emotion/styled";

const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0;

  &:hover {
    color: var(--color-link);
    cursor: pointer;
  }
`;

export const PreviousPageButton = (): JSX.Element => {
  const handleClick = () => history.back();

  return (
    <Container onClick={handleClick}>
      <FaArrowLeft /> Previous
    </Container>
  );
};
