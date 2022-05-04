import { Problem } from "../MathDisplay/Problem";
import { Textarea } from "../atoms/Textarea";
import { ReactNode, useState } from "react";
import { Button } from "../atoms/Button";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { SolvedLabel } from "../atoms/SolvedLabel";
import { MathDisplay } from "../MathDisplay/MathDisplay";
import styled from "@emotion/styled";

const Preview = styled.div`
  text-align: center;
`;

interface Props {
  /** Write the description as child element. */
  children: ReactNode;
  answer: RegExp;
}

export const LatexExercise = ({ answer, children }: Props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [solved, setSolved] = useState(false);

  const handleSubmit = () => {
    console.info(`Checking input "${input}" against answer "${answer}"`);
    if (input.match(answer)) {
      setSolved(true);
    } else {
      setError("Your answer was incorrect, check the spaces.");
    }
  };

  return (
    <Problem>
      {children}
      <Textarea
        disabled={solved}
        onChange={(value) => {
          setInput(value);
          setError("");
        }}
        value={input}
      />
      <MathDisplay children={input} block={true} />

      {solved ? (
        <SolvedLabel />
      ) : (
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </Problem>
  );
};
