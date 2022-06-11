export type Optional<T> = T | undefined;

export interface SectionItem {
  id: string;
  frontmatter: {
    title: string;
    sources: string[];
  };
  slug: string;
}

export interface ChapterItem {
  index: number;
  items: SectionItem[];
  name: string;
}

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
