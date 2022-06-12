export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type CssSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface User {
  email: string;
  username: string;
  points: number;
}

type SubmissionType = { textInput: string };

export interface ExerciseProblem {
  slug: string;
  description: string;
  points: number;
  submission?: SubmissionType;
  solvedAt?: string;
}

export interface MdxFrontmatter {
  title: string;
}
