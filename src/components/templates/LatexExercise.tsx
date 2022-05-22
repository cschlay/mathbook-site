import { Problem } from "../MathDisplay/Problem";
import { Textarea } from "../atoms/Textarea";
import { ReactNode, useState } from "react";
import { Button } from "../atoms/Button";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { SolvedLabel } from "../atoms/SolvedLabel";
import { MathDisplay } from "../MathDisplay/MathDisplay";
import { env } from "../../../env";
import { useUser } from "../../hooks/useUser";

interface Props {
  /** Write the description as child element. */
  children: ReactNode;
  answer?: RegExp;
  slug?: string;
}

export const LatexExercise = ({ slug, answer, children }: Props) => {
  const user = useUser();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [solved, setSolved] = useState(false);

  const submit = async (): Promise<boolean> => {
    if (!slug) {
      return true;
    }

    const response = await fetch(`${env.API_HOST}/problems/${slug}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
      body: JSON.stringify({ input }),
    });
    return response.ok;
  };

  const handleSubmit = async () => {
    console.info(`Checking input "${input}" against answer "${answer}"`);

    let correct;
    if (answer) {
      if (input.match(answer)) {
        correct = await submit();
      }
    } else {
      correct = await submit();
    }

    if (!correct) {
      setError("Your answer was incorrect, check the spaces.");
    }
    user.reload();
    setSolved(correct);
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
