import styled from "@emotion/styled";
import { ChangeEvent } from "react";

const StyledTextarea = styled.textarea`
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  resize: none;

  &:focus {
    border: 1px solid lightblue;
    outline: 2px solid lightskyblue;
  }
`;

interface Props {
  disabled?: boolean;
  onChange: (value: string) => void;
  value: string;
}

export const Textarea = ({ disabled, onChange, value }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledTextarea disabled={disabled} onChange={handleChange} value={value} />
  );
};
