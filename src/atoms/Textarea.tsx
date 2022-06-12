import { ChangeEvent } from "react";
import { CssSizes } from "app/types";
import styled from "@emotion/styled";

interface Props {
  disabled?: boolean;
  onChange: (value: string) => void;
  size?: CssSizes;
  value: string;
}

export const Textarea = ({ disabled, onChange, size = "md", value }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Wrapper
      disabled={disabled}
      onChange={handleChange}
      rows={heightTable[size]}
      value={value}
    />
  );
};

const Wrapper = styled.textarea`
  border: var(--border);
  border-radius: var(--radius);
  padding: var(--space-sm);
  width: calc(100% - var(--space-sm));
  resize: none;

  &:focus {
    border: 1px solid lightblue;
    outline: 2px solid lightskyblue;
  }
`;

const heightTable: Record<CssSizes, number> = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16,
};
