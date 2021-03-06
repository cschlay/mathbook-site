import { ExerciseProblem } from "../types";
import { env } from "../../env";
import useSWR from "swr";
import { useState } from "react";

interface HookValue extends ExerciseProblem {
  error: string;
  submit: (solution: unknown) => void;
}

export const useExercise = (slug: string): HookValue | null => {
  const { data, mutate } = useSWR<ExerciseProblem>(`/problems/${slug}`);
  const [error, setError] = useState("");

  // TODO: Replace with Ky
  const submit = async (solution: unknown): Promise<boolean> => {
    const url = `${env.API_HOST}/problems/${slug}`;
    const accessToken = localStorage.getItem("AccessToken");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solution),
    });

    if (response.ok) {
      await mutate();
    } else {
      setError("Your answer was incorrect, check the spaces.");
    }

    return response.ok;
  };

  if (!data) {
    return null;
  }

  return {
    ...data,
    error,
    submit,
  };
};
