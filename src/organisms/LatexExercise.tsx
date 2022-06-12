/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import { AuthRequired } from "../molecules/AuthRequired";
import { Button } from "../atoms/Button";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { MathDisplay } from "../atoms/MathDisplay";
import { Problem } from "../molecules/Problem";
import ReactMarkdown from "react-markdown";
import { SolvedLabel } from "../atoms/SolvedLabel";
import { Textarea } from "../atoms/Textarea";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { useExercise } from "../hooks/useExercise";

interface Props {
  /** Write the description as child element. */
  slug: string;
}

export const LatexExercise = ({ slug }: Props) => {
  const exercise = useExercise(slug);
  const solved = Boolean(exercise?.solvedAt);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

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
        size="sm"
        value={input}
      />
      <MathDisplay value={input} block={true} />
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
