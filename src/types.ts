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
