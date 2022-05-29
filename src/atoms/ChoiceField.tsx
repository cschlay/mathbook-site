import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "@emotion/styled";

export interface Choice {
  id: number | string;
  label: string;
}

interface Props {
  name: string;
  type: "radio" | "checkbox";
  register: UseFormRegister<FieldValues>;
  value: Choice;
}

export const ChoiceField = ({ name, register, type, value }: Props) => {
  return (
    <Container>
      <input name={name} value={value.id} type={type} {...register(name)} />
      {value.label}
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
`;
