import { Problem } from "../MathDisplay/Problem";
import { Textarea } from "../atoms/Textarea";
import { ReactNode, useState } from "react";
import { Button } from "../atoms/Button";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { SolvedLabel } from "../atoms/SolvedLabel";

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
    console.info(input.match(answer));
    if (input.match(answer)) {
      setSolved(true);
    } else {
      setError("Your answer was incorrect, check the syntax.");
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
