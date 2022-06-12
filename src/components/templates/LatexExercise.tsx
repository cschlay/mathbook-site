import { useEffect, useState } from "react";
import { Problem } from "../MathDisplay/Problem";
import { Textarea } from "../../atoms/Textarea";
import { Button } from "../../atoms/Button";
import { ErrorMessage } from "../../atoms/ErrorMessage";
import { SolvedLabel } from "../../atoms/SolvedLabel";
import { MathDisplay } from "../MathDisplay/MathDisplay";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ReactMarkdown from "react-markdown";
import { AuthRequired } from "../../molecules/AuthRequired";
import { useExercise } from "../../hooks/useExercise";

interface Props {
  /** Write the description as child element. */
  slug: string;
}

export const LatexExercise = ({ slug }: Props) => {
  const exercise = useExercise(slug);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  console.log(exercise);
  const solved = Boolean(exercise?.solvedAt);

  const handleSubmit = async () => exercise.submit({ textInput: input });

  useEffect(() => {
    if (exercise && exercise.submission) {
      setInput(exercise.submission.textInput);
    }
  }, [exercise]);

  if (!exercise) {
    return <AuthRequired />;
  }

  return (
    <Problem points={exercise.points}>
      <ReactMarkdown
        children={exercise.description}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
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
        <SolvedLabel points={exercise.points} />
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button onClick={handleSubmit}>Submit</Button>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </Problem>
  );
};
