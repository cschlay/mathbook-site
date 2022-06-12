import { Fragment } from "react";
import { MathDisplay } from "app/atoms/MathDisplay";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ColorPaletteExample = () => {
  return (
    <Container>
      <Palette id="1" colors={["#c74c0e", "#3da4db"]} />
      <Palette id="2" colors={["#6b2b54", "#3da4db"]} />
      <Palette id="3" colors={["#3da4db", "#c74c0e"]} />
    </Container>
  );
};

interface PaletteProps {
  id: string;
  colors: string[];
}

const StyledPalette = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  &:hover {
    background-color: #e6eff5;
  }
`;

const Color = styled.div<{ code: string }>`
  border-radius: 0.25rem;
  background: ${({ code }) => code};
  color: white;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`;

const Palette = ({ id, colors }: PaletteProps) => {
  return (
    <StyledPalette>
      <MathDisplay value={`S_${id} = \\{`} />
      {colors.map((color, i) => (
        <Fragment key={`${id}-${color}`}>
          <Color code={color}>{color}</Color>
          {i < colors.length - 1 && ","}
        </Fragment>
      ))}
      <MathDisplay value="\}" />
    </StyledPalette>
  );
};
