export type Optional<T> = T | undefined;
export type CssSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface User {
  email: string;
  username: string;
  points: number;
}

type SubmissionType = { input: string };

export interface ExerciseProblem {
  slug: string;
  description: string;
  points: number;
  submission?: {
    data: SubmissionType;
    solved_at: string;
  };
}

export interface MdxFrontmatter {
  title: string;
}
