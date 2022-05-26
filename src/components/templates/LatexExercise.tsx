import { useEffect, useState } from "react";
import { Problem } from "../MathDisplay/Problem";
import { Textarea } from "../atoms/Textarea";
import { Button } from "../atoms/Button";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { SolvedLabel } from "../atoms/SolvedLabel";
import { MathDisplay } from "../MathDisplay/MathDisplay";
import { env } from "../../../env";
import { useUser } from "../../hooks/useUser";
import useSWR from "swr";
import { ExerciseProblem } from "../../types";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ReactMarkdown from "react-markdown";

interface Props {
  /** Write the description as child element. */
  answer?: RegExp;
  slug: string;
}

export const LatexExercise = ({ slug, answer }: Props) => {
  const user = useUser();
  const { data, mutate } = useSWR<ExerciseProblem>(`/problems/${slug}`);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [solvedAt, setSolvedAt] = useState("");

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
    setSolvedAt(correct);
    await mutate();
  };

  useEffect(() => {
    if (data && data.submission) {
      setInput(data.submission.data.input);
      setSolvedAt(data.submission.solved_at);
    }
  }, [data]);

  if (!data) {
    // TODO: Show auth error!
    return null;
  }

  return (
    <Problem points={data.points}>
      <ReactMarkdown
        children={data.description}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      <Textarea
        disabled={solvedAt !== ""}
        onChange={(value) => {
          setInput(value);
          setError("");
        }}
        value={input}
      />
      <MathDisplay children={input} block={true} />
      {solvedAt ? (
        <SolvedLabel points={data.points} />
      ) : (
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </Problem>
  );
};
